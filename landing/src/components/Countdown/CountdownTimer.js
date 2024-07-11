import React from 'react';
import PropTypes from 'prop-types';

import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <h1>Llegado el día es!!!</h1>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={'días'} />
      <p>-</p>
      <DateTimeDisplay value={hours} type={'horas'} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'minutos'} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'segundos'} />
    </div>
  );
};

ShowCounter.propTypes = {
  days: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.string,
};

export default CountdownTimer;
