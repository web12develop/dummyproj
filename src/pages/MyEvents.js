// src/pages/MyEvents.js
import React from 'react';
import './MyEvents.css';

const MyEvents = ({ events = [] }) => {
  return (
    <div className="container">
      <h1>My Events</h1>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        events.map((event, index) => (
          <div key={index} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.organizer}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyEvents;
