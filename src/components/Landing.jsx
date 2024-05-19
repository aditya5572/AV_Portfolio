import React, { useState, useEffect } from "react";
import Font from "react-font";
import { motion } from "framer-motion";

const Welcome = () => {
  const letters = ["W", "E", "L", "C", "O", "M", "E"];

  return (
    <div style={{ zIndex: 3 }}>
      <Font family="Paytone One">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1.2,
          }}
          transition={{ duration: 3, type: "spring" }}
          style={styles.welcomeContainer}
        >
          {letters.map((letter) => {
            return (
              <motion.span
                whileHover={{
                  color: "#3ed6ff",
                  scaleY: 1.15,
                  y: -14,
                }}
                style={styles.welcomeText}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.div>
      </Font>
      <div style={styles.welcomeBottomContainer}>
        <div style={styles.welcomeBottomText}>
          <Font family="Play">A Portfolio Megaverse</Font>
        </div>
      </div>
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

const AnimatingArrows = () => {
  const arrowContainerVariants = {
    hidden: {
      opacity: 0,
    },
    appear: {
      opacity: 1,
      transition: {
        // delay: 2,
        staggerChildren: 0.2,
        // repeat: Infinity,
        // repeatDelay: 1,
      },
    },
    disappear: {
      opacity: 0,
      transition: {
        delay: 1.4,
        when: "afterChildren",
      },
    },
  };
  const arrowVariants = {
    hidden: {
      opacity: 0,
    },
    appear: {
      opacity: 1,
    },
  };

  const [reset, setReset] = useState(false);

  return (
    <motion.div
      key="arrows"
      variants={arrowContainerVariants}
      initial="hidden"
      animate={reset ? "disappear" : "appear"}
      style={styles.arrowsContainer}
      onAnimationComplete={() => {
        setReset(!reset)
      }}
    >
      <motion.div variants={arrowVariants} style={styles.arrow} />
      <motion.div variants={arrowVariants} style={styles.arrow} />
      <motion.div variants={arrowVariants} style={styles.arrow} />
      <motion.div variants={arrowVariants} style={styles.arrow} />
    </motion.div>
  );
};

const Landing = () => {
  // const [showName, setShowName] = useState(false);
  // const [showClickMeButton, setshowClickMeButton] = useState(false);

  return (
    <div className="mainContainerLanding" style={styles.mainContainer}>
      <div style={styles.transparencyLayer}></div>

      <Welcome />

      <AnimatingArrows />

      {/* <motion.div
        style={styles.rectangle}
        initial={{ width: 0 }}
        animate={{ width: 820 }}
        transition={{ duration: 2, delay: 1 }}
        // onAnimationComplete={() => setshowClickMeButton(true)}
      /> */}

      {/* {showName ? (
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
      )} */}
    </div>
  );
};

export default Landing;

const styles = {
  mainContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  transparencyLayer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.8,
    zIndex: 2,
    top: 0,
    left: 0,
  },
  welcomeContainer: {
    display: "flex",
    position: "relative",
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: "6.6vw",
    color: "#ffffff",
    letterSpacing: 9,
    transform: `scaleY(0.9)`,
  },
  welcomeBottomContainer: {},
  welcomeBottomText: {
    fontWeight: "bold",
    fontSize: "2vw",
    color: "#25b448",
    letterSpacing: 5,
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
  arrowsContainer: {
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
    position: "relative",
    top: "22vh",
  },
  arrow: {
    border: "solid white",
    borderWidth: "0 15px 15px 0px",
    display: "inline-block",
    padding: 3,
    width: 17,
    height: 17,
    webkitTransform: "rotate(45deg)",
    marginTop: -6,
  },
};
