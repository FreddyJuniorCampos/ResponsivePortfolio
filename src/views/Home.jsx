import React from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Credentials from "../components/Credentials";

const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Credentials />
    </>
  );
};

export default Home;
