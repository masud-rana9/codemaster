import React, { useState } from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
const Contact = () => {
  const [result, setResult] = useState();
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f66e2598-6f62-481d-b9ca-42ea966c210a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };

  return (
    <div className="contact">
      <div id="contact" data-aos="fade-left" className="contact-col">
        <h3>
          Send us a message <img src={assets.msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul>
          <li>
            <img src={assets.mail_icon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={assets.phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={assets.location_icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit} data-aos="fade-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name" // This is correct
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            name="phone" // Corrected to a unique name attribute
            required
          />
          <label>Write your message here...</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
