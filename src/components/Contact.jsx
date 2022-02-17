import React from "react";
import H3 from "@material-tailwind/react/Heading3";
import CardContact from "./CardContact";
import useQuery from "../hooks/useQuery";

const Contact = () => {
  const size = useQuery();

  return (
    <>
      <div
        className="flex justify-center py-16 m-0"
      >
        <div
          className="flex flex-col items-center"
          style={size === "sm" ? {} : { width: "80%" }}
        >
          <div style={{ width: "100%" }}>
            <H3 id="contact" color="white">
              Contáctame
            </H3>
          </div>
          <div className="flex justify-center" style={size === "sm" ? {} : { width: "650px" }}>
            <CardContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
