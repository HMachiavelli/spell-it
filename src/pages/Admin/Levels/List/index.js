import React from "react";
import TableList from "../../../../components/Admin/TableList";

const header = ["#", "Descrição", "Ações"];

const levelList = [
  {
    id: 1,
    description: "Fácil",
  },
  {
    id: 2,
    description: "Médio",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
  {
    id: 3,
    game: "Difícil",
  },
];

function LevelList() {
  const onFilter = (search, pageSize) => {
    console.log(search, pageSize);
  };

  return (
    <TableList
      title="Níveis de dificuldade"
      header={header}
      list={levelList}
      total={50}
      onFilter={onFilter}
    />
  );
}

export default LevelList;
