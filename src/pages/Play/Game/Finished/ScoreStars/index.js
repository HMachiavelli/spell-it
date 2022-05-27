import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

import "./styles.css";

function ScoreStars(props) {
  const roundedDown = Math.floor(props.score);
  const scoreDiff = props.score - roundedDown;

  let stars = [];

  for (let i = 0; i < roundedDown; i++) {
    const star = <FaStar key={i} size="3rem" color="#FFD700" />;
    stars.push(star);
  }

  if (scoreDiff > 0) {
    stars.push(<FaStarHalf size="3rem" color="#FFD700" />);
  }

  return (
    <>
      <div className="score">
        <div className="score-stars">
          <FaStar size="3rem" />
          <FaStar size="3rem" />
          <FaStar size="3rem" />
          <FaStar size="3rem" />
          <FaStar size="3rem" />
        </div>

        <div className="golden-stars">
          {stars.map((star) => {
            return star;
          })}
        </div>
      </div>
      <h2>{props.score < 3 ? "Continue treinando!" : "Parabéns!"}</h2>
    </>
  );
}

export default ScoreStars;
