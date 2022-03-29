import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { NotificationContainer } from "react-notifications";

import LoginDesktop from "../../components/Login/LoginDesktop";
import LoginMobile from "../../components/Login/LoginMobile";

import "./styles.css";

function App() {
  const go = useNavigate();

  const [loading, setLoading] = useState();

  const onSubmit = (evt) => {
    evt.preventDefault();

    setLoading(true);

    const user = evt.target.user.value;
    const password = evt.target.password.value;

    if (user === "admin" && password === "admin") {
      go("/admin");
    } else if (user === "player" && password === "player") {
      go("/play");
    } else {
      NotificationManager.warning("Usário ou senha inválidos.", "Atenção!");
      setLoading(false);
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
