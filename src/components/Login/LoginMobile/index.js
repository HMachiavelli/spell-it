import React from "react";
import Button from "../../Button";
import "./styles.css";

function App() {
  return (
    <div className="login-container-mobile">
      <h1>Seja bem-vindo ao Spell It!</h1>
      <hr />
      <form className="login-form">
        <input placeholder="Usuário" />
        <input placeholder="Senha" type="password" />

        <div className="login-action">
          <Button type="submit" text="Acessar" theme="primary" width="100" />
        </div>
      </form>
    </div>
  );
}

export default App;
