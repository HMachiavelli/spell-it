import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

function Table(props) {
  return (
    <table cellPadding={props.cellPadding} cellSpacing={props.cellSpacing}>
      <thead>
        <tr>
          {props.header.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => {
          return (
            <tr>
              {Object.values(item).map((property) => {
                if (typeof property != "function") {
                  return <td>{property}</td>;
                }
              })}
              <td>
                <Link to={`${item.id}`}>
                  <FaRegEdit />
                </Link>
                <Link
                  onClick={async (evt) => {
                    evt.preventDefault();
                    await item.onDelete(item.id);
                  }}
                  to=""
                >
                  <FaRegTrashAlt />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
