import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function MenuItem(props) {
  return (
    <li key={props.key}>
      <Link to={`/admin${props.href}`} className={props.active ? "active" : ""}>
        {props.icon}
        <span className="menu-title">{props.title}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
