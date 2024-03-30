import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
    navigate('/home', { state: { username } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, minWidth: 150 }}>
        <h2 style={{ color: 'black' }}>Login</h2>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: 'maroon', color: 'white' }}
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
