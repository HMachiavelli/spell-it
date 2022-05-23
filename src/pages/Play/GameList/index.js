import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../../../utils/httpClient";

import Button from "../../../components/Button";

import "./styles.css";

function GameList(props) {
  const go = useNavigate();

  const [level, setLevel] = useState(1);
  const [game, setGame] = useState(1);
  const [levelList, setLevelList] = useState([]);

  useEffect(async () => {
    try {
      const response = await httpClient.get("/levels");

      setLevelList(response.data.list);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const goToGame = async () => {
    if (!game || !level) {
      alert("Selecione o jogo e o nível de dificuldade desejado!");
      return;
    }

    try {
      const response = await httpClient.post("/game-result", {
        game_id: game,
        level_id: level,
      });

      go(`game/${response.data.id}/${response.data.first_exercise_id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="gameWrapper">
      <div className="gameBox">
        <div className="gameTitle">
          <h2 className="title">Selecione um jogo</h2>
        </div>
        <h2 className="mobileTitle">Selecione um jogo:</h2>

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
        <span>Dificuldade:</span>
        <div className="levelList">
          {levelList.map((levelObj) => {
            return (
              <div
                onClick={() => setLevel(levelObj.id)}
                className={level === levelObj.id ? "active box" : "box"}
              >
                {levelObj.title}
              </div>
            );
          })}
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
