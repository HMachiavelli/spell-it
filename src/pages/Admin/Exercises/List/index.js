import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import Swal from "sweetalert2";

import { httpClient } from "../../../../utils/httpClient";
import TableList from "../../../../components/Admin/TableList";

const header = ["#", "Jogo", "Nível", "Enunciado", "Reposta esperada", "Ações"];

function LevelList() {
  const [levelList, setLevelList] = useState([]);
  const [total, setTotal] = useState(0);

  const onFilter = async (search, pageSize, page) => {
    try {
      const response = await httpClient.get("/exercises", {
        params: {
          search,
          page,
          page_size: pageSize,
        },
      });

      setTotal(response.data.total);
      setLevelList(mapApiResponse(response.data.list));
    } catch (err) {
      NotificationManager.warning(err, "Atenção!");
    }
  };

  const onDelete = async (id) => {
    Swal.fire({
      title: "Atenção!",
      text: "Você deseja realmente excluir o registro selecionado? Esta ação é irreversível.",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, excluir",
      showLoaderOnConfirm: true,
      reverseButtons: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: async () => {
        const response = await httpClient.delete(`/exercises/${id}`);

        if (response.status === 200) {
          return response;
        } else {
          NotificationManager.warning(
            "Não foi possível excluir este registro agora!",
            "Atenção!"
          );
        }
      },
    }).then(async (result) => {
      if (!result.isConfirmed) {
        return;
      }

      NotificationManager.success("Registro excluído!", "Sucesso!");
      await onFilter();
    });
  };

  const mapApiResponse = (apiList) => {
    return apiList.map((item) => {
      return {
        id: item.id,
        game: item.game.name,
        level: item.level.title,
        question: item.question,
        answer: item.answer,
        onDelete,
      };
    });
  };

  return (
    <TableList
      title="Exercícios"
      header={header}
      list={levelList}
      total={total}
      onFilter={onFilter}
      addLink="/admin/exercicios/add"
    />
  );
}

export default LevelList;
