import React from "react";

const AboutMe = () => {
  return (
    <div style={styles.aboutMeContainer}>
      <div style={styles.heyThere}>Hey There!</div>
      <div style={styles.aboutMe}>
        I'm a passionate Web Developer with a flair for front-end design and a
        love for all things cyber security. By day, I'm a software engineer
        crafting sleek, efficient solutions at lightning speed. By night, I'm a
        tech enthusiast exploring the latest innovations in the digital realm.
      </div>
    </div>
  );
};

export default AboutMe;

const styles = {
  aboutMeContainer: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heyThere: {
    fontSize: 28,
    marginBottom: "2%",
  },
  aboutMe: {
    fontSize: 18,
    padding: "0rem 12rem",
    textAlign: "justify",
  },
};
