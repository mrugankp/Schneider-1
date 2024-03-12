import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TruckConnect from './TruckConnect';
import CommunicationsChannel from './CommunicationsChannel'; // The new page you'll create


const LoginPage = ({ onJoinNowClick }) => {
  // Ensure the event handler prevents form default action and calls the prop function
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form submission
    onJoinNowClick(); // Call the function passed as prop
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        {/* Logo goes here */}
      </div>
      <h1>EasyTrucking</h1>
      <p>Sign up to access driving features</p>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Form content */}
        <div className="input-container">
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Create a password" required />
        </div>
        <button type="submit">Join now</button>
        {/* Footer links */}
        <div className="login-footer">
          Already a member? <a href="/login">Log In</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
