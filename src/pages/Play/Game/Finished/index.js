import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../../../components/Button";
import ScoreStars from "./ScoreStars";

import { httpClient } from "../../../../utils/httpClient";

import "../styles.css";

function Finished() {
  const go = useNavigate();

  const [score, setScore] = useState(0);

  const { gameResultId } = useParams();

  useEffect(async () => {
    try {
      const gameResultRes = await httpClient.get(
        `/game-result/${gameResultId}`
      );

      setScore(gameResultRes.data.transformed_score);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div className="gameWrapper">
      <div className="gameBox">
        <div className="gameTitle">
          <h2>Jogo Finalizado!</h2>
        </div>
        <h2 className="mobileTitle">Jogo Finalizado!</h2>

        <div className="exercise">
          <h2>O seu resultado no jogo foi:</h2>

          <ScoreStars score={score} />
        </div>
      </div>
      <div className="gameActions">
        <p className="progress">10/10</p>

        <Button
          onClick={async () => go("/play")}
          type="button"
          text="Finalizar"
          theme="primary"
        />
      </div>
    </div>
  );
}

export default Finished;
