import React from "react";
import Button from "../../Button";
import "./styles.css";

function LoginDesktop(props) {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Seja bem-vindo ao Spell It!</h1>

        <p>
          Se você já possui uma conta no Spell It!, por favor, realize login.
        </p>
        <p>Caso contrário, clique no botão abaixo para criar uma conta</p>

        <Button type="link" text="Criar conta" theme="secondary" />
      </div>
      <div className="login-right">
        <div>
          <h1>Login</h1>
          <hr />

          <form className="login-form" onSubmit={props.onSubmit} method="POST">
            <input placeholder="Usuário" name="user" type="text" />
            <input placeholder="Senha" name="password" type="password" />

            <div className="login-action">
              <Button
                type="submit"
                text={props.loading ? "Aguarde" : "Acessar"}
                theme="secondary"
                disabled={props.loading}
              />
              <a href="#">Recuperar senha</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginDesktop;
