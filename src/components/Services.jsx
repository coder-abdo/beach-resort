import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
  let services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails"
    },
    {
      icon: <FaHiking />,
      title: "endless hiking"
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle"
    },
    {
      icon: <FaBeer />,
      title: "Stronget Beer"
    }
  ];
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map(({ icon, title }, idx) => (
          <article className="service" key={idx}>
            <span>{icon}</span>
            <h6>{title}</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
