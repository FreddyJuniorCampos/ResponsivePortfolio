import React from "react";

import Avatar from "../assets/static/avatar1.png";
import useQuery from "../hooks/useQuery";

const About = () => {
  const size = useQuery();

  return (
    <>
      <div
        className="flex justify-center"
        style={{ background: "linear-gradient( #D8D8D8, #3F3F3F)" }}
      >
        <div
          className="flex flex-col"
          style={size === "sm" || size === "md" ? {} : { width: "80%" }}
        >
          <h1 id="about-me" className="text-3xl text-white mx-4 mb-8">
            About Me
          </h1>
          <div className={aboutMeContainer(size)}>
            <div
              className="mx-4 text-justify"
              style={{ width: "-webkit-fill-available" }}
            >
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, voluptas in pariatur, eligendi voluptates distinctio
                est a corrupti dolorum neque temporibus nihil libero tenetur
                rerum quisquam commodi nobis deserunt sapiente!.
              </p>{" "}
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, voluptas in pariatur, eligendi voluptates distinctio
                est a corrupti dolorum neque temporibus nihil libero tenetur
                rerum quisquam commodi nobis deserunt sapiente!.
              </p>
            </div>
            <div
              className="flex justify-center"
              style={{ width: "-webkit-fill-available" }}
            >
              <img
                src={Avatar}
                alt="Avatar"
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
