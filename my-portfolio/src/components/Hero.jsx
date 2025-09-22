import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import img5 from "../assets/img5.jpg"; // background image

export default function Hero() {
  const roles = ["Freelancer", "Photo Editor", "Frontend Developer", "Designer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${img5})` }}
    >
      <div className="hero-content">
        <h1>Dipesh Thapa Magar </h1>
        <p>
          I'm{" "}
          <span key={currentRole} className="animated-role">
            {roles[currentRole]}
          </span>
        </p>
      </div>
    </section>
  );
}
