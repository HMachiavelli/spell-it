import React, { useState } from "react";
import { NotificationManager } from "react-notifications";

import { httpClient } from "../../../../utils/httpClient";
import TableList from "../../../../components/Admin/TableList";

const header = ["#", "Descrição", "Ações"];

function LevelList() {
  const [levelList, setLevelList] = useState([]);
  const [total, setTotal] = useState(0);

  const onFilter = async (search, pageSize, page) => {
    try {
      const response = await httpClient.get("/levels", {
        params: {
          search,
          page,
          page_size: pageSize,
        },
      });

      setTotal(response.data.total);
      setLevelList(mapApiResponse(response.data.list));
    } catch (err) {
      console.log(err);
      NotificationManager.warning(err, "Atenção!");
    }
  };

  const mapApiResponse = (apiList) => {
    return apiList.map((item) => {
      return {
        id: item.id,
        title: item.title,
      };
    });
  };

  return (
    <TableList
      title="Níveis de dificuldade"
      header={header}
      list={levelList}
      total={total}
      onFilter={onFilter}
      addLink="/admin/niveis/add"
    />
  );
}

export default LevelList;
