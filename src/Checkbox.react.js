import React from "react";
import "./styles.css";

function Checkbox({ isChecked, setIsChecked }) {
  return (
    <div
      className="checkbox"
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      {isChecked ? <div className="check">X</div> : null}
    </div>
  );
}

export default Checkbox;
