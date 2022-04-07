import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";

import { httpClient } from "../../../../utils/httpClient";
import FormActions from "../../../../components/Admin/FormActions";

function LevelForm() {
  const go = useNavigate();
  const { exerciseId } = useParams();

  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(null);
  const [level, setLevel] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // useEffect(async () => {
  //   if (!exerciseId) {
  //     return;
  //   }

  //   try {
  //     // const response = await httpClient.get(`/levels/${exerciseId}`);
  //     const { title } = response.data;

  //     setTitle(title);
  //   } catch (err) {
  //     console.log(err);
  //     // NotificationManager.warning(err, "Atenção!");
  //   }
  // }, []);

  const send = async (evt) => {
    evt.preventDefault();

    setLoading(true);

    try {
      // if (levelId) {
      //   const response = await httpClient.patch("/levels", {
      //     title: evt.target.title.value,
      //     id: levelId,
      //   });
      // } else {
      //   const response = await httpClient.post("/levels", {
      //     title: evt.target.title.value,
      //   });
      // }

      NotificationManager.success("O registro foi salvo!", "Sucesso!");
      setLoading(false);
      setTimeout(() => {
        go("/admin/exercicios");
      }, 500);
    } catch (err) {
      NotificationManager.warning(err, "Atenção!");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-title">
        <h2>Exercícios &gt; {exerciseId ? "Editar" : "Criar"} exercício</h2>
      </div>

      <div className="form-wrapper">
        <form onSubmit={send}>
          <label>Jogo:</label>
          <select
            name="gameId"
            required
            value={game}
            onChange={(evt) => {
              setGame(evt.target.value);
            }}
          >
            <option value="1">Speaking</option>
            <option value="2">Listening</option>
            <option value="3">Writing</option>
            <option value="4">Reading</option>
          </select>

          <label>Nível de dificuldade:</label>
          <select
            name="levelId"
            required
            value={level}
            onChange={(evt) => {
              setLevel(evt.target.value);
            }}
          >
            <option value="1">Iniciante</option>
            <option value="2">Médio</option>
            <option value="3">Avançado</option>
          </select>

          <label>Enunciado:</label>
          <textarea
            onChange={(evt) => {
              setQuestion(evt.target.value);
            }}
            rows="3"
            name="question"
          >
            {question}
          </textarea>

          <label>Resposta esperada:</label>
          <textarea
            onChange={(evt) => {
              setAnswer(evt.target.value);
            }}
            rows="3"
            name="answer"
          >
            {answer}
          </textarea>

          <FormActions loading={loading} />
        </form>
      </div>
    </>
  );
}

export default LevelForm;
