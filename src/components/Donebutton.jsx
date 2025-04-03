import React from "react";

const DoneButton = () => {
  return <button style={styles.button}>Done</button>;
};

const styles = {
  button: {
    backgroundColor: "#FFC72C",
    color: "#000",
    paddingTop: "10px",
    paddingRight: "20px",
    paddingBottom: "10px",
    paddingLeft: "20px",
    width: "340px",
    height: "40px",
    border: "none",
    borderRadius: "4px", 
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    gap: "10px", 
  },
};

export default DoneButton;
