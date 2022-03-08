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
    href: "/jogos",
    active: false,
  },
  {
    title: "Exercícios",
    icon: <FaPencilRuler />,
    href: "/exercicios",
    active: false,
  },
  {
    title: "Níveis de dificuldade",
    icon: <FaMedal />,
    href: "/niveis",
    active: false,
  },
];

function AdminApp(props) {
  console.log(props.children);
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

        <div className="admin-content">
          <div className="admin-content-title">
            <h1>Bem-vindo, Administrador!</h1>
          </div>

          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AdminApp;
