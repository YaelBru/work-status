import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputField}>
      <label>{props.label}</label>
      <input
        type={props.inputType}
        className={styles.inputElement}
        name={props.name}
        onChange={(e) => props.changed(e)}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
