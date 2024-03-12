import React from 'react';
import './TruckConnect.css';

const TruckConnect = () => {
  return (
    <div className="truck-connect-container">
      <header className="truck-connect-header">
        <h1>Welcome to TruckConnect</h1>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-buttons">
          <button className="header-btn">Driving Mode</button>
          <button className="header-btn">Communication</button>
        </div>
      </header>

      <main className="main-content">
        <section className="real-time-updates">
          <h2>Real-time Updates</h2>
          <p>Stay informed about traffic and breaks</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '72%' }}></div>
          </div>
        </section>

        <section className="trip-insights">
          <h3 className="section-title">Trip Insights</h3>
          <div className="insights-grid">
            {/* Insight card 1 */}
            <div className="insight-card">
              <span className="item-icon">📍</span>
              <div className="insight-text">
                <p>3 Breaks Left</p>
                <p className="text-muted">Gas Stations</p>
              </div>
              <button className="insight-action">View</button>
            </div>
            {/* Insight card 2 */}
            <div className="insight-card">
              <span className="item-icon">💬</span>
              <div className="insight-text">
                <p>1 Suggested Break</p>
                <p className="text-muted">Community Chat</p>
              </div>
              <button className="insight-action">Connect</button>
            </div>
            {/* Insight card 3 */}
            <div className="insight-card">
              <span className="item-icon">✉️</span>
              <div className="insight-text">
                <p>New Messages</p>
                <p className="text-muted">Rest Area</p>
              </div>
              <button className="insight-action">Check-in</button>
            </div>
            {/* Insight card 4 */}
            <div className="insight-card">
              <span className="item-icon">⏰</span>
              <div className="insight-text">
                <p>Break Reminder</p>
                <p className="text-muted">Important</p>
              </div>
              <button className="insight-action">Join</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TruckConnect;
