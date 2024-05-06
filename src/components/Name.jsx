import React from "react";
import Font from "react-font";
import { motion } from "framer-motion";
import interstellarImage from "../assets/interstellar.jpg";

const Name = () => {
  // const variants = {
  //   slide: {
  //     x: ["-20vw", 0, 0],
  //     y: ["20vh", "20vh", 0],
  //   },
  // };

  return (
    <div style={styles.mainContainer}>
      {/* <div style={styles.imageContainer}>
      <img src={interstellarImage} alt="" style={styles.interstellarImg}/>
      </div> */}
      <div style={styles.personaContainer}>
        <motion.span
          // variants={variants}
          // animate="slide"
          // transition={{
          //   duration: 3,
          //   times: [0, 0.4, 1],
          //   ease: ["easeIn", "easeOut"],
          //   // type: 'spring',
          // }}
          style={styles.frameTopHorz}
        ></motion.span>
        <span style={styles.frameTopVert}></span>

        <motion.div style={styles.name}>ADITYA VADGAMA</motion.div>
        <motion.div style={styles.profession}>
          <Font family="Varela Round">SOFTWARE DEVELOPER</Font>
        </motion.div>
        <motion.div style={styles.professionBottom}>
          <motion.div style={styles.creativeProfession}>
            Creative Frontend Designer
          </motion.div>
          <motion.div style={styles.virtualProfession}>
            Virtual Assassin
          </motion.div>
        </motion.div>

        <motion.span style={styles.frameBottomVert}></motion.span>
        <motion.span style={styles.frameBottomHorz}></motion.span>
      </div>
    </div>
  );
};

export default Name;

const styles = {
  mainContainer: {
    backgroundColor: "black",
    width: "100vw",
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  personaContainer: {
    width: "42%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    margin: "0px 80px",
  },
  name: {
    color: "#25b448",
    fontSize: "2.4rem",
    letterSpacing: 4,
    marginTop: "6rem",
  },
  profession: {
    color: "white",
    fontSize: "3.1rem",
    letterSpacing: 2,
    marginTop: "0.6rem",
  },
  professionBottom: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: "6rem",
  },
  creativeProfession: {
    color: "darkgrey",
    fontSize: "1.4rem",
    letterSpacing: 2,
    marginTop: "0.4rem",
  },
  virtualProfession: {
    color: "darkgrey",
    fontSize: "1.4rem",
    letterSpacing: 2,
    marginTop: "0.4rem",
  },
  frameTopHorz: {
    backgroundColor: "orange",
    width: 186,
    height: 7,
    alignSelf: "flex-end",
    marginTop: 85,
    borderRadius: "4px 4px 0 4px",
    backgroundImage: "linear-gradient(to right, #ff7300, #ffc864)",
  },
  frameTopVert: {
    backgroundColor: "orange",
    width: 7,
    height: 110,
    alignSelf: "flex-end",
    top: -6,
    position: "relative",
    borderRadius: "0 4px 4px 4px",
    backgroundImage: "linear-gradient(to bottom, #ffc864, #ff7300)",
  },
  frameBottomVert: {
    backgroundColor: "orange",
    width: 7,
    height: 110,
    alignSelf: "flex-start",
    top: 6,
    position: "relative",
    borderRadius: "4px 4px 0 4px",
    backgroundImage: "linear-gradient(to bottom, #ff7300, #ffc864)",
  },
  frameBottomHorz: {
    // backgroundColor: 'orange',
    width: 186,
    height: 7,
    alignSelf: "flex-start",
    borderRadius: "0 4px 4px 4px",
    backgroundImage: "linear-gradient(to right, #ffc864, #ff7300)",
  },
};
