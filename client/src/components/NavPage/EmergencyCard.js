import React from 'react';
import './EmergencyCard.css';

const EmergencyCard = ({ state }) => {
  return (
    <div className="emergency-card">
      <h3>{state.heading}</h3>
      <ul>
        {state.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyCard;
