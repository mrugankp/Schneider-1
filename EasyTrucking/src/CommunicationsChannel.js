import React from 'react';
import './CommunicationsChannel.css';

const CommunicationsChannel = () => {
  return (
    <div className="CommunicationsChannel-container">
      <div className="CommunicationsChannel-header">
        <h1>TruckConnect</h1>
        <p>Real-time updates, traffic suggestions</p>
      </div>
      <div className="CommunicationsChannel-section">
        <div className="CommunicationsChannel-item">
          <img src="breaks-icon.png" alt="Breaks Icon" />
          <div className="CommunicationsChannel-info">
            <p className="CommunicationsChannel-number">100</p>
            <p className="CommunicationsChannel-text">Breaks and drives total</p>
          </div>
        </div>
        {/* Repeat for each CommunicationsChannel item */}
      </div>
      <div className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievement">
          <p className="achievement-title">Drive Master</p>
          <p className="achievement-description">Drive for 500 miles!</p>
          <div className="achievement-progress">
            <div className="progress-bar" style={{ width: '72%' }}></div>
          </div>
          <p className="achievement-status">360/500</p>
        </div>
        {/* Repeat for each achievement */}
      </div>
    </div>
  );
};

export default CommunicationsChannel;
