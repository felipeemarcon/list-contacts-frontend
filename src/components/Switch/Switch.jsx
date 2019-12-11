import React from "react";

import "./Switch.scss";

export default function Switch(props) {
  return (
    <label className="App-Switch">
      <input type="checkbox" onChange={props.theme} />
      <span className="App-Switch__slider"></span>
    </label>
  );
}
