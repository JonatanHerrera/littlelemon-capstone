import React from "react";
import { useState } from "react";
import "./ReservationForm.css";
import ReservationModal from "./reservationModal/ReservationModal";

const ReservationForm = ({ avalibleTimes, setAvalibleTimes }) => {
  const avalibleTimesChilf = [...avalibleTimes];

  const getAvalibleTimes = () => {
    const filteredTimes = avalibleTimesChilf.filter(
      (time) => time.avalible == true
    );
    return filteredTimes;
  };

  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    occasion: "",
  });
  const [modal, setModal] = useState(false);

  const updateAvalibleTimeState = (actualValue) => {
    const updatedTimes = avalibleTimesChilf.map((time) => {
      if (time.value === actualValue) {
        return { ...time, avalible: false };
      }
      return time;
    });

    setAvalibleTimes(updatedTimes);
  };

  const resetForm = () => {
    setFormData({
      date: "",
      time: "",
      guests: "",
      occasion: "",
    });
  };
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
    updateAvalibleTimeState(formData.time);
    toggleModal();
    resetForm();
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
            value={formData.date}
          />
        </div>
        <div className="form-input">
          <label htmlFor="book-time">Choose time</label>
          <select
            id="book-time "
            name="time"
            onChange={handleChange}
            required
            value={formData.time}
          >
            <option value="">Select an time</option>
            {getAvalibleTimes().map((time) => {
              return (
                <option key={time.id} value={time.value}>
                  {time.value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="range"
            id="guests"
            name="guests"
            min={1}
            max={20}
            onChange={handleChange}
            value={formData.guests}
            required
          />
          <h1>{formData.guests}</h1>
        </div>
        <div className="form-input">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={handleChange}
            value={formData.occasion}
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
