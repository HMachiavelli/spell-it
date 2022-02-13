import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="app">
      <div className="login-container">
        <div className="login-left">
          <h1>Seja bem-vindo ao Spell It!</h1>

          <p>Se você já possui uma conta no Spell It!, por favor, realize login.</p> 
          <p>Caso contrário, clique no botão abaixo para criar uma conta</p>

          <a href="#">Criar conta</a>
        </div>
        <div className="login-right">
          <div>
            <h1>Login</h1>
            <hr/>

            <form className="login-form">
              <input placeholder="Usuário" />
              <input placeholder="Senha" />

              <div className="login-action">
                <button type="submit">Acessar</button>
                <a href="#">Recuperar senha</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="login-container-mobile">
        <h1>Seja bem-vindo ao Spell It!</h1>
        <hr/>
        <form className="login-form">
          <input placeholder="Usuário" />
          <input placeholder="Senha" />

          <div className="login-action">
            <button type="submit">Acessar</button>
            <a href="#">Recuperar senha</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
