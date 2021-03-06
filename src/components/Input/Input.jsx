import React from "react";
import PropTypes from "prop-types";

import InputMask from "react-input-mask";

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
      {props.mask ? (
        <InputMask
          mask={props.mask}
          value={props.value}
          name={props.name}
          onFocus={handleActiveInput}
          onBlur={handleDeactivateInput}
          onChange={props.actionChange}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          onFocus={handleActiveInput}
          onBlur={handleDeactivateInput}
          onChange={props.actionChange}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  actionChange: PropTypes.func
};
