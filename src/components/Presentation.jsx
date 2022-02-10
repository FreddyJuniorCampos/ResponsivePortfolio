import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import Avatar from "../assets/static/avatar1.png";
import useQuery from "../hooks/useQuery";

const Presentation = () => {
  const size = useQuery();

  return (
    <>
      <div
        className="flex flex-col h-screen"
        style={{ background: "linear-gradient(#3F3F3F, #D8D8D8)" }}
      >
        <div className={responsiveContainer(size)}>
          <img
            className={size === "sm" ? "mt-8" : ""}
            src={Avatar}
            alt="Avatar"
            width={size === "sm" ? "250px" : "350px"}
          />
          <div className="my-4 mx-5 text-white">
            <div className="my-4">
              <p>Hola, Mi nombre es</p>
              <h1 className="text-3xl text-white">Freddy Junior Campos</h1>
            </div>
            <div
              className="mb-4"
              style={
                size === "sm"
                  ? { maxWidth: "300px", textAlign: "justify" }
                  : { maxWidth: "550px" }
              }
            >
              <p className="text-white">
                Soy desarrollador web e ingeniero electrónico, siempre motivado
                para aprender nuevas tecnologías. Soy un apasionado por la
                programación y me encanta la libreria React.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4 mb-8">
          <motion.div
            animate={{ y: 10 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <a href="#about-me">
              <FontAwesomeIcon icon={faAngleDown} size="3x" color="#FFCC57" />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Presentation;

const responsiveContainer = (size) => {
  if (size === "sm") return "flex flex-col justify-center items-center";
  if (size === "md")
    return "flex flex-col justify-center items-center h-screen";
  else return "flex items-center justify-center h-screen";
};


