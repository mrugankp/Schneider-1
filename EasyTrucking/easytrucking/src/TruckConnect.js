import React from 'react';
import './TruckConnect.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCoffee } from '@fortawesome/free-solid-svg-icons';

const TruckConnect = () => {
  let navigate = useNavigate();

  const handleCommunicationsClick = () => {
    navigate('/communications');
  };

  const handleDrivingModeClick = () => {
    navigate('/driving-mode');
  };

  return (
    <div className="truck-connect-container">
      <header className="truck-connect-header">
        <h1>Welcome John,</h1>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">🔍</button>
        </div>
        <div className="header-buttons">
          <button onClick={handleDrivingModeClick} className="header-btn">Driving Mode</button>
          <button onClick={handleCommunicationsClick} className="header-btn communication-btn active">Communication</button>
        </div>
      </header>

      <main className="main-content">
        <section className="real-time-updates">
          <h2>Real-time Updates</h2>
          <p>Stay informed about traffic and breaks</p>
        </section>

        <section className="notifications">
          <h2>Notifications</h2>
          <div className="notification-card">
            <div className="notification-content">
              <h3>Warnings</h3>
              <p>Possible obstruction ahead on I-94, check route for alternative.</p>
              <p>Need to Refuel in 70 miles or 1hr 14 mins.</p>
            </div>
            <button className="see-all-btn">See All</button>
          </div>
        </section>

        <section className="insight-cards">
        <div className="insight-card drive">
          <FontAwesomeIcon icon={faTruck} size="2x" className="insight-icon" />
          <div className="insight-info">
            <p>154 miles driven</p>
            <p>Amount Earned: $934.02</p>
          </div>
          <button className="select-btn">Select</button>
        </div>

          <div className="insight-card break">
           <div className="insight-icon">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="insight-info">
            <p>Next Suggested Break</p>
              <p>04:30 pm</p>
            </div>
            <button className="select-btn">Select</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TruckConnect;
