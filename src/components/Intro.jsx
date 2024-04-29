import React, { useState } from "react";
import Font from "react-font";
import { motion } from "framer-motion";

const Welcome = () => {
  const letters = ["W", "E", "L", "C", "O", "M", "E"];

  return (
    <div>
      <Font family="Paytone One">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1.2,
          }}
          transition={{ duration: 1.5, type: "spring" }}
          style={styles.welcomeContainer}
        >
          {letters.map((letter) => {
            return (
              <motion.span
                whileHover={{
                  color: "#3ed6ff",
                  scaleY: 1.1,
                  y: -5,
                }}
                style={styles.welcomeText}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.div>
      </Font>
    </div>
  );
};

const NAME = () => {
  const letters = ["I", "'", "M", " ", "A", "D", "I", "T", "Y", "A"];
  const xs = ["-80vw", 0, "100vw", 0, 100, 300, -200, "90vw", 200, 50];
  const ys = [
    "-100vh",
    "100vh",
    "-100vh",
    0,
    "-100vh",
    "100vh",
    "-100vh",
    "-100vh",
    "100vh",
    "-100vh",
  ];
  const rotates = [-90, 30, 80, 0, 100, -120, -60, 180, 90, -180];
  const staggerDelay = 0.25;

  return (
    <motion.div style={styles.introContainer}>
      {letters.map((letter, index) => {
        let divStyle = styles.nameText;
        if (letter === " ") {
          divStyle = {
            ...divStyle,
            marginRight: 15,
          };
        }
        return (
          <motion.div
            initial={{
              x: xs[index],
              y: ys[index],
              rotateZ: rotates[index],
            }}
            animate={{
              x: 0,
              y: 0,
              rotateZ: 0,
            }}
            transition={{
              duration: 3,
              type: "tween",
              delay: index * staggerDelay,
            }}
            style={divStyle}
          >
            {letter}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const Intro = () => {
  const [showName, setShowName] = useState(false);
  const [showClickMeButton, setshowClickMeButton] = useState(false);

  return (
    <div style={styles.mainContainer}>
      <Welcome />

      <motion.div
        style={styles.rectangle}
        initial={{ width: 0 }}
        animate={{ width: 820 }}
        transition={{ duration: 2, delay: 1 }}
        onAnimationComplete={() => setshowClickMeButton(true)}
      />

      {showName ? (
        <NAME />
      ) : (
        <motion.div style={styles.introContainer}>
          {showClickMeButton && (
            <motion.div
              className="click-me-button"
              style={styles.clickMeButton}
              onClick={() => {
                setShowName(true);
                setshowClickMeButton(false);
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1.5 }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Font family="Changa">CLICK ME</Font>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Intro;

const styles = {
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    display: "flex",
    position: "relative",
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 120,
    color: "#ffffff",
    letterSpacing: 18,
    transform: `scaleY(0.9)`,
  },
  rectangle: {
    display: "inline-block",
    width: 820,
    height: "5px",
    backgroundColor: "white",
    boxShadow: "0px 0px 4px 0px white",
    margin: "10px 0 34px 0",
  },
  introContainer: {
    display: "flex",
    minHeight: 72,
  },
  nameText: {
    fontFamily: "Book Antiqua",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 60,
    letterSpacing: 2,
  },
  clickMeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
