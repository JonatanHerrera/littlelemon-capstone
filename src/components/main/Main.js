import React from "react";
import Hero from "../hero/Hero";
import Specials from "../specials/Specials";
import CustomerSay from "../customers/CustomerSay";
import About from "../about/About";

const Main = () => {
  const specials = [
    {
      name: "Greek Salad",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old.",
      urlImage: "/greek salad.jpg",
      price: 12.99,
    },
    {
      name: "Brucheta",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old.",
      urlImage: "/bruchetta.jpg",
      price: 5.99,
    },
    {
      name: "Lemon Dessert",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old.",
      urlImage: "/lemon dessert.jpg",
      price: 5.00,
    }
  ];

  return (
    <main>
      <Hero />
      <Specials specials={specials} />
      <CustomerSay />
      <About />
    </main>
  );
};

export default Main;
