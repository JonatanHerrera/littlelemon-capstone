import React from "react";
import "./Specials.css";
import Card from "../cards/Card";

function Specials({ specials }) {
  return (
    <div className="specials-container">
      <div className="header-specials">
        <div className="specialTitle-container">
          <h1>This Weeks Specials</h1>
        </div>
        <div className="specialButtomContainer">
          <button className="actionBut">Online Menu</button>
        </div>
      </div>
      <div className="cards-specials">
        {specials.map((special,index) => (
          <Card
            key={index}
            name={special.name}
            description={special.description}
            image={special.urlImage}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Specials;
