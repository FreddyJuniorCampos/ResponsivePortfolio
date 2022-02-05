import React from "react";

import { motion } from "framer-motion";

import Avatar from "../assets/static/avatar1.png";

import useQuery from "../hooks/useQuery";

const Presentation = () => {

  const size = useQuery();

  return (
    <>
      <div
        className="md:container md:mx-auto h-screen"
        style={{ background: "linear-gradient(#3F3F3F, #D8D8D8)" }}
      >
        <div className="flex flex-wrap justify-center items-center h-screen">
          <div>
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="md:container">
            <p style={styles.span} >Hola, gracias por visitar mi página. Mi nombre es,</p>
            <h1 className="text-3xl" >Freddy Junior Campos</h1>
            <div style={{ maxWidth: "500px" }}>
              <p>
                Soy desarrollador web e ingeniero electrónico, siempre motivado
                para aprender nuevas tecnologías. Soy un apasionado por la
                programación y me encanta la libreria React.
              </p>
            </div>
          </div>
        </div>

        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          transition={{ duration: 3 }}
        >
          <div style={styles.container}>
            <div style={styles.avatarContainer}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <img height={250} src={Avatar} alt="Avatar" />
              </motion.div>
            </div>
            <div style={styles.presentationContainer}>
              <p style={styles.span}>
                Hola, gracias por visitar mi página. Mi nombre es,
              </p>
              <h1 style={styles.title}>Freddy Junior Campos</h1>
              <div style={styles.spanDescription}>
                <p>
                  Soy desarrollador web e ingeniero electrónico, siempre
                  motivado para aprender nuevas tecnologías. Soy un apasionado
                  por la programación y me encanta la libreria React.
                </p>
              </div>
            </div>
          </div>
          <div style={styles.iconContainer}>
            <motion.div
              animate={{ y: 10 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <a href="#about-me">
                angle down
              </a>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </>
  );
};

export default Presentation;

const styles = {
  bodyContainer: {
    width: "80%",
  },
  container: {
    display: "flex",
    width: "100%",
    height: "70%",
    justifyContent: "space-evenly",
  },
  presentationContainer: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  span: {
    color: "#FFCC57",
    fontSize: "1rem",
  },
  title: {
    color: "#F7F7F7",
    fontSize: "3rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  spanDescription: {
    width: "70%",
    color: "#F7F7F7",
    fontFamily: "arial",
    textAlign: "justify",
    letterSpacing: "1px",
    lineHeight: "25px",
    fontSize: "1.1rem",
  },
  avatarContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
};
