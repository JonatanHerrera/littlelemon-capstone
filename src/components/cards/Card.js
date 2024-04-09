import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div>
        <img className="cardImage" src="/greek salad.jpg" />
      </div>
      <div>
        <div className="cardHeader">
          <h1>Greek Salad</h1>
          <h3>$12.99</h3>
        </div>
        <div className="cardBodyContainer">
          <p className="cardText">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className="orderDeliveryButtom">
            <a >
              Order a delivery <img src="/Dish icon.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
