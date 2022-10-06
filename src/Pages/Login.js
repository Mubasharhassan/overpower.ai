import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Container } from '@mui/material';
import logo from '../Assets/Images/Overpower-Vertical-Web-150px.png';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem('token') || false)
  );
  const Data = {
    email: email,
    password: password
  };
  const client = axios.create({
    baseURL: 'http://192.168.100.16:8000/auth/login'
  });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await client.post('', Data);
      setLoading(false);
      console.log(response.data.token);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error('Log in successfully!!');
    }
  };

  console.log(loading);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='login'>
      <Container component='main' maxWidth='xs'>
        <Box className='box'>
          <img src={logo} alt={logo} />
          <Box component='form' className='form'>
            <h1>Please Fill to Sign In</h1>
            <div className='login-input'>
              <input
                placeholder='Email'
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            {/* {errors.email && <p className="error">{errors.email.message}</p>} */}
            <div className='login-input'>
              <input
                type='password'
                placeholder='Password'
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            {/* {errors.password && errors.password.type === "required" && (
            <p className="error">Password is required.</p>
            )} */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              onClick={handleClick}
              disabled={loading}
            >
              {/* {loading ? <>Loading..</> : <> Login</>} */}
              {!loading ? 'Login' : 'please wait...'}
              {/* Login */}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
