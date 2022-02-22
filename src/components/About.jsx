import React from "react";
import H3 from "@material-tailwind/react/Heading3";
import P from "@material-tailwind/react/Paragraph";

import Me from "../assets/static/Me.png";
import useQuery from "../hooks/useQuery";

const About = () => {
  const size = useQuery();

  return (
    <>
      <div className="flex justify-center py-16" id="about-me">

        <div
          className="flex flex-col justify-center"
          style={size === "sm" || size === "md" ? { padding: "20px" } : { width: "80%" }}
        >
          <H3 color="white" className="mx-4 mb-8">
            About Me
          </H3>
          <div className={aboutMeContainer(size)}>
            <div
              style={{
                width: "-webkit-fill-available",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <P
                color="white"
                style={{ fontWeight: "500", textAlign: "justify" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, voluptas in pariatur, eligendi voluptates distinctio
                est a corrupti dolorum neque temporibus nihil libero tenetur
                rerum quisquam commodi nobis deserunt sapiente!.
              </P>
              <P
                color="white"
                style={{ fontWeight: "500", textAlign: "justify" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, voluptas in pariatur, eligendi voluptates distinctio
                est a corrupti dolorum neque temporibus nihil libero tenetur
                rerum quisquam commodi nobis deserunt sapiente!.
              </P>
            </div>
            <div
              className="flex justify-center"
              style={{ width: "-webkit-fill-available" }}
            >
              <img
                src={Me}
                alt="Me"
                width={size === "sm" ? "250px" : "350px"}
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
