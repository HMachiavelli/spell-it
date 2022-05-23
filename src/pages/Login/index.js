import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { NotificationContainer } from "react-notifications";
import { authenticate, isAuthenticated } from "../../utils/services/auth";

import LoginDesktop from "../../components/Login/LoginDesktop";
import LoginMobile from "../../components/Login/LoginMobile";

import "./styles.css";

function App() {
  const go = useNavigate();

  useEffect(() => {
    const auth = isAuthenticated(true);

    if (auth) {
      const page = localStorage.getItem("role") === "admin" ? "admin" : "play";
      go(`/${page}`);
    }
  }, []);

  const [loading, setLoading] = useState();

  const onSubmit = async (evt) => {
    evt.preventDefault();

    setLoading(true);

    const client_id = evt.target.user.value;
    const client_secret = evt.target.password.value;

    const throwError = () => {
      NotificationManager.warning("Usário ou senha inválidos.", "Atenção!");
      setLoading(false);
    };

    try {
      const response = await authenticate(client_id, client_secret);

      localStorage.setItem("access_token", response.token);
      localStorage.setItem("expire_at", response.expire_at);
      localStorage.setItem("role", response.role);

      if (response && response.role && response.role === "admin") {
        go("/admin");
      } else if (response && response.role && response.role === "player") {
        go("/play");
      } else {
        throwError();
      }
    } catch (err) {
      throwError();
    }
  };

  return (
    <div className="app login">
      <LoginDesktop loading={loading} onSubmit={onSubmit} />
      <LoginMobile loading={loading} onSubmit={onSubmit} />

      <NotificationContainer />
    </div>
  );
}

export default App;
