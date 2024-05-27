import React, { useState } from "react";
import Font from "react-font";
import { motion } from "framer-motion";
import interstellarImage from "../../assets/interstellar.jpg";
import Name from "./Name";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset";

const KEY_Y = "Y";
const KEY_X = "X";
const KEY_B = "B";
const KEY_A = "A";

const XBox = () => {
  const [component, setComponent] = useState(<Name />);

  const handleButtonPress = (buttonKey) => {
    if (buttonKey === KEY_Y) {
      setComponent(<Name />);
    }
    else if (buttonKey === KEY_X) {
      setComponent(<AboutMe />);
    }
    else if (buttonKey === KEY_B) {
      setComponent(<AboutMe />);
    }
    else if (buttonKey === KEY_A) {
      setComponent(<Skillset />);
    }
  };

  return (
    <div style={styles.mainContainer}>
      {/* <div style={styles.imageContainer}>
      <img src={interstellarImage} alt="" style={styles.interstellarImg}/>
      </div> */}
      <div style={styles.xboxControllerContainer}>
        <button onClick={() => handleButtonPress(KEY_Y)}>Y</button>
        <button onClick={() => handleButtonPress(KEY_X)}>X</button>
        <button onClick={() => handleButtonPress(KEY_B)}>B</button>
        <button onClick={() => handleButtonPress(KEY_A)}>A</button>
      </div>

      <div style={styles.personaContainer}>{component}</div>
    </div>
  );
};

export default XBox;

const styles = {
  mainContainer: {
    backgroundColor: "black",
    width: "100vw",
    height: "120vh",
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
};
