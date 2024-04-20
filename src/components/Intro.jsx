import React from 'react';
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div style={styles.welcomeText}>WELCOME</div>
  )
}

const Intro = () => {
  return (
    <div style={styles.mainContainer}>
      <Welcome/>
      <motion.div
        style={styles.rectangle}
        initial={{ width: 0 }}
        animate={{ width: 800 }}
        // onAnimationStart={{ width: '10%' }}
        // onAnimationEnd={{ width: '100%' }}
        transition={{ duration: 2 }}
      />
      <div style={styles.nameText}>I'm Aditya</div>
      <div style={styles.loveText}>Currently in love with frontend design</div>
    </div>
  )
}

export default Intro;

const styles = {
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 150,
    letterSpacing: 14,
    transform: `scaleY(0.9)`,
  },
  rectangle: {
    display: 'inline-block',
    width: 800,
    height: '5px',
    backgroundColor: 'white',
  },
  nameText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 24,
  },
  loveText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 40,
  },
};