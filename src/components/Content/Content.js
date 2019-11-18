import React from "react";

// Styles
import "./Content.scss";

export default function Content(props) {
  return <div className="App-Content">{props.children}</div>;
}
