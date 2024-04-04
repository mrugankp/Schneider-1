import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartScreen.css';

const StartScreen = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/signup'); // Navigate to signup when "Join" is clicked
  };

  return (
    <div className="start-screen-container">
      <div className="start-screen-logo"></div>
      <h1 className="start-screen-title">EasyTrucking</h1>
      <p className="start-screen-subtitle">Connect & Organize</p>
      <button onClick={handleJoinClick} className="join-button">Join</button>
    </div>
  );
};

export default StartScreen;
