import React from 'react';
import PropTypes from 'prop-types';

import DateTimeDisplay from './DateTimeDisplay.jsx';
import useCountdown from './useCountdown.jsx';

function ExpiredNotice() {
  return (
    <div className="expired-notice">
      <h1>Llegado el día es!!!</h1>
    </div>
  );
}

function ShowCounter({ days, hours, minutes, seconds }) {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type="días" />
      <p>-</p>
      <DateTimeDisplay value={hours} type="horas" />
      <p>:</p>
      <DateTimeDisplay value={minutes} type="minutos" />
      <p>:</p>
      <DateTimeDisplay value={seconds} type="segundos" />
    </div>
  );
}

ShowCounter.propTypes = {
  days: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

function CountdownTimer({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

CountdownTimer.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
