import { Paper, TextField, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import "./login.styled.css";

export default function Login() {
  // const [email,setEmail] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs); // look for ideas for less re-rendering
  };
  return (
    <div className="wrapper">
      <h3>Let's login</h3>
      <Paper className="login-box">
        <img
          className="login-image"
          src="https://images.unsplash.com/photo-1478860002487-680cc42afbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="trip"
        />
        <form className="form-box">
          <TextField
            onChange={handleChange}
            value={inputs.email}
            type="email"
            name="email"
            required
            label="email"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type="password"
            label="password"
            variant="standard"
            fullWidth
            margin="normal"
          />
                    <TextField
            onChange={handleChange}
            value={inputs.confirmPassword}
            name="confirmPassword"
            type="password"
            label="confirm password"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <Divider sx={{ mt: 4 }} />
          <Button sx={{ mt: 4 }} color="success" fullWidth variant="contained">
            Login
          </Button>
          <Button sx={{ mt: 4 }} fullWidth variant="contained">
            G Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
