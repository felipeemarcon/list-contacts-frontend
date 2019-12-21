import React from "react";

import "./Switch.scss";

export default function Switch(props) {
  return (
    <label htmlFor="switchInput" className="App-Switch">
      <input
        type="checkbox"
        id="switchInput"
        defaultChecked={props.isChecked === "dark"}
        onChange={props.theme}
      />
      <span className="App-Switch__slider"></span>
    </label>
  );
}
