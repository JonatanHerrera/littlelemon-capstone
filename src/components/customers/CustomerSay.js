import React from "react";
import "./CustomerSay.css";
import CustomerCard from "../customerCard/CustomerCard";

const CustomerSay = () => {
  const rating = [
    { name: "Pepito", image: "/5919211.jpg", stars: 5 },
    { name: "Julanito", image: "/5919211.jpg", stars: 4 },
    { name: "Sultanita", image: "/5919211.jpg", stars: 3 },
    { name: "Peranita", image: "/5919211.jpg", stars: 4 },
  ];

  return (
    <div className="custometSayContainer">
      {rating.map((rating, index) => {
        return (
          <CustomerCard
            key={index}
            name={rating.name}
            image={rating.image}
            stars={rating.stars}
          />
        );
      })}
    </div>
  );
};

export default CustomerSay;
