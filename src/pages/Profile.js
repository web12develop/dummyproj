// src/pages/Profile.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import './Profile.css'; // Example for additional styling if needed

const Profile = () => {
  return (
    <div className="container profile">
      <h1>Profile</h1>
      <div className="button-group">
        <Link to="/profile/login" className="button">Login</Link>
        <Link to="/profile/register" className="button">Register</Link>
      </div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
};

export default Profile;
