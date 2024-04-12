import React from "react";
import { useState } from "react";
import "./ReservationForm.css";
import ReservationModal from "./reservationModal/ReservationModal";

const ReservationForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const isAnyFieldEmpty = () => {
    return !(
      formData.date &&
      formData.time &&
      formData.guests &&
      formData.occasion
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleModal();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-container">
      {modal && <ReservationModal toggleModal={toggleModal} />}
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="date">Booking Date</label>
          <input
            type="date"
            id="date"
            name="date"
            min={today}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="book-time">Choose time</label>
          <select id="book-time " name="time" onChange={handleChange} required>
            <option value="">Select an time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min={1}
            max={20}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={handleChange}
            required
          >
            <option value="">Select an occasion</option>
            <option value="Bithday">Bithday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div className="form-input">
          <p hidden={!isAnyFieldEmpty()}>
            Please complete all the values to book your table
          </p>
          <button
            className="actionBut bookinBut"
            type="submit"
            disabled={isAnyFieldEmpty()}
          >
            Reserve
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
