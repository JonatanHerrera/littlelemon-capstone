import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heroDiv1">
        <h1 className="titleName">Little Lemon</h1>
        <h2 className="subTitleName">Chicago</h2>
        <p className="p-n">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Link to="/Reservations">
          <button className="actionBut reserveBut">Reserve a table</button>
        </Link>
      </div>
      <div className="heroDiv2">
        <img className="heroImage" src="/restauranfood.jpg"  alt="heroImage"/>
      </div>
    </div>
  );
};

export default Hero;
