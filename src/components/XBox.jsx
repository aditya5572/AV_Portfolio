import React, { useState } from "react";
import Font from "react-font";
import { motion } from "framer-motion";
import interstellarImage from "../assets/interstellar.jpg";

const KEY_Y = "Y";

const XBox = () => {
  const [showName, setShowName] = useState(true);

  const handleButtonPress = (buttonKey) => {
    if (buttonKey === KEY_Y) {
      setShowName(!showName);
    }
  }

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
      <div style={styles.xboxControllerContainer}>
        <button
          onClick={() => handleButtonPress(KEY_Y)}
        >
          Y
        </button>
      </div>
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

        {showName && (<div style={styles.nameContainer}>
          <motion.div style={styles.name}>
            <Font family="Ubuntu">ADITYA VADGAMA</Font>
          </motion.div>
          <motion.div style={styles.profession}>
            <Font family="Space Grotesk">SOFTWARE DEVELOPER</Font>
          </motion.div>
          <motion.div style={styles.creativeProfession}>
            Creative Frontend Designer
          </motion.div>
        </div>)}

        <motion.span style={styles.frameBottomVert}></motion.span>
        <motion.span style={styles.frameBottomHorz}></motion.span>
      </div>
    </div>
  );
};

export default XBox;

const styles = {
  mainContainer: {
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  xboxControllerContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  personaContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2vw 3vw",
  },
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
    width: "15%",
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
    // backgroundColor: 'orange',
    width: "15%",
    height: 7,
    alignSelf: "flex-start",
    margin: "0vw 0vw 0vw 3vw",
    borderRadius: "0 4px 4px 4px",
    backgroundImage: "linear-gradient(to right, #ffc864, #ff7300)",
  },
};
