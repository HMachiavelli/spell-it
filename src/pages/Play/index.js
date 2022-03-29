import React from "react";
import { Outlet } from "react-router-dom";
import PlayApp from "./_Base";

function Play() {
  return (
    <PlayApp>
      <Outlet />
    </PlayApp>
  );
}

export default Play;
