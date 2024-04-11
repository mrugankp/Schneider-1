import React, { useState, useEffect } from 'react';
import './TruckConnect.css';
import { useNavigate } from 'react-router-dom';
import MapComponent from './MapComponent';

const TruckConnect = () => {
  let navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

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

  const speed = 120; // This could come from props, state, or be calculated

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
          Disable Driving Mode
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

      <div className="stats-container">
        <div className="time-display">
          <h1><b>Time: {formattedTime}</b></h1>
        </div>

        <div className="speed-bar">
          Speed: <div className="speed-indicator" style={{ width: 100, backgroundColor: getSpeedBarColor(speed),}}>{speed}mph
        </div>
      </div>

        <div className="stat">
           <b>To Dest: 180 miles</b>
        </div>
        <div className="stat">
        <b>Total Time: 2 hr 30 min (Driving)</b>
        </div>
        <div className="stat">
        <b>Suggested Break: 12:00 PM</b>
        </div>
      </div>
 
      <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-segment driving"></div>
        <div className="timeline-segment break"></div>
        <div className="timeline-segment driving"></div>
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