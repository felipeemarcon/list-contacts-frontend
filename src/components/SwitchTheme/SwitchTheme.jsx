import React from "react";

// Components
import Switch from "../Switch/Switch";

import "./SwitchTheme.scss";

export default function SwitchTheme(props) {
  return (
    <div className="App-SwitchTheme">
      <span>Switch App Theme</span>
      <Switch theme={props.theme} />
    </div>
  );
}
