import React, { useEffect, useState } from "react";
import { skills } from "../utils/getSkills";
import { motion } from "framer-motion";

const Skillset = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentSkillDescription, setCurrentSkillDescription] = useState("");

  // A 3D FLOATING GLASS
  // GAME FONT
  // HOVER TO MOVE UP AND LEFT - PERSPECTIVE FRAMER MOTION
  // BACKGROUND - SKYBLUE, BLUE, PURPLE GRADIENT MIX
  return (
    <React.Fragment>
      <div style={styles.screenContainer}>
        <div style={styles.screen}>
          <div style={styles.skillDescription}>{currentSkillDescription[0]}</div>
        </div>
      </div>

      <div style={styles.bottomRowsContainer}>
      {skills.map((skillArr) => {
        return (
          <div style={styles.row}>
            {skillArr.map((skill) => {
              const isHovered = hoveredSkill === skill.name;

              return (
                <div key={skill.name} style={styles.skillContainer}>
                  <motion.div
                    whileHover={{
                      opacity: 1,
                      borderBottom: "4px solid #1e9bff",
                    }}
                    transition={{ duration: 0 }}
                    onMouseEnter={() => {
                      setHoveredSkill(skill.name);
                      skill.points && setCurrentSkillDescription(skill.points);
                    }}
                    onMouseLeave={() => {
                      setHoveredSkill(null);
                      // setCurrentSkillDescription(null);
                    }}
                    style={styles.imageContainer}
                  >
                    <img
                      loading="lazy"
                      role="presentation"
                      src={skill.icon}
                      style={styles.icon}
                      alt={skill.name}
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      ...styles.lowerSelectionPill,
                      ...(isHovered && { opacity: 1 }),
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
      
      </div>
    </React.Fragment>
  );
};

export default Skillset;

const styles = {
  outer: {
    backgroundColor: "white",
    position: "relative",
    width: "35vw",
    height: "35vw",
    minWidth: 200,
    minHeight: 200,
    maxWidth: 500,
    maxHeight: 500,
    // borderRadius: "50%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "auto",
  },

  // Content Screen
  screenContainer: {
    width: "100%",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: "#1e9bff",
    width: "90%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  skillDescription: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },

  // Skills and Icons
  bottomRowsContainer: {
    width: "100%",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    width: "100%",
    // height: "calc(100% / 3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  skillContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0% 2%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "4px solid black",
    opacity: 0.5,
  },
  icon: {
    width: "55%",
    height: "55%",
    minWidth: 90,
    minHeight: 90,
  },

  lowerSelectionPill: {
    backgroundColor: "#1e9bff",
    width: "40%",
    height: "0.4rem",
    margin: "3% 0% 0% 0%",
    borderRadius: "0px 0px 10px 10px",
    opacity: 0,
  },
};
