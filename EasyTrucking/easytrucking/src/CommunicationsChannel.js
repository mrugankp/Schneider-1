import React from 'react';
import './CommunicationsChannel.css'; // Make sure to create a CSS file for styling

const CommunicationsChannel = () => {
  return (
    <div className="communications-container">
      <h1>COMMUNICATIONS</h1>
      <div className="communications-header">
        <h2>Connecting Fellow Drivers!</h2>
        <input type="search" placeholder="Search" className="communications-search" />
      </div>
    <div className="communications-stories">
    <div className="story" id="my-story">
      <img src='/Users/tanayparikh/Desktop/CS 639/Schneider-1/EasyTrucking/easytrucking/src/images/download.jpeg' alt="Me" className="story-picture" />
      <span>Me</span>
      <span>Long Drive Tn!</span>
    </div>
    <div className="story">
      <img src="DrivingMode.jpeg" alt="Eric" className="story-picture" />
      <span>Eric</span>
      <span>Guys, where's the brake?</span>
    </div>
    <div className="story">
      <img src="prof photo.jpeg" alt="Jane" className="story-picture" />
      <span>Jane</span>
      <span>On the Move!</span>
    </div>
  </div>
      <div className="communications-messages">
        <div className="message">
          <div className="message-info">
            <span>Jake (Manager)</span>
            <span className="message-status">Keep me Posted!</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Helen (S1342)</span>
            <span className="message-status">Hey, let me know if you get any obstructions...</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Anish (S1343)</span>
            <span className="message-status">When does your shift...</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Mrugank (S1344)</span>
            <span className="message-status">Hey, did your truck...</span>
          </div>
          <button className="call-button">Call</button>
        </div>
        <div className="message">
          <div className="message-info">
            <span>Benjamin (S1345)</span>
            <span className="message-status">That was funny...</span>
          </div>
          <button className="call-button">Call</button>
        </div>
      </div>
      <div className="communications-new-message">
        <button className="new-message-button">+</button>
      </div>
    </div>
  );
};

export default CommunicationsChannel;
