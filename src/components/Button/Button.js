import React from "react";
import PropTypes from "prop-types";

// Styles
import "./Button.scss";

export default function Button(props) {
  return (
    <button onClick={props.action} className="App-Button">
      {props.label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func
};
