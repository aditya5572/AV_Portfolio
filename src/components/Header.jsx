import React from 'react';
import logo from '../assets/logo-A.png';

const Header = () => {
  return (
    <div style={styles.mainContainer}>
        <img src={logo} style={styles.logo} />
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
    width: 130,
    height: 130
  },
};