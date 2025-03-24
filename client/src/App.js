import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Registration/Home';
import Signup from './components/Registration/Signup';
import Login from './components/Registration/Login';
import Emergency from './components/NavPage/Emergency';
import Dashboard from './components/Registration/Dashboard';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication/register" element={<Signup />} />
        <Route path="/authentication/login" element={<Login />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
