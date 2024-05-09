import React, { useEffect, useState } from "react";
import "./Navber.css";
import { assets } from "./../../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        <AnchorLink href="#hero">
          <li>Home</li>
        </AnchorLink>

        <AnchorLink offset={300} href="#program">
          <li>Program</li>
        </AnchorLink>
        <AnchorLink offset={100} href="#about">
          <li>About us</li>
        </AnchorLink>
        <AnchorLink offset={400} href="#campus">
          <li>Campus</li>
        </AnchorLink>
        <AnchorLink offset={300} href="#testimonial">
          <li>Testimonials</li>
        </AnchorLink>
        <li>
          <AnchorLink offset={300} href="#contact">
            <button className="btn">Contact us</button>
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
