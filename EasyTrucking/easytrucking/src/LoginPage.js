import React from 'react';
import './LoginPage.css'; // make sure to include the CSS file
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/truckconnect'); // Directly navigate to the TruckConnect route
    };

    return (
    <div className="login-container">
      <div className="login-logo">
        {/* Include your logo here */}
      </div>
      <h1>EasyTrucking</h1>
      <p>Sign up to access driving features</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Create a password" required />
        </div>
        <button type="submit">Join now</button>
        <div className="login-footer">
          Already a member? <a href="/login">Log In</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;