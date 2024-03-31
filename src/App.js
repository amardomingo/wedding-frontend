import save_date from './save_the_date.png';
import CountdownTimer from './components/Countdown/CountdownTimer';
import './App.css';
import './components/Countdown/Countdown.css'

const WEDDING_TIME = new Date(2024, 10, 5, 18, 0);
const NOW_IN_MS = new Date().getTime();

const date = NOW_IN_MS + WEDDING_TIME;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={save_date} className="save-date" alt="save_the_date" />
      {/* </header> */}

    <CountdownTimer targetDate={date} />
  </div>
  );
}

export default App;
