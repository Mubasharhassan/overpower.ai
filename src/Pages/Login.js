import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import logo from "../Assets/Images/Overpower-Vertical-Web-150px.png";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Data = {
    email: email,
    password: password,
  };

  const client = axios.create({
    baseURL: "https://admin-auth.herokuapp.com/auth/login",
  });

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(Data);
    try {
      let response = await client.post("",  Data );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <Box className="box">
          <img src={logo} alt={logo} />
          <Box component="form" className="form">
            <h1>Please Fill to Sign In</h1>
            <div className="login-input">
              <input
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            {/* {errors.email && <p className="error">{errors.email.message}</p>} */}
            <div className="login-input">
              <input
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            {/* {errors.password && errors.password.type === "required" && (
            <p className="error">Password is required.</p>
            )} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
            >
              {/* {loading ? <>Loading..</> : <> Login</>} */}
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
