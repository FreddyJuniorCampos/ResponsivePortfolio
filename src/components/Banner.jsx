import React from "react";
import backImage from "../assets/static/backImage.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${backImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100px"
      }}
    ></div>
  );
};

export default Banner;
