// src/pages/Events.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = ({ setEvents }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, description, date, location, organizer };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setTitle('');
    setDescription('');
    setDate('');
    setLocation('');
    setOrganizer('');
  };

  return (
    <div className="form-container">
      <h1>Event Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizer">Organizer:</label>
          <input
            type="text"
            id="organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <Link to="/my-events" className="link-button">My Events</Link>
    </div>
  );
};

export default Events;
