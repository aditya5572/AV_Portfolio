import React from "react";
import Font from "react-font";

import { projects } from "./utils/getProjects";

const ProjectCard = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.leftBlock}>
        <div style={styles.bigView}></div>
        <div style={styles.subView}></div>
        <div style={styles.miniView}></div>
      </div>

      <div style={styles.rightBlock}>
        {projects.map((project) => {
          return (
            <>
              <div style={styles.projectName}>
                <Font family="Merriweather Sans">{project.name}</Font>
              </div>
              <div style={styles.projectSubHeading}>{project.subHeading}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;

const styles = {
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  leftBlock: {
    width: "50%",
    height: "100%",
  },
  rightBlock: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  bigView: {
    zIndex: 1,
    backgroundColor: "skyblue",
    position: "absolute",
    width: "32%",
    height: "60%",
    borderRadius: 17,
    margin: "4% 0% 0% 16%",
  },
  subView: {
    zIndex: 2,
    backgroundColor: "pink",
    position: "absolute",
    width: "28%",
    height: "24%",
    borderRadius: 17,
    margin: "35% 0% 0% 8%",
  },
  miniView: {
    zIndex: 3,
    backgroundColor: "purple",
    position: "absolute",
    width: "11%",
    height: "16%",
    borderRadius: 17,
    margin: "38% 0% 0% 32%",
  },
  projectName: {
    color: "#25b448",
    fontSize: 40,
    letterSpacing: 2,
    textAlign: "start",

    margin: "20% 0% 0% 6%",
  },
  projectSubHeading: {
    color: "#676767",
    fontSize: 22,
    letterSpacing: 2,
    textAlign: "start",

    margin: "3% 0% 0% 6%",
  },
};
