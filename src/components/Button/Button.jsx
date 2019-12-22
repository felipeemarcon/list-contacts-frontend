import React from "react";
import PropTypes from "prop-types";

// Styles
import "./Button.scss";

export default function Button(props) {
  const { action, type, label, buttonStyle, size } = props;

  const buttonStyleClass = () => {
    return buttonStyle ? `App-Button--${buttonStyle}` : "";
  };

  const buttonSizeClass = () => {
    return size ? `App-Button--${size}` : "";
  };

  return (
    <button
      type={type}
      onClick={action}
      className={`App-Button ${buttonStyleClass()} ${buttonSizeClass()}`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.string,
  action: PropTypes.func
};
