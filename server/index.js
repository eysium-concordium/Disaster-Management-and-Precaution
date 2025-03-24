const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/User");
const varifyUser = require("./middlewares/verifyUser.js");
const dotenv = require("dotenv");

const userRouter = require("./routes/users.js");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

app.get("/dashboard", varifyUser, (req, res) => {
  res.json("Success");
});

app.use("/user", userRouter);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"); // Replace with your client-side origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3001, () => {
  console.log("Server is Running");
});
