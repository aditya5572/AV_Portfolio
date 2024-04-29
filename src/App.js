import React, { StyleSheet } from "react";
import "./App.css";
import backgroundImage from "./assets/swiss-alps-wallpaper.jpg";

import Intro from "./components/Intro";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div style={styles.mainContainer}>
        <Header />
        <Intro />
      </div>
    </div>
  );
}

export default App;

const styles = {
  mainContainer: {
    backgroundColor: "#242943",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
};
