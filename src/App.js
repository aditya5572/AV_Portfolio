import React, { StyleSheet } from "react";
import "./App.css";
import { motion } from "framer-motion";
import backgroundImage from "./assets/swiss-alps-wallpaper.jpg";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Name from "./components/Name";
import Projects from "./components/Projects";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <div style={styles.mainContainer}>
        {/* <Header /> */}
        <Landing />
        <Name />
        <Projects />
        <Quote />
      </div>
    </div>
  );
}

export default App;

const styles = {
  mainContainer: {
    backgroundColor: "#242943",
    overflow: "hidden",
  },
};
