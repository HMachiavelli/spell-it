import React, { useState } from "react";

import Button from "../../../components/Button";
import Dictaphone from "../../../components/Dictaphone";

import "./styles.css";

function Game(props) {
  const [proceed, setProceed] = useState(false);

  return (
    <div className="gameWrapper">
      <div className="gameBox">
        <div className="gameTitle">
          <h2>Exercício 1</h2>
        </div>
        <h2 className="mobileTitle">Exercício 1</h2>

        <div className="exercise">
          <h2>Fale a seguinte frase: "The book is on the table"</h2>

          <Dictaphone onSpeak={() => setProceed(true)} />
        </div>
      </div>
      <div className="gameActions">
        <p className="progress">1/10</p>

        <Button
          onClick={() => alert("Ser foi!")}
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
