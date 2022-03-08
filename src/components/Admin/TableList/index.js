import React, { useState, useRef } from "react";
import Button from "../../Button";
import Table from "../../Table";

import "./styles.css";

function TableList(props) {
  const [filter, setFilter] = useState("");
  const [pageSize, setPageSize] = useState("10");

  return (
    <div className="table-list">
      <div className="table-list-title">
        {props.title && <h2>{props.title}</h2>}
        <Button theme="primary" text="+ Criar jogo" />
      </div>

      <form
        className="table-list-filter"
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onFilter(filter, pageSize);
        }}
      >
        <input
          placeholder="Pesquisar..."
          name="filter"
          onChange={(evt) => setFilter(evt.target.value)}
          value={filter}
        />

        <div className="results-per-page">
          <span>Resultados por página: </span>
          <select
            value={pageSize}
            onChange={(evt) => {
              setPageSize(evt.target.value);
              props.onFilter(filter, pageSize);
            }}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </form>

      <Table header={props.header} items={props.list} cellPadding="8px" />
    </div>
  );
}

export default TableList;
