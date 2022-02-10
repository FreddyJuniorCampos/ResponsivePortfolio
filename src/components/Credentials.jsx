import React from "react";

import useQuery from "../hooks/useQuery";
import CredentialCard from "./CredentialCard";
import Carousel from "./Carousel";
import Avatar from "../assets/static/avatar1.png";

const Credentials = () => {
  const size = useQuery();

  return (
    <>
      <div
        className="flex justify-center py-16 m-0"
        style={{ background: "linear-gradient(#3F3F3F, #D8D8D8)" }}
      >
        <div
          className="flex flex-col"
          style={size === "sm" || size === "md" ? {} : { width: "80%" }}
        >
          <h1 id="credentials" className="text-3xl text-white mx-4 mb-8">
            Credenciales
          </h1>
          <div className="">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Credentials;
