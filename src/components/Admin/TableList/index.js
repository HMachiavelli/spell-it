import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Button";
import Table from "../../Table";
import Paginator from "./Paginator";
import Loading from "./Loading";

import "./styles.css";

function TableList(props) {
  const go = useNavigate();

  const [filter, setFilter] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pages = Math.ceil(props.total / +pageSize);

  useEffect(() => {
    const fetchData = async () => {
      await fetch();
    };

    fetchData();
  }, []);

  const fetch = async () => {
    setLoading(true);
    await props.onFilter(filter, pageSize, page);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const onChangePage = async (page) => {
    setPage(page);
    await fetch();
  };

  return (
    <div className="table-list">
      <div className="table-list-title">
        {props.title && <h2>{props.title}</h2>}
        <Button
          theme="primary"
          text="+ Criar"
          onClick={() => go(props.addLink)}
        />
      </div>

      <form
        className="table-list-filter"
        onSubmit={async (evt) => {
          evt.preventDefault();
          await fetch();
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
            onChange={async (evt) => {
              setPageSize(evt.target.value);
              await fetch();
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

      <Paginator onChangePage={onChangePage} pages={pages} page={page} />

      {loading && <Loading />}
    </div>
  );
}

export default TableList;
