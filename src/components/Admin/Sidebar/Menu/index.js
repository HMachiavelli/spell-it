import React from "react";

import MenuItem from "./MenuItem";

import "./styles.css";

function Menu(props) {
  return (
    <div className="menu">
      <ul>
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
      </ul>
    </div>
  );
}

export default Menu;
