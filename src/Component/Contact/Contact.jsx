import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <div className="contact-title">
          <h2>Send us a message</h2>
          <img src={assets.msg_icon} alt="" />
        </div>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <div className="contact-info">
          <img src={assets.mail_icon} alt="" />
          <p>Contact@GreatStack.dev</p>
        </div>
        <div className="contact-info">
          <img src={assets.phone_icon} alt="" />
          <p>+1 123-456-7890</p>
        </div>
        <div className="contact-info">
          <img src={assets.location_icon} alt="" />
          <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
        </div>
      </div>

      <form className="contact-right">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" />
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" name="name" />
        <label>Your Email</label>
        <input type="text" placeholder="Enter your email" name="name" />
        <label>Write your message here...</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
