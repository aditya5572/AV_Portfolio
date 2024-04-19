import './App.css';
import React, { StyleSheet } from 'react'
import Intro from './components/Intro';
import backgroundImage from './assets/swiss-alps-wallpaper.jpg';

function App() {
  return (
    <div className="App">
      <div style={styles.mainContainer}>
        <Intro/>
      </div>
    </div>
  );
}

export default App;

const styles = {
  mainContainer: {
    backgroundColor: "#242943",
    width: '100vw',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};