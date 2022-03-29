import React from "react";

import "./styles.css";

function PlayApp(props) {
  return (
    <div className="play">
      <div className="header">
        <h1>Spell It!</h1>
        <div className="language">
          <span>Idioma:</span>
        </div>
      </div>
      <div className="body">{props.children}</div>
    </div>
  );
}

export default PlayApp;
