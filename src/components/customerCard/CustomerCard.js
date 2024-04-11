import React from "react";
import "./CustomerCard.css";
import Stars from "./Stars";

const CustomerCard = ({ name, image, stars }) => {
  return (
    <div className="customerCardContainer">
      <h1>{name}</h1>
      <img src={image} alt={name}/>
      <h3>Rating</h3>
      <div>
        <Stars nStarts={stars} maxStars={5} />
      </div>
    </div>
  );
};

export default CustomerCard;
