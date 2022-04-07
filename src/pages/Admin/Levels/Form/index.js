import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";

import { httpClient } from "../../../../utils/httpClient";
import FormActions from "../../../../components/Admin/FormActions";

function LevelForm() {
  const go = useNavigate();
  const { levelId } = useParams();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(async () => {
    if (!levelId) {
      return;
    }

    try {
      const response = await httpClient.get(`/levels/${levelId}`);
      const { title } = response.data;

      setTitle(title);
    } catch (err) {
      console.log(err);
      // NotificationManager.warning(err, "Atenção!");
    }
  }, []);

  const send = async (evt) => {
    evt.preventDefault();

    setLoading(true);

    try {
      if (levelId) {
        const response = await httpClient.patch("/levels", {
          title: evt.target.title.value,
          id: levelId,
        });
      } else {
        const response = await httpClient.post("/levels", {
          title: evt.target.title.value,
        });
      }

      NotificationManager.success("O registro foi salvo!", "Sucesso!");
      setLoading(false);
      setTimeout(() => {
        go("/admin/niveis");
      }, 500);
    } catch (err) {
      NotificationManager.warning(err, "Atenção!");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-title">
        <h2>Níveis de dificuldade &gt; {levelId ? "Editar" : "Criar"} nível</h2>
      </div>

      <div className="form-wrapper">
        <form onSubmit={send}>
          <label>Descrição:</label>
          <input
            name="title"
            required
            value={title}
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
          ></input>

          <FormActions loading={loading} />
        </form>
      </div>
    </>
  );
}

export default LevelForm;
