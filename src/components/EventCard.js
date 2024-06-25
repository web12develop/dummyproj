// src/components/EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
