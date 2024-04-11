import React from "react";
import "./Card.css";

function Card({ name, description, image, price }) {
  return (
    <div className="card">
      <div>
        <img className="cardImage" src={image}  alt={name} />
      </div>
      <div>
        <div className="cardHeader">
          <div className="CardTitle">
            <h1>{name}</h1>
          </div>
          <div className="CardPrice">
            <h3>${price}</h3>
          </div>
        </div>
        <div className="cardBodyContainer">
          <p className="cardText">{description}</p>
          <div className="orderDeliveryButtom">
            <a href="/">
              Order a delivery <img src="/Dish icon.svg" alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
