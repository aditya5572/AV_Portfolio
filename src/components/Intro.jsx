import React from 'react';
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div>
      <div style={styles.welcomeText}>Welcome</div>
      <div style={styles.rectangle}/>
      <div style={styles.welcomeText}>I'm Aditya</div>
      <div style={styles.loveText}>Currently in love with frontend design</div>
    </div>
  )
}

export default Intro;

const styles = {
    welcomeText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 60,
    },
    rectangle: {
      display: 'inline-block',
      width: '500px',
      height: '5px',
      backgroundColor: 'white',
    },
    loveText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 40,
    },
  };