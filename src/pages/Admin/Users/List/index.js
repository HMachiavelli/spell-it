import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import Swal from "sweetalert2";

import { httpClient } from "../../../../utils/httpClient";
import TableList from "../../../../components/Admin/TableList";

const header = ["#", "Nome", "Usuário", "Permissões", "Ações"];

const permissions = {
  admin: "Administrador",
  player: "Jogador",
};

function UserList() {
  const [userList, setUserList] = useState([]);
  const [total, setTotal] = useState(0);

  const onFilter = async (search, pageSize, page) => {
    try {
      const response = await httpClient.get("/users", {
        params: {
          search,
          page,
          page_size: pageSize,
        },
      });

      setTotal(response.data.total);
      setUserList(mapApiResponse(response.data.list));
    } catch (err) {
      console.log(err);
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
        const response = await httpClient.delete(`/users/${id}`);

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
        name: item.name,
        email: item.email,
        role: permissions[item.role] || "Desconhecido",
        onDelete,
      };
    });
  };

  return (
    <TableList
      title="Usuários"
      header={header}
      list={userList}
      total={total}
      onFilter={onFilter}
      addLink="/admin/usuarios/add"
    />
  );
}

export default UserList;
