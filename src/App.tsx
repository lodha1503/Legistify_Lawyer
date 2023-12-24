import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Appointment from './Appointment';
import Our_Team from './Our_Team';

export default function App() {
  return (
    
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path="/Appointment" element={<Appointment/>} />
          <Route path="/our_team" element={<Our_Team/>} />
        </Routes>
      </Router>

  );
}
