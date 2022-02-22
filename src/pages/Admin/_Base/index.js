import React, { useState } from "react";
import Header from "../../../components/Admin/Header";
import Sidebar from "../../../components/Admin/Sidebar";

import {
  FaRegChartBar,
  FaGamepad,
  FaPencilRuler,
  FaMedal,
} from "react-icons/fa";

import "./styles.css";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaRegChartBar />,
    href: "#",
    active: true,
  },
  {
    title: "Jogos",
    icon: <FaGamepad />,
    href: "#",
    active: false,
  },
  {
    title: "Exercícios",
    icon: <FaPencilRuler />,
    href: "#",
    active: false,
  },
  {
    title: "Níveis de dificuldade",
    icon: <FaMedal />,
    href: "#",
    active: false,
  },
];

function AdminApp(props) {
  const [menuToggle, setMenuToggle] = useState(false);

  const onToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="app admin">
      <Sidebar
        menuToggle={menuToggle}
        onToggleMenu={onToggleMenu}
        menuItems={menuItems}
      />

      <div
        className={`admin-content-wrapper ${
          menuToggle ? "wrapper-expanded" : ""
        }`}
      >
        <Header />

        <div className="admin-content">{props.children}</div>
      </div>
    </div>
  );
}

export default AdminApp;
