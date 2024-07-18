import React from 'react';
import './Activity.css';

function Activity({ title, value, unit }) {
  return (
    <div className="Activity">
      <h2>{title}</h2>
      <p>{value} {unit}</p>
    </div>
  );
}

export default Activity;
