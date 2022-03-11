import React from "react";

import "./styles.css";

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`btn btn-${props.theme} ${
        props.width == "100" ? "width-100" : ""
      }`}
    >
      {props.text}
    </button>
  );
}

export default Button;
