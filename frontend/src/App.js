import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { AppLayout } from "./views/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Route component={AppLayout} />
    </BrowserRouter>
  );
}
