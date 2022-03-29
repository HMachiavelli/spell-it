import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";

import "./styles.css";

function GameList(props) {
  const go = useNavigate();

  const [level, setLevel] = useState(1);
  const [game, setGame] = useState(1);

  const goToGame = () => {
    if (!game || !level) {
      alert("Selecione o jogo e o nível de dificuldade desejado!");
      return;
    }

    go(`game/${game}?l=${level}`);
  };

  return (
    <div className="gameWrapper">
      <div className="gameBox">
        <div className="gameTitle">
          <h2>Selecione um jogo</h2>
        </div>

        <div className="gameList">
          <div
            onClick={() => setGame(1)}
            className={game === 1 ? "active box" : "box"}
          >
            <h2>Speaking</h2>
          </div>
          <div className={game === 2 ? "active box" : "box"}>
            <h2>Listening</h2>
          </div>
          <div className={game === 3 ? "active box" : "box"}>
            <h2>Reading</h2>
          </div>
          <div className={game === 4 ? "active box" : "box"}>
            <h2>Writing</h2>
          </div>
        </div>
      </div>
      <div className="gameActions">
        <div className="levelList">
          <div
            onClick={() => setLevel(1)}
            className={level === 1 ? "active box" : "box"}
          >
            Fácil
          </div>
          <div
            onClick={() => setLevel(2)}
            className={level === 2 ? "active box" : "box"}
          >
            Médio
          </div>
          <div
            onClick={() => setLevel(3)}
            className={level === 3 ? "active box" : "box"}
          >
            Difícil
          </div>
        </div>

        <Button
          onClick={goToGame}
          type="button"
          text="Começar"
          theme="primary"
          disabled={false}
        />
      </div>
    </div>
  );
}

export default GameList;
