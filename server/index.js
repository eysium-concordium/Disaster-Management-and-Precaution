const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/User')
const { connectDB } = require("./db");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // MUST be explicit, not wildcard (*)
  credentials: true, // Required for withCredentials
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(express.json());
// app.use(
//   cors({
//     // origin: ["http://127.0.0.1:5173"],
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
app.use(cookieParser());

const varifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("not admin");
        }
      }
    });
  }
};

app.get("/test", (req, res) => {
  res.json("hello there");
});

app.get("/dashboard", varifyUser, (req, res) => {
  res.json("Success");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((user) => res.json({ success: true, message: "User created" }))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ Status: "Success", role: user.role });
        } else {
          return res.json("The password is incorrect");
        }
      });
    } else {
      return res.json("No record existed");
    }
  });
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

connectDB().then(() => {
  app.listen(3001, () => {
    console.log("Server is Running");
  });
});