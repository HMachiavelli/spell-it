import React from "react";

import MenuItem from "./MenuItem";

import "./styles.css";

function Menu(props) {
  return (
    <div className="menu">
      <li>
        {props.menuItems.map((item) => {
          return (
            <MenuItem
              active={item.active}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          );
        })}
      </li>
    </div>
  );
}

export default Menu;
