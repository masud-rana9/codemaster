import React, { useRef } from "react";
import "./Testimonials.css";
import { assets } from "../../assets/assets";
//import my_Testimonials from "../../assets/my_Testimonials";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const sliderForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const sliderBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonial" className="testimonials">
      <img
        onClick={sliderForward}
        className="next-btn"
        src={assets.next_icon}
        alt=""
      />
      <img
        onClick={sliderBackward}
        className="back-btn"
        src={assets.back_icon}
        alt=""
      />
      <div className="silder">
        <ul ref={slider}>
          <li>
            <div className="silde">
              <div className="user_info">
                <img src={assets.user_1} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="silde">
              <div className="user_info">
                <img src={assets.user_2} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="silde">
              <div className="user_info">
                <img src={assets.user_3} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="silde">
              <div className="user_info">
                <img src={assets.user_4} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
