import React from "react";
import H3 from "@material-tailwind/react/Heading3";

import useQuery from "../hooks/useQuery";
import Carousel from "./Carousel";

const Credentials = ({ language }) => {
  const size = useQuery();

  return (
    <>
      <div className="flex justify-center py-16 m-0" id="credentials">
        <div
          className="flex flex-col"
          style={size === "sm" || size === "md" ? {} : { width: "80%" }}
        >
          {language === "EN" ? (
            <H3 color="white" className="mx-4 mb-8">
              Credentials
            </H3>
          ) : (
            <H3 color="white" className="mx-4 mb-8">
              Credenciales
            </H3>
          )}

          <div>
            <Carousel language={language} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Credentials;
