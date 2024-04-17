import React from 'react';
import './CommunicationsChannel.css'; // Make sure to create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const CommunicationsChannel = () => {
  const navigate = useNavigate();

  const handleBackToTruckConnect = () => {
    navigate('/truckconnect');
  };
  return (
    <div className='comm-container'>
      <div className='comm-title'>
        <h1>Communications Page</h1>
      </div>

      <input type="search" placeholder="Search" className="comm-search" />

      <div className='comm-stories-wrapper'>
        <h3 className='comm-stories-wrapper-h3'><b>User Updates:</b></h3>
        <div className='comm-stories'>
          <div className="user-story">
            <img src='https://images.pexels.com/photos/1635065/pexels-photo-1635065.jpeg' alt="Jimbo" className="user-picture" />
            <span><b>Jimbo:</b></span>
            <span>Loving the new tablets Schneider gave us!</span>
          </div>
          <div className="user-story">
            <img src="https://images.pexels.com/photos/1233363/pexels-photo-1233363.jpeg" alt="Rooster" className="user-picture" />
            <span><b>Rooster:</b></span>
            <span>Weight station at mile marker 45 is closed</span>
          </div>
          <div className="user-story">
            <img src='https://images.pexels.com/photos/10911533/pexels-photo-10911533.jpeg' alt="Maverick" className="user-picture" />
            <span><b>Maverick:</b></span>
            <span>Costco deliveries gotta be one of my favorite jobs!</span>
          </div>
          <div className="user-story">
            <img src='https://images.pexels.com/photos/7541981/pexels-photo-7541981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Cindy" className="user-picture" />
            <span><b>Cindy:</b></span>
            <span>Just stopped at kwik trip, they might have the best chicken tenders ever</span>
          </div>
          <div className="user-story">
            <img src='https://images.pexels.com/photos/6869061/pexels-photo-6869061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Coleman" className="user-picture" />
            <span><b>Coleman:</b></span>
            <span>Let's go Blackhawks! Would love a bedard goal tonight!</span>
          </div>
        </div>
      </div>

      <div className='message-container'>
        <h2>Messages:</h2>
        <hr style={{height: '4px',  backgroundColor: 'black', marginTop: '-5px'}}/>
        <div className="message">
          <div className="message-info">
            <span>Jake (Manager): </span>
            <span className="message-status">Keep me posted on where you stop for the night!</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Schneider Service (S1342): </span>
            <span className="message-status">Just ran into huge traffic near mile marker 45, be careful</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Anish (S1343): </span>
            <span className="message-status">When are you gonna start driving today?</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Mrugank (S1344): </span>
            <span className="message-status">Is your truck still giving you issues at all?</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Benjamin (S1345): </span>
            <span className="message-status">No way the Hurricanes make it to the ECF, they're offese isn't good enough</span>
          </div>
          <button className="call-button">Call</button>
        </div>
      </div>
      <div>
        <button onClick={handleBackToTruckConnect} class = "total-distance">Go Back to Truck Connect</button>
      </div>
    </div>
  )
}

export default CommunicationsChannel;