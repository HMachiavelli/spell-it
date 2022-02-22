import React from "react";

import "./styles.css";

function Logo(props) {
  return (
    <div className={`logo ${props.display ? "" : "d-none"}`}>
      <h1>Spell It!</h1>
    </div>
  );
}

export default Logo;
