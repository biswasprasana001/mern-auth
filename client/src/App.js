// src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.baseURL = 'http://localhost:5000';

  const handleRegister = async () => {
    try {
      await axios.post('/api/register', { email, password });
      alert('User registered successfully');
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      alert('User logged in successfully! Token: ' + response.data.token);
    } catch (error) {
      console.error(error);
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Registration & Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;