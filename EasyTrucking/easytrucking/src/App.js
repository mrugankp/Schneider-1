import React, { useState } from 'react';
import TruckConnect from './TruckConnect';
import CommunicationsChannel from './CommunicationsChannel'; 
import StartScreen from './StartScreen';
import StatsBoard from './statsBoard';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import MapComponent from './MapComponent';
import MaintenancePage from './MaintenancePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/truckconnect" element={<TruckConnect />} />
        <Route path="/communications" element={<CommunicationsChannel />} />
        <Route path="/stats" element={<StatsBoard />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;