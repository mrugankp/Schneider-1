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
  // converts miles to kilometers
  const totalKilometers = dataPassed ? (dataPassed * 1.60934).toFixed(2) : null;
  let totalTime = totalKilometers ? totalKilometers / 60 : null; // totalTime in hours as a decimal
  let hours = totalTime ? Math.floor(totalTime) : null; // Extracting the whole hours
  let minutes = totalTime ? Math.floor((totalTime - hours) * 60) : null; // Converting the decimal part to minutes

console.log(hours + " hours and " + minutes + " minutes");
  console.log(totalKilometers)

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
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const currentHour = currentTime.toLocaleTimeString([], { hour: 'numeric'})
  const nextHourOne = currentTime.toLocaleTimeString([], { hour: 'numeric', timeZone: 'America/New_York'})
  const nextHourTwo = currentTime.toLocaleTimeString([], { hour: 'numeric', timeZone: 'America/Punta_Arenas'})

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
        <h1><b>Date: {formattedDate} | Time: {formattedTime}</b></h1>
      </div>

      <div className='stat-container'>
        <div className='stat-grid-container'>
          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Speed:</b></div>
            <div className="speed-indicator" style={{ backgroundColor: getSpeedBarColor(speed) }}>
              <span className="stat-value">{(speed* 0.621371).toFixed(2)}mph</span>
            </div>
          </div>

          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Total Distance to Destination:</b></div>
            <div className="stat-value"><b>{(totalKilometers*0.621371).toFixed(2)} miles</b></div>
          </div>

          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Total Time:</b></div>
            <div className="stat-value"><b>{hours} hours {minutes} minutes (Driving)</b></div>
          </div>

          <div className='indiv-stat-container'>
            <div className="stat-label"><b>Suggested Break:</b></div>
            <div className="stat-value"><b>18:30 hrs</b></div>
          </div>
        </div>
      </div>

      <div className="timeline-container">
      <div className="timeline">
        {/*add time values for each segment of the timeline*/}
        <div className="timeline-segment driving">1 hour</div>
        <div className="timeline-segment break">15 minutes Break</div>
        <div className="timeline-segment driving">1 hour</div>
        <div className="timeline-segment NA">Current</div>
      </div>
      <div className="timeline-labels">
        <span className="timeline-label middle">{currentHour}</span>
        <span className="timeline-label end">{nextHourOne}</span>
        <span className="timeline-label start">{nextHourTwo}</span>
      </div>
    </div>
    </div>

  );
};

export default TruckConnect;