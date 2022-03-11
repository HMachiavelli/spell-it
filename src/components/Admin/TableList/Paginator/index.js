import React from "react";

import "./styles.css";

function Paginator(props) {
  const { page, pages } = props;

  const buildPages = (pages) => {
    let buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <button
          onClick={() => props.onChangePage(i)}
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
    <div className="paginator">
      <button
        onClick={async () => {
          if (page > 1) {
            props.onChangePage(page - 1);
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
            props.onChangePage(page + 1);
          }
        }}
        type="button"
      >
        &gt;
      </button>
    </div>
  );
}

export default Paginator;
