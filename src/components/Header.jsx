import React, { useState } from 'react';
import logo from '../assets/logo_a_nobg.png';
import { motion } from "framer-motion";

const Header = () => {
  const [imgHover, setImgHover] = useState(false);
  // console.log(imgHover)

  return (
    <div style={styles.mainContainer}>
      <motion.img src={logo} style={styles.logo} 
        onMouseEnter={() => setImgHover(true)}
        animate={imgHover && {
          rotateY: 360,
        }}
        onAnimationComplete={() => setImgHover(false)}
        transition={{
          duration: 0.7,
        }}
      />
    </div>
  )
}

export default Header;

const styles = {
  mainContainer: {
    // backgroundColor: 'white',
    width: '100%',
    height: 180,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 50,
    width: 100,
    height: 100,
  },
};