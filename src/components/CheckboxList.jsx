import React, { useState } from "react";

const CheckboxList = () => {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "allPages") {
      // Check/uncheck all checkboxes
      setCheckedItems((prev) => {
        const updatedState = Object.keys(prev).reduce((acc, key) => {
          acc[key] = checked;
          return acc;
        }, {});
        return updatedState;
      });
    } else {
      setCheckedItems((prev) => {
        const updatedState = { ...prev, [name]: checked };
        if (!checked) {
          updatedState.allPages = false;
        } else {
          const allChecked = Object.keys(updatedState)
            .filter((key) => key !== "allPages")
            .every((key) => updatedState[key]);

          updatedState.allPages = allChecked;
        }

        return updatedState;
      });
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        <span>All pages</span>
        <input
          type="checkbox"
          name="allPages"
          checked={checkedItems.allPages}
          onChange={handleCheckboxChange}
          style={styles.checkbox}
        />
      </label>
      <hr style={styles.divider} />

      {["page1", "page2", "page3", "page4"].map((key) => (
        <label key={key} style={styles.label}>
          <span>{key.replace("page", "Page ")}</span>
          <input
            type="checkbox"
            name={key}
            checked={checkedItems[key]}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
      ))}
      <hr style={styles.divider} />
    </div>
  );
};

const styles = {
  container: {
    width: "370px",
    backgroundColor: "#fff",
    borderRadius: "8px 8px 0 0",
    padding: "10px 0",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  divider: {
    border: "0",
    height: "1px",
    backgroundColor: "#E0E0E0",
    margin: "0 20px",
  },
};

export default CheckboxList;
