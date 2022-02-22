import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import H3 from "@material-tailwind/react/Heading3";
import P from "@material-tailwind/react/Paragraph";
import { Link } from "react-scroll";

import Avatar from "../assets/static/avatar1.png";
import backImage from "../assets/static/backImage.png";
import useQuery from "../hooks/useQuery";

const Presentation = () => {
  const size = useQuery();

  return (
    <>
      <div
        id="presentation"
        className={
          size === "sm" || size === "md"
            ? "flex flex-col pt-10"
            : "flex flex-col h-screen"
        }
        style={{
          background: `url(${backImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className={responsiveContainer(size)}>
          <img
            className={size === "sm" ? "mt-8" : ""}
            src={Avatar}
            alt="Avatar"
            width={size === "sm" || size === "md" ? "250px" : "350px"}
          />
          <div className="my-4 mx-5">
            <div className="my-4">
              <P color="white" style={{ fontWeight: "500" }}>
                Hola, Mi nombre es
              </P>
              <H3 color="white">Freddy Junior Campos</H3>
            </div>
            <div
              className="mb-4"
              style={
                size === "sm"
                  ? { maxWidth: "300px", textAlign: "justify" }
                  : { maxWidth: "550px" }
              }
            >
              <P color="white" style={{ fontWeight: "500" }}>
                Soy desarrollador web e ingeniero electrónico, siempre motivado
                para aprender nuevas tecnologías. Soy un apasionado por la
                programación y me encanta la libreria React.
              </P>
              <div className="flex justify-between" style={{ width: "300px"}}>
        <div>
          <a
            href="https://www.linkedin.com/in/freddy-campos-778142143/"
            target={"_blank"}
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/FreddyJuniorCampos/" target={"_blank"}>
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="github"
            />
          </a>
        </div>

        <div>
          <a href="https://t.me/freddyjunior1" target={"_blank"}>
            <img
              src="https://img.icons8.com/fluency/48/000000/telegram-app.png"
              alt="telegram"
            />
          </a>
        </div>
        <div>
          <a href="mailto:freddycampos1994@gmail.com" target={"_blank"}>
            <img
              src="https://img.icons8.com/color/48/000000/gmail.png"
              alt="email"
            />
          </a>
        </div>
      </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4 mb-8">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: "easeIn",
              repeatType: "reverse",
            }}
          >
            <Link to="about-me" smooth={true} duration={700} isDynamic={true}>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faAngleDown}
                size="3x"
                color="#D8FF91"
              />
            </Link>
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
