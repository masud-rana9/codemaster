import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <div id="hero" className="hero container">
      <div className="hero-title">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <div className="hero-button">
          <button className="btn">
            Explore more <img src={assets.dark_arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
