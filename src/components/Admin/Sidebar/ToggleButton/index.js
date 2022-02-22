import React from "react";

import "./styles.css";

function ToggleButton(props) {
  return (
    <div className="menu-toggle">
      <a onClick={props.onToggleMenu}>|||</a>
    </div>
  );
}

export default ToggleButton;
