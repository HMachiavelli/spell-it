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
                return <td>{property}</td>;
              })}
              <td>
                <Link to={`${item.id}`}>
                  <FaRegEdit />
                </Link>
                <Link to="">
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
