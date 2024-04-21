import React, { useState, useEffect } from 'react';
import './TruckConnect.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const TruckConnect = () => {
  let navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const dataPassed = location.state?.totalMiles;
  console.log(dataPassed)
  const handleDisableDrivingMode = () => {
    navigate('/communications'); 
  };

  const handleStatsBoard = () => {
    navigate('/stats'); 
  };

  const handleMap = () => {
    navigate('/map');
  };

  const handleMaintenance = () => {
    navigate('/maintenance');
  }

  const speed = 68; // This could come from props, state, or be calculated

  // Function to determine the color based on speed
  const getSpeedBarColor = (currentSpeed) => {
    if (currentSpeed >= 90) {
      return 'red'; // Speed is 90 or above, color the bar red
    } else if (currentSpeed >= 60) {
      return 'yellow'; // Speed is between 60 and 89, color the bar yellow
    } else {
      return '#4CAF50'; // Speed is below 60, color the bar green
    }
  };

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  return (
    
    <div className="dashboard-container">
      <div className="button-container">
        <button onClick={handleStatsBoard} className="circle-button">
          My Stats
        </button>
        <button onClick={handleMap} className="circle-button">
          Map
        </button>
        <button onClick={handleDisableDrivingMode} className="circle-button">
          Communication
        </button>
        <button onClick={handleMaintenance} className='circle-button'>
          Maintenance Videos
        </button>
      </div>
      <div className="time-display">
        <h1><b>Time: {formattedTime}</b></h1>
      <div className="stats-container">
        <div className="time-display">
          <h1><b>Time: {formattedTime}</b></h1>
        </div>

        <div className="stat">
          Speed: <div className="speed-indicator" style={{ width: 100, backgroundColor: getSpeedBarColor(speed),}}>{speed}mph
        </div>
      </div>

      <div className='stat-container'>
        <div className='stat-grid-container'>
          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Speed:</b></div>
            <div className="speed-indicator" style={{ backgroundColor: getSpeedBarColor(speed) }}>
              <span className="stat-value">{speed}mph</span>
            </div>
          </div>

          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Total Distance to Destination:</b></div>
            <div className="stat-value"><b>{dataPassed} miles</b></div>
          </div>

          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Total Time:</b></div>
            <div className="stat-value"><b>2 hr 30 min (Driving)</b></div>
          </div>

          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Suggested Break:</b></div>
            <div className="stat-value"><b>12:00 PM</b></div>
          </div>
        </div>
      </div>

      <div className="timeline-container">
      <div className="timeline">
        {/*add time values for each segment of the timeline*/}
        <div className="timeline-segment driving">1 hour</div>
        <div className="timeline-segment break">15 minutes</div>
        <div className="timeline-segment driving">1 hour</div>
        <div className="timeline-segment NA">Freetime</div>
      </div>
      <div className="timeline-labels">
        <span className="timeline-label start">8 AM</span>
        <span className="timeline-label middle">9 AM</span>
        <span className="timeline-label end">10 AM</span>

      </div>
    </div>
    </div>

  );
};

export default TruckConnect;
