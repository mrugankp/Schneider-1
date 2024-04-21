import React, { useState, useEffect } from 'react';
import './TruckConnect.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const TruckConnect = () => {
  let navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [speed, setSpeed] = useState(0);
  const [prevPosition, setPrevPosition] = useState(null);
  const location = useLocation();
  const dataPassed = location.state?.totalMiles;

  


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
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Setup to monitor speed
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude, speed: reportedSpeed } = position.coords;
          if (reportedSpeed !== null && reportedSpeed >= 0) {
            setSpeed((reportedSpeed * 3.6).toFixed(2)); // Convert m/s to km/h
          } else if (prevPosition) {
            // Manual speed calculation
            const timeDiff = (position.timestamp - prevPosition.timestamp) / 1000; // in seconds
            if (timeDiff > 0) {
              const distance = calculateDistance(latitude, longitude, prevPosition.latitude, prevPosition.longitude);
              const calculatedSpeed = (distance / timeDiff) * 3600; // km/h
              setSpeed(calculatedSpeed.toFixed(2));
            }
          }
          setPrevPosition({ latitude, longitude, timestamp: position.timestamp });
        },
        (error) => {
          console.error('Geolocation error:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

  return () => {
    clearInterval(intervalId);
    };
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
      </div>

      <div className='stat-container'>
        <div className='stat-grid-container'>
          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Speed:</b></div>
            <div className="speed-indicator" style={{ backgroundColor: getSpeedBarColor(speed) }}>
              <span className="stat-value">{speed}km/h</span>
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