import CountdownTimer from './components/Countdown/CountdownTimer';
import './App.css';
import './components/Countdown/Countdown.css';

const WEDDING_TIME = new Date(2024, 9, 5, 18, 0);

const date = WEDDING_TIME;

export function App() {
  return (
    <div className="App">
      <main>
        <p className="title-text">Save</p>
        <p className="title-text">the date</p>
        <p className="name-date">Alberto & Sara</p>
        <p className="name-date">05 | 10 | 24</p>
      </main>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <CountdownTimer targetDate={date} />
    </footer>
  );
}
