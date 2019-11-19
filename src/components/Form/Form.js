import React from "react";
import PropTypes from "prop-types";

// Styles
import "./Form.scss";

export default function Form(props) {
  return (
    <form onSubmit={props.action} className="App-Form" autoComplete="off">
      {props.children}
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.func
};
