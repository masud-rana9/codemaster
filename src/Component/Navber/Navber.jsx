import React, { useEffect, useState } from "react";
import "./Navber.css";
import { assets } from "./../../assets/assets";
const Navber = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`nav container ${sticky ? "dark-nav" : ""}`}>
      <img src={assets.logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
