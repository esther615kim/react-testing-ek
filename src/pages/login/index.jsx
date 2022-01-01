import { Paper, TextField, Button, Divider } from "@mui/material";
import React from "react";
import "./login.styled.css";

export default function Login() {
  return (
    <div class="wrapper">
      <h3>Let's Login</h3>
      <Paper class="login-box">
        <img
          class="login-image"
          src="https://images.unsplash.com/photo-1478860002487-680cc42afbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="trip"
        />
        <form class="form-box">
          <TextField
            id="id"
            type="email"
            required
            label="email"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            type="password"
            label="password"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
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
