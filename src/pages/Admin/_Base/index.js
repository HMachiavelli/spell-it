import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import Header from "../../../components/Admin/Header";
import Sidebar from "../../../components/Admin/Sidebar";

import { FaRegChartBar, FaPencilRuler, FaMedal, FaUser } from "react-icons/fa";

import "./styles.css";
import "react-notifications/lib/notifications.css";

function AdminApp(props) {
  const [menuToggle, setMenuToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    const splittedPathname = pathname.split("/");

    setActiveMenu(splittedPathname[2] || "dashboard");
  });

  const onToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaRegChartBar />,
      href: "#",
      active: activeMenu === "dashboard",
      blocked: false,
    },
    {
      title: "Exercícios",
      icon: <FaPencilRuler />,
      href: "/exercicios",
      active: activeMenu === "exercicios",
      blocked: false,
    },
    {
      title: "Níveis de dificuldade",
      icon: <FaMedal />,
      href: "/niveis",
      active: activeMenu === "niveis",
      blocked: false,
    },
    {
      title: "Usuários",
      icon: <FaUser />,
      href: "/usuarios",
      active: activeMenu === "usuarios",
      blocked: false,
    },
  ];

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

      <NotificationContainer />
    </div>
  );
}

export default AdminApp;
