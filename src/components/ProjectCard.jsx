import React from "react";

const ProjectCard = () => {
  return (
    <div style={styles.mainContainer}>
      {/* <div style={styles.heading}>MY PROJECTS</div> */}

      <div style={styles.bigView}></div>
      <div style={styles.subView}></div>
      <div style={styles.miniView}></div>
    </div>
  );
};

export default ProjectCard;

const styles = {
  mainContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "black",
    fontSize: 28,
    letterSpacing: 4,
  },
  bigView: {
    zIndex: 1,
    backgroundColor: "skyblue",
    position: 'absolute',
    width: "32%",
    height: "60%",
    borderRadius: 17,
    margin: "-5% 35% 0% 0%",
  },
  subView: {
    zIndex: 2,
    backgroundColor: "pink",
    position: 'absolute',
    width: "28%",
    height: "24%",
    borderRadius: 17,
    margin: "33% 54% 0% 0%",
  },
  miniView: {
    zIndex: 3,
    backgroundColor: "purple",
    position: 'absolute',
    width: "11%",
    height: "16%",
    borderRadius: 17,
    margin: "34% 23% 0% 0%",
  },
};
