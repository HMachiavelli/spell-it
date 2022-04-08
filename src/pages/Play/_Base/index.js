import React from "react";

import usaFlag from "../../../assets/images/flags/usa.png";

import "./styles.css";

function PlayApp(props) {
  return (
    <div className="play">
      <div className="header">
        <h1>Spell It!</h1>
        <div className="language">
          <span>Idioma:</span>
          <img src={usaFlag} width="25" alt="USA Flag" />
        </div>
      </div>
      <div className="body">{props.children}</div>
    </div>
  );
}

export default PlayApp;
