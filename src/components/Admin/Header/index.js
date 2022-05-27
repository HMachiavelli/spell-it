import React from "react";
import { Link, useNavigate } from "react-router-dom";

import AdminBadge from "./AdminBadge";
import User from "./User";
import { FaPowerOff } from "react-icons/fa";
import { clearAuthSession } from "../../../utils/services/auth";

import "./styles.css";

function Header() {
  const go = useNavigate();

  const logout = () => {
    clearAuthSession();
    go("/");
  };

  return (
    <header className="admin-header">
      <div className="header-partial header-left">
        <AdminBadge />
        <Link className="go-play" to="/play" target="_blank">
          Acessar app jogador
        </Link>
      </div>

      <div className="header-partial header-right">
        <User />
        <a onClick={logout}>
          <FaPowerOff />
        </a>
      </div>
    </header>
  );
}

export default Header;
