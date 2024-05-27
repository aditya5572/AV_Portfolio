import React, { useEffect } from "react";
import { skills } from "../utils/getSkills";

const Skillset = () => {
  return (
    <React.Fragment>
      {skills.map((skillArr) => {
        return (
          <div style={styles.row}>
            {skillArr.map((skill) => {
              return (
                <div key={skill.name} style={styles.skillContainer}>
                  {skill.name}
                </div>
              );
            })}
          </div>
        );
      })}
      {/* <div style={styles.inner}></div> */}
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
    maxWidth: 500,
    maxHeight: 500,
    minWidth: 200,
    minHeight: 200,
    // borderRadius: "50%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "auto",
  },
  row: {
    width: "80%",
    // height: "calc(100% / 3)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "3%",
  },
  skillContainer: {
    backgroundColor: "coral",
    position: "relative",
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inner: {
    width: 400,
    height: 400,
    borderRadius: "50%",
    border: "2px solid white",
  },
};
