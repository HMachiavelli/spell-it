import React from "react";
import AdminApp from "../_Base";
import TableList from "../../../components/Admin/TableList";

const header = ["#", "Jogo", "Nível", "Enunciado", "Ações"];

const exerciseList = [
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
  const onFilter = (search, pageSize) => {
    console.log(search, pageSize);
  };

  return (
    <AdminApp>
      <TableList
        title="Exercícios"
        header={header}
        list={exerciseList}
        onFilter={onFilter}
      />
    </AdminApp>
  );
}

export default Exercises;
