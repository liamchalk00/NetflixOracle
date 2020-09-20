import React from "react";
import "./styles.css";
import Checkbox from "./Checkbox.react";
import { useState } from "react";

function TodoItem({ title }) {
  const [isChecked, setIsChecked] = useState(false);

  let text;
  if (isChecked) {
    text = <div className="text crossed">{title}</div>;
  } else {
    text = <div className="text">{title}</div>;
  }

  return (
    <div className="todoItem">
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      {text}
    </div>
  );
}

export default TodoItem;
