import React, { useState, useEffect } from "react";
import Button from "../../Button";
import Table from "../../Table";

import { FaSpinner } from "react-icons/fa";

import "./styles.css";

function TableList(props) {
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
    }, 3000);
  };

  const buildPages = (pages) => {
    let buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <button
          onClick={async () => {
            setPage(i);
            await fetch();
          }}
          className={page == i ? "active" : ""}
          type="button"
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="table-list">
      <div className="table-list-title">
        {props.title && <h2>{props.title}</h2>}
        <Button theme="primary" text="+ Criar jogo" />
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

      <div className="paginator">
        <button
          onClick={async () => {
            if (page > 1) {
              setPage(page - 1);
              await fetch();
            }
          }}
          type="button"
        >
          &lt;
        </button>

        {buildPages(pages).map((button) => {
          return button;
        })}

        <button
          onClick={async () => {
            if (page < pages) {
              setPage(page + 1);
              await fetch();
            }
          }}
          type="button"
        >
          &gt;
        </button>
      </div>

      {loading && (
        <div className="table-loading">
          <FaSpinner className="spin" size="2rem" />
        </div>
      )}
    </div>
  );
}

export default TableList;
