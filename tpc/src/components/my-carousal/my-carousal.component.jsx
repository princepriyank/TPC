import React from "react";
import Slide2 from "../../assets/img/carousal/nitp.png";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <div className="overlay"></div>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
