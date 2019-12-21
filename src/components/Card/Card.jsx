import React from "react";

import "./Card.scss";

export default function Card(props) {
  const STYLES = {
    padding: props.padding
  };

  return (
    <div className="App-Card" style={STYLES}>
      {props.children}
    </div>
  );
}
