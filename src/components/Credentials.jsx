import React from "react";
import H3 from "@material-tailwind/react/Heading3";

import useQuery from "../hooks/useQuery";
import Carousel from "./Carousel";

const Credentials = () => {
  const size = useQuery();

  return (
    <>
      <div className="flex justify-center py-16 m-0"  id="credentials">
        <div
          className="flex flex-col"
          style={size === "sm" || size === "md" ? {} : { width: "80%" }}
        >
          <H3 color="white" className="mx-4 mb-8">
            Credenciales
          </H3>
          <div className="">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Credentials;
