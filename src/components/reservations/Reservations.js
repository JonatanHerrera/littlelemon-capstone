import React from "react";
import Footer from "../footer/Footer";
import ReservationForm from "./ReservationForm";
import "./Reservations.css";
import { useState } from "react";
const Reservations = () => {

  const  [availableTimes  , setAvalibleTimes] = useState(
    [
    {id:1,value: '17:00',avalible: true},
    {id:2,value: '18:00',avalible: true},
    {id:3,value: '19:00',avalible: true},
    {id:4,value: '20:00',avalible: true},
    {id:5,value: '21:00',avalible: true},
    {id:6,value: '22:00',avalible: true}]
  )

  const initializeTimes = () => {
    setAvalibleTimes([
      { id: 1, value: '17:00', available: true },
      { id: 2, value: '18:00', available: true },
      { id: 3, value: '19:00', available: true },
      { id: 4, value: '20:00', available: true },
      { id: 5, value: '21:00', available: true },
      { id: 6, value: '22:00', available: true },
    ]);
  };
  return (
    <>
      <div className="reservations-container">
        <ReservationForm avalibleTimes = {availableTimes}  setAvalibleTimes = {setAvalibleTimes}/>
      </div>
      <Footer />
    </>
  );
};

export default Reservations;
