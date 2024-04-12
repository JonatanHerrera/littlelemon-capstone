import React from "react";
import "./ReservationModal.css";

const ReservationModal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}>
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <div class="wrapper">
            {" "}
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <h1>Booking Confirm</h1>
          <p>Thanks for yours reservation</p>
          <p>We will wait for your visit</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
