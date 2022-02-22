import React from "react";

import "./styles.css";

function MenuItem(props) {
  return (
    <ul>
      <a className={props.active ? "active" : ""}>
        {props.icon}
        <span class="menu-title">{props.title}</span>
      </a>
    </ul>
  );
}

export default MenuItem;
