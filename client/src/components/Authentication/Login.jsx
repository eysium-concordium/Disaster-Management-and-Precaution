import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Cannot log in with the provided credentials");
      return;
    }
    console.log("Login with:", { email, password, rememberMe });

    const content = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:3001/login", content, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      if (res.data.success) {
        navigate("/");
      } else {
        console.error("Login failed:", res.data.message);
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 450, width: "100%", boxShadow: 3 }}>
        <CardHeader
          title={
            <Typography variant="h4" align="center" fontWeight="bold">
              Login
            </Typography>
          }
          subheader="Enter your email and password to login to your account"
          subheaderTypographyProps={{ align: "center" }}
          sx={{ pb: 0 }}
        />

        <CardContent sx={{ pt: 3 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="name@example.com"
                variant="outlined"
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Link href="/forgot-password" underline="hover" variant="body2">
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>

              <Divider sx={{ my: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Typography variant="body2" align="center">
                Don't have an account?{" "}
                <Link href="/signup" underline="hover" fontWeight="medium">
                  Sign up
                </Link>
              </Typography>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
