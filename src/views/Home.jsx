import React from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import Banner from "../components/Banner";

import useQuery from "../hooks/useQuery";

const Home = () => {
  const size = useQuery();

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
        <Header />
      </div>

      <div
        style={{
          background: "rgba(0,0,0,0.95)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Presentation />
        <About />
        <Banner />
        <Credentials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
