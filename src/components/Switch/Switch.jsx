import React from "react";

import "./Switch.scss";

export default function Switch(props) {
  return (
    <label className="App-Switch">
      <input
        type="checkbox"
        defaultChecked={props.isChecked === "dark"}
        onChange={props.theme}
      />
      <span className="App-Switch__slider"></span>
    </label>
  );
}
