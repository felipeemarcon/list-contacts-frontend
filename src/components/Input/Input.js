import React from "react";
import PropTypes from "prop-types";

// Styles
import "./Input.scss";

export default function FormInput(props) {
  const handleActiveInput = event => {
    const target = event.target;

    target.parentNode.classList.add("App-Form__inputGroup--active");
  };

  const handleDeactivateInput = event => {
    const target = event.target;

    target.parentNode.classList.remove("App-Form__inputGroup--active");
  };

  return (
    <div className="App-Form__inputGroup">
      <input
        onClick={handleActiveInput}
        onBlur={handleDeactivateInput}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
};
