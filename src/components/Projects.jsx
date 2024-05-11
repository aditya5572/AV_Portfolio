import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./utils/getProjects";

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
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "black",
    fontSize: 28,
    letterSpacing: 4,

    alignSelf: "start",
    marginTop: "2%",
  },
};
