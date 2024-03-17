import React from 'react';
import './DrivingMode.css'; // Ensure you have the corresponding CSS file

const DrivingMode = () => {
  return (
    <div className="driving-mode-container">
      <h1>TruckConnect</h1>
      <p className="tagline">Real-time updates, traffic suggestions</p>
      
      <div className="statistics">
        <div className="statistic">
          <div className="stat-icon">[Icon 1]</div>
          <div className="stat-count">100</div>
          <div className="stat-label">Breaks and drives total</div>
        </div>
        <div className="statistic">
          <div className="stat-icon">[Icon 2]</div>
          <div className="stat-count">10,000</div>
          <div className="stat-label">Breaks taken</div>
        </div>
        <div className="statistic">
          <div className="stat-icon">[Icon 3]</div>
          <div className="stat-count">10</div>
          <div className="stat-label">Miles driven</div>
        </div>
      </div>

      <div className="achievements">
        <div className="achievement">
          <h2>Drive Master</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '72%' }}></div>
          </div>
        </div>
        <div className="achievement">
          <h2>Weekender</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingMode;
