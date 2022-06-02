import React, { useState } from "react";
import H3 from "@material-tailwind/react/Heading3";
import P from "@material-tailwind/react/Paragraph";

import Me from "../assets/static/Me.jpg";
import useQuery from "../hooks/useQuery";

const About = ({ language }) => {
  const size = useQuery();
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="flex justify-center py-16" id="about-me">
        <div
          className="flex flex-col justify-center"
          style={
            size === "sm" || size === "md"
              ? { padding: "20px" }
              : { width: "80%" }
          }
        >
          <H3 color="white" className="mx-4 mb-8">
            About Me
          </H3>
          <div className={aboutMeContainer(size)}>
            {language === "EN" ? (
              <div
                style={{
                  width: "-webkit-fill-available",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <P
                  color="white"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  Hello! my name is Freddy, since my beginnings in college I
                  felt a great attraction for programming working with C++,
                  however, it was not until 2020 that I started studying Python
                  and started doing small projects that led me to take this
                  profession more deeply.
                </P>
                <P
                  color="white"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  Then I started studying JavaScript (ES6+) and Frameworks like
                  React and NodeJS, being these my favorites and the ones I
                  currently work with. Besides this I continue studying
                  Frameworks like NextJS nowadays, as I like to improve my
                  skills daily and be updated on new work methodologies that
                  arise daily to bring the best of me in an innovative team.
                </P>
                <P
                  color="white"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  In the not too distant future, I would like to study and work
                  with Blockchain development, with languages like solidity and
                  Web3.
                </P>
              </div>
            ) : (
              <div
                style={{
                  width: "-webkit-fill-available",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <P
                  color="white"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  Hola! Mi nombre es Freddy, desde mis principios en la
                  universidad sentí una gran atracción por la programación al
                  trabajar con C++, sin embargo, no fue hasta 2020 que comencé a
                  estudiar Python y a realizar proyectos pequeños que me
                  llevaron a tomar esta profesión mas a fondo.
                </P>
                <P
                  color="white"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  Luego, comencé a estudiar JavaScript (ES6+) y Frameworks como
                  React y NodeJS, siendo estos mis favoritos y con los cuales
                  trabajo actualmente. Además de esto sigo estudiando hoy en día
                  Frameworks como NextJS, dado que me gusta mejorar mis
                  habilidades diariamente y estar actualizado en las nuevas
                  metodologías de trabajo que surgen a diario para aportar lo
                  mejor de mí en un equipo innovador.
                </P>
                <P
                  color="white"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  En un futuro no muy lejano me gustaría estudiar y trabajar con
                  desarrollo de Blockchain con lenguajes como solidity y la
                  Web3.
                </P>
              </div>
            )}
            <div
              className="flex justify-center items-center"
              style={{ width: "-webkit-fill-available" }}
            >
              <img
                src={Me}
                alt="Me"
                style={{
                  borderRadius: "20px",
                  filter: hover && "sepia(50%)",
                  height: size !== "sm" && "500px",
                }}
                width={size === "sm" ? "250px" : "350px"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

const aboutMeContainer = (size) => {
  if (size === "sm") return "flex flex-col";
  else return "flex justify-around";
};
