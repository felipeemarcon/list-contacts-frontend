import React from "react";

// Styles
import "./Content.scss";

export default function Content(props) {
  const { children, margin } = props;

  const STYLE = {
    margin
  };

  return (
    <div className="App-Content" style={STYLE}>
      {children}
    </div>
  );
}
