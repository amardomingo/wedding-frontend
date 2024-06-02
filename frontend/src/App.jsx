import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Location from "./components/Location";

import "./App.css";

const App = () => {
  return (
    <>
      <main className="App">
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route exac path={"/rsvp"} element={<RSVP/>} />
            <Route exac path={"/location"} element={<Location/>} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
};

export default App;
