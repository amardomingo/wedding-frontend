import React from 'react';
import PropTypes from 'prop-types';

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="countdown">
      <p>
        {value} {type}
      </p>
    </div>
  );
};

DateTimeDisplay.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
};

export default DateTimeDisplay;
