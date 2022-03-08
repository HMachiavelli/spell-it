import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Admin/Dashboard";
import Exercises from "./pages/Admin/Exercises";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="admin" element={<Dashboard />} />
      <Route path="admin/exercicios" element={<Exercises />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
