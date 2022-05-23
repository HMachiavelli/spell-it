import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";

import { httpClient } from "../../../../utils/httpClient";
import FormActions from "../../../../components/Admin/FormActions";

function LevelForm() {
  const go = useNavigate();
  const { exerciseId } = useParams();

  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(1);
  const [level, setLevel] = useState(1);
  const [answerType, setAnswerType] = useState(1);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [levelList, setLevelList] = useState(["Aguarde..."]);

  useEffect(async () => {
    const levelsResponse = await httpClient.get(`/levels`);
    setLevelList(levelsResponse.data.list);

    if (!exerciseId) {
      return;
    }

    try {
      const response = await httpClient.get(`/exercises/${exerciseId}`);
      const { question, answer, game, level, answer_type } = response.data;

      setQuestion(question);
      setAnswer(answer);
      setGame(game.id);
      setLevel(level.id);
      setAnswerType(answer_type.id);
    } catch (err) {
      console.log(err);
      // NotificationManager.warning(err, "Atenção!");
    }
  }, []);

  const send = async (evt) => {
    evt.preventDefault();

    setLoading(true);

    try {
      if (exerciseId) {
        const response = await httpClient.patch("/exercises", {
          question,
          answer,
          type: "speech",
          answer_type_id: answerType,
          game_id: game,
          level_id: level,
          active: true,
          id: exerciseId,
        });
      } else {
        const response = await httpClient.post("/exercises", {
          question,
          answer,
          type: "speech",
          answer_type_id: answerType,
          game_id: game,
          level_id: level,
          active: true,
        });
      }

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
          </select>

          <label>Tipo de resposta:</label>
          <select
            name="answerTypeId"
            required
            value={answerType}
            onChange={(evt) => {
              setAnswerType(evt.target.value);
            }}
          >
            <option value="1">Fala</option>
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
            {levelList.map((level) => {
              return (
                <option key={level.id} value={level.id}>
                  {level.title}
                </option>
              );
            })}
          </select>

          <label>Enunciado:</label>
          <textarea
            onChange={(evt) => {
              setQuestion(evt.target.value);
            }}
            rows="3"
            name="question"
            value={question}
          />

          <label>Resposta esperada:</label>
          <textarea
            onChange={(evt) => {
              setAnswer(evt.target.value);
            }}
            rows="3"
            name="answer"
            value={answer}
          />
          <FormActions loading={loading} />
        </form>
      </div>
    </>
  );
}

export default LevelForm;
