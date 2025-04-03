import React, { useState } from "react";
import CheckboxList from "./CheckboxList";
import DoneButton from "./DoneButton";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
        Select Pages ▼
      </button>
      {isOpen && (
        <div style={styles.dropdown}>
          <CheckboxList />
          <div style={styles.buttonContainer}>
            <DoneButton />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "inline-block",
    width: "370px",
    height: "326px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    border: "1px solid #EEEEEE",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  toggleButton: {
    padding: "12px 15px",
    backgroundColor: "#fff",
    border: "1px solid #EEEEEE",
    cursor: "pointer",
    fontSize: "14px",
    width: "100%",
    borderRadius: "8px",
    textAlign: "left",
    fontWeight: "bold",
  },
  dropdown: {
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "0px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0", 
  },
};

export default DropdownMenu;
