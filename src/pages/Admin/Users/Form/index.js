import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";

import { httpClient } from "../../../../utils/httpClient";
import FormActions from "../../../../components/Admin/FormActions";

function LevelForm() {
  const go = useNavigate();
  const { userId } = useParams();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("player");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  useEffect(async () => {
    if (!userId) {
      return;
    }

    try {
      const response = await httpClient.get(`/users/${userId}`);
      const { name, role, email } = response.data;

      setName(name);
      setRole(role);
      setUsername(email);
    } catch (err) {
      console.log(err);
      // NotificationManager.warning(err, "Atenção!");
    }
  }, []);

  const send = async (evt) => {
    evt.preventDefault();

    setLoading(true);

    try {
      const newPass = passwordChanged ? password : null;

      console.log(role);

      if (userId) {
        const response = await httpClient.patch("/users", {
          name: name,
          role: role,
          email: username,
          password: newPass,
          active: true,
          id: userId,
        });
      } else {
        const response = await httpClient.post("/users", {
          name: name,
          role: role,
          email: username,
          password: newPass,
          active: true,
        });
      }

      NotificationManager.success("O registro foi salvo!", "Sucesso!");
      setLoading(false);
      setTimeout(() => {
        go("/admin/usuarios");
      }, 500);
    } catch (err) {
      NotificationManager.warning(err, "Atenção!");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-title">
        <h2>Usuários &gt; {userId ? "Editar" : "Criar"} usuário</h2>
      </div>

      <div className="form-wrapper">
        <form onSubmit={send}>
          <label>Nome completo:</label>
          <input
            name="fullname"
            required
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
          ></input>

          <label>Permissões:</label>
          <select
            name="role"
            required
            value={role}
            onChange={(evt) => {
              setRole(evt.target.value);
            }}
          >
            <option value="player">Jogador</option>
            <option value="admin">Administrador</option>
          </select>

          <label>Nome de usuário:</label>
          <input
            name="username"
            required
            value={username}
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          ></input>

          <label>Senha:</label>
          <input
            name="password"
            type="password"
            required={!userId ? true : false}
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
              setPasswordChanged(true);
            }}
          ></input>

          <FormActions loading={loading} />
        </form>
      </div>
    </>
  );
}

export default LevelForm;
