import React from "react";

import AdminBadge from "./AdminBadge";
import User from "./User";

import "./styles.css";

function Header() {
  return (
    <header className="admin-header">
      <div className="header-partial header-left">
        <AdminBadge />
      </div>

      <div className="header-partial header-right">
        <User />
      </div>
    </header>
  );
}

export default Header;
