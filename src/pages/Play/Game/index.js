import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../../components/Button";
import Dictaphone from "../../../components/Dictaphone";
import { httpClient } from "../../../utils/httpClient";

import "./styles.css";

function Game(props) {
  const go = useNavigate();

  const [proceed, setProceed] = useState(false);
  const [question, setQuestion] = useState("Aguarde, carregando...");
  const [receivedAnswer, setReceivedAnswer] = useState("");

  const { gameResultId, exerciseId } = useParams();

  useEffect(async () => {
    try {
      const exerciseRes = await httpClient(`/exercises/${exerciseId}`);

      setQuestion(exerciseRes.data.question);
    } catch (err) {
      alert(err);
    }
  });

  const advance = async () => {
    try {
      const response = await httpClient.post(
        `/exercises/${exerciseId}/answer`,
        {
          game_result_id: gameResultId,
          received_answer: receivedAnswer,
        }
      );

      setProceed(false);
      setReceivedAnswer("");
      go(`/play/game/${gameResultId}/${response.data.next_exercise}`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="gameWrapper">
      <div className="gameBox">
        <div className="gameTitle">
          <h2>Exercício 1</h2>
        </div>
        <h2 className="mobileTitle">Exercício 1</h2>

        <div className="exercise">
          <h2>{question}</h2>

          <Dictaphone
            done={proceed}
            onSpeak={(text) => {
              setReceivedAnswer(text);
              setProceed(true);
            }}
          />

          <div className="warnings">
            {proceed ? (
              <p>Detectamos sua resposta! Você já pode avançar</p>
            ) : (
              <p>Aguardando resposta...</p>
            )}
            <p>
              Quando o botão de microfone estiver vermelho, pressione-o para
              falar. Quando o microfone ficar verde, você pode começar a falar.
            </p>
          </div>
        </div>
      </div>
      <div className="gameActions">
        <p className="progress">1/10</p>

        <Button
          onClick={async () => await advance()}
          type="button"
          text="Avançar"
          theme="primary"
          disabled={!proceed}
        />
      </div>
    </div>
  );
}

export default Game;
