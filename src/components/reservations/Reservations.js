import React from "react";
import Footer from "../footer/Footer";
import ReservationForm from "./ReservationForm";
import "./Reservations.css";
const Reservations = () => {
  return (
    <>
      <div className="reservations-container">
        <ReservationForm />
      </div>
      <Footer />
    </>
  );
};

export default Reservations;
