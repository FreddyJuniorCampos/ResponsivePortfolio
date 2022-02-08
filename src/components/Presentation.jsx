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
        className="md:container md:mx-auto h-screen"
        style={{ background: "linear-gradient(#3F3F3F, #D8D8D8)" }}
      >
        <div
          className={
            size === "sm" || size === "md"
              ? "flex flex-col items-center h-screen"
              : "flex flex-wrap justify-center items-center h-screen bg-blue-200"
          }
        >
          <img className="my-8" src={Avatar} alt="Avatar" width="200px" />
          <div className="sm:container sm:mx-auto my-4 mx-5 text-white">
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
          <div className="mt-4">
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
      </div>
    </>
  );
};

export default Presentation;
