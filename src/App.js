// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import MyEvents from './pages/MyEvents';
import News from './pages/News';
import Volunteer from './pages/Volunteer';
import Profile from './pages/Profile';
import './App.css';
import './pages/Events.css'; // Import Events.css
import './pages/MyEvents.css'; // Import MyEvents.css

const App = () => {
  const [events, setEvents] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events setEvents={setEvents} />} />
        <Route path="/my-events" element={<MyEvents events={events} />} />
        <Route path="/news" element={<News />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
