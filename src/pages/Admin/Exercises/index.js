import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import AdminApp from "../_Base";

import "./styles.css";

const exerciseList = [
  {
    id: 1,
    game: "Jogo",
    level: "Nivel",
    description: "Enunciado",
  },
  {
    id: 2,
    game: "Jogo",
    level: "Nivel",
    description: "Enunciado",
  },
  {
    id: 3,
    game: "Jogo",
    level: "Nivel",
    description: "Enunciado",
  },
  {
    id: 4,
    game: "Jogo",
    level: "Nivel",
    description: "Enunciado",
  },
];

function Exercises() {
  return (
    <AdminApp>
      <div className="table-list">
        <div className="table-list-title">
          <h2>Exercícios</h2>
          <Button theme="primary" text="+ Criar jogo" />
        </div>

        <div className="table-list-filter">
          <input placeholder="Pesquisar..." name="filter" />

          <div className="results-per-page">
            <span>Resultados por página: </span>
            <select>
              <option>10</option>
              <option>15</option>
              <option>25</option>
            </select>
          </div>
        </div>

        <table cellPadding="8px">
          <thead>
            <tr>
              <th>#</th>
              <th>Jogo</th>
              <th>Nível</th>
              <th>Enunciado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {exerciseList.map((exercise) => {
              return (
                <tr>
                  <td>{exercise.id}</td>
                  <td>{exercise.game}</td>
                  <td>{exercise.level}</td>
                  <td>{exercise.description}</td>
                  <td>
                    <Link to={`edit/${exercise.id}`}>Editar</Link>
                    <Link to="">Excluir</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminApp>
  );
}

export default Exercises;
