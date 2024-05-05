import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

function ExpiredNotice() {
  return (
    <div className="expired-notice">
      <h1>Llegado el día es!!!</h1>
    </div>
  );
}

function ShowCounter({
  days, hours, minutes, seconds,
}) {
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

export default CountdownTimer;
