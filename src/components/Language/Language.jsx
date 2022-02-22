import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import H5 from "@material-tailwind/react/Heading5";

const Language = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex justify-between" style={{ width: "120px" }}>
      <div>
        {isOn ? <H5 color={"white"}>EN</H5> : <H5 color={"white"}>ES</H5>}
      </div>
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
};

export default Language;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
