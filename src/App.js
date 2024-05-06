import React, { StyleSheet } from "react";
import "./App.css";
import { motion } from "framer-motion";
import backgroundImage from "./assets/swiss-alps-wallpaper.jpg";

import Landing from "./components/Landing";
import Header from "./components/Header";
import Name from "./components/Name";

function App() {
  return (
    <div className="App">
      <div style={styles.mainContainer}>
        {/* <Header /> */}
        <Landing />
        <Name />
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
