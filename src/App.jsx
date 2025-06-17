import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Layout from './components/Layout';

const App = () => {
  const [email, setEmail] = useState(localStorage.getItem('email'));

  const isAuthenticated = !!email;

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setEmail={setEmail} />} />
      <Route
        path="/"
        element={isAuthenticated ? <Layout email={email} setEmail={setEmail} /> : <Navigate to="/" />}
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};
export default App;