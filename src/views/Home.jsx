import React, { useState } from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import Banner from "../components/Banner";

const Home = () => {
  const [language, setLanguage] = useState("ES");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navPrincipal").style.top = "0";
    } else {
      document.getElementById("navPrincipal").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const handleLanguage = (lang) => {
    lang ? setLanguage("EN") : setLanguage("ES");
  };

  return (
    <>
      <div
        id="navPrincipal"
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "999",
          transition: "all 0.5s ease-out",
        }}
      >
        <Header handleLanguage={handleLanguage} language={language} />
      </div>

      <div
        style={{
          background: "rgba(0,0,0,0.95)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Presentation language={language} />
        <About language={language} />
        <Banner language={language} />
        <Credentials language={language} />
        <Contact language={language} />
      </div>
    </>
  );
};

export default Home;
