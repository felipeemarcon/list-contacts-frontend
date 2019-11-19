import React from "react";
import PropTypes from "prop-types";

// Styles
import "./Button.scss";

export default function Button(props) {
  const { action, type, label } = props;

  return (
    <button type={type} onClick={action} className="App-Button">
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func
};
