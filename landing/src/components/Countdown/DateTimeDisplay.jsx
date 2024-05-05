import React from 'react';

function DateTimeDisplay({ value, type }) {
  return (
    <div className="countdown">
      <p>
        {value}
        {' '}
        {type}
      </p>
    </div>
  );
}

export default DateTimeDisplay;
