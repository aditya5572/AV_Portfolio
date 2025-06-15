import React, { useState } from "react";
import Font from "react-font";
import { motion } from "framer-motion";

const Name = () => {
  const variants = {
    slide: {
      x: ["-10vw", 0, 0],
      y: ["10vh", "10vh", 0],
      transition: {
        duration: 3,
        times: [0, 0.3, 1],
        ease: ["easeIn", "easeOut"],
      },
    },
  };

  return (
    <React.Fragment
    // initial={{ scale: 0 }}
    // animate={{ scale: 1 }}
    // transition={{ duration: 1, ease: "backOut" }}
    >
      <motion.span
        // variants={variants}
        // animate="slide"
        style={styles.frameTopHorz}
      ></motion.span>
      <motion.span
        // variants={variants}
        // animate="slide"
        style={styles.frameTopVert}
      ></motion.span>

      <div style={styles.nameContainer}>
        <motion.div style={styles.name}>
          <Font family="Ubuntu">ADITYA VADGAMA</Font>
        </motion.div>
        <motion.div style={styles.profession}>
          <Font family="Space Grotesk">SOFTWARE DEVELOPER</Font>
        </motion.div>
        <motion.div style={styles.creativeProfession}>
          Creative Frontend Designer
        </motion.div>
      </div>

      <motion.span style={styles.frameBottomVert}></motion.span>
      <motion.span style={styles.frameBottomHorz}></motion.span>
    </React.Fragment>
  );
};

export default Name;

const styles = {
  nameContainer: {
    margin: "7% 0%",
    padding: "0% 2%",
  },
  name: {
    color: "#25b448",
    fontSize: "2.2vw",
    letterSpacing: 3,
  },
  profession: {
    color: "white",
    fontSize: "3vw",
    letterSpacing: 3,
    marginTop: "0.6rem",
  },
  creativeProfession: {
    color: "darkgrey",
    fontSize: "1.6vw",
    letterSpacing: 2,
    marginTop: "0.4rem",
  },
  frameTopHorz: {
    backgroundColor: "orange",
    width: "16%",
    height: 7,
    alignSelf: "flex-end",
    margin: "0vw 3vw 0vw 0vw",
    borderRadius: "4px 4px 0 4px",
    backgroundImage: "linear-gradient(to right, #ff7300, #ffc864)",
  },
  frameTopVert: {
    backgroundColor: "orange",
    width: 7,
    height: "8%",
    alignSelf: "flex-end",
    top: -6,
    position: "relative",
    margin: "0vw 3vw 0vw 0vw",
    borderRadius: "0 4px 4px 4px",
    backgroundImage: "linear-gradient(to bottom, #ffc864, #ff7300)",
  },
  frameBottomVert: {
    backgroundColor: "orange",
    width: 7,
    height: "8%",
    alignSelf: "flex-start",
    top: 6,
    position: "relative",
    margin: "0vw 0vw 0vw 3vw",
    borderRadius: "4px 4px 0 4px",
    backgroundImage: "linear-gradient(to bottom, #ff7300, #ffc864)",
  },
  frameBottomHorz: {
    width: "16%",
    height: 7,
    alignSelf: "flex-start",
    margin: "0vw 0vw 0vw 3vw",
    borderRadius: "0 4px 4px 4px",
    backgroundImage: "linear-gradient(to right, #ffc864, #ff7300)",
  },
};
