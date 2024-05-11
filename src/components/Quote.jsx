import React from 'react';

const Quote = () => {
  return (
    <div style={styles.mainContainer}>Quote</div>
  )
}

export default Quote;

const styles = {
    mainContainer: {
        backgroundColor: "black",
        width: "100vw",
        height: "50vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      },
};