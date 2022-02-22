import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import ToggleButton from "./ToggleButton";

import "./styles.css";

function Sidebar(props) {
  return (
    <nav className={`admin-sidebar ${props.menuToggle ? "sidebar-thin" : ""}`}>
      <div className="top-sidebar">
        <Logo display={!props.menuToggle} />

        <ToggleButton onToggleMenu={props.onToggleMenu} />
      </div>

      <Menu menuItems={props.menuItems} />
    </nav>
  );
}

export default Sidebar;
