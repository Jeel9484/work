import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setEmail }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputEmail && password === '123') {
      localStorage.setItem('email', inputEmail);
      setEmail(inputEmail);
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Paper sx={{ width: 300, p: 3, mx: 'auto', mt: 10 }}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <TextField fullWidth label="Email or Username" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} margin="normal" />
      <TextField fullWidth type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
      <Button fullWidth variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>Login</Button>
    </Paper>
  );
};

export default Login;