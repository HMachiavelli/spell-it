import React from "react";

import { FaSpinner } from "react-icons/fa";

import "./styles.css";

function Loading() {
  return (
    <div className="table-loading">
      <FaSpinner className="spin" size="2rem" />
    </div>
  );
}

export default Loading;
