import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Reservations from "./components/reservations/Reservations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;
