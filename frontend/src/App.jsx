import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <main className="App">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route exac path={"/rsvp"} component={RSVP} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
};

export default App;
