import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Admin/Dashboard";
import ExerciseList from "./pages/Admin/Exercises/List";
import LevelList from "./pages/Admin/Levels/List";
import LevelForm from "./pages/Admin/Levels/Form";
import Admin from "./pages/Admin";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />

      <Route path="admin" element={<Admin />}>
        <Route path="" index element={<Dashboard />} />
        <Route path="exercicios" element={<Outlet />}>
          <Route path="" index element={<ExerciseList />} />
        </Route>
        <Route path="niveis" element={<Outlet />}>
          <Route path="" index element={<LevelList />} />
          <Route path=":levelId" element={<LevelForm />} />
        </Route>
        <Route path="jogos" element={<Outlet />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
