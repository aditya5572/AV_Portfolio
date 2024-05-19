import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.heading}>MY PROJECTS</div>

      <ProjectCard />
    </div>
  );
};

export default Projects;

const styles = {
  mainContainer: {
    backgroundColor: "white",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    color: "black",
    fontSize: 28,
    letterSpacing: 4,
    marginTop: "2%",
  },
};
