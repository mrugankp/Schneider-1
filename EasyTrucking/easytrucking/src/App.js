import React, { useState } from 'react';
import LoginPage from './LoginPage';
import TruckConnect from './TruckConnect';
import CommunicationsChannel from './CommunicationsChannel'; 
import StartScreen from './StartScreen';
import StatsBoard from './statsBoard';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/truckconnect" element={<TruckConnect />} />
        <Route path="/communications" element={<CommunicationsChannel />} />
        <Route path="/stats" element={<StatsBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;