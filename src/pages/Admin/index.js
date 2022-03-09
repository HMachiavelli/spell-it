import React from "react";
import { Outlet } from "react-router-dom";
import AdminApp from "./_Base";

function Admin() {
  return (
    <AdminApp>
      <Outlet />
    </AdminApp>
  );
}

export default Admin;
