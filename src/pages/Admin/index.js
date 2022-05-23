import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { isAuthenticated } from "../../utils/services/auth";
import AdminApp from "./_Base";

function Admin() {
  const go = useNavigate();

  useEffect(() => {
    const auth = isAuthenticated(true);

    if (!auth) {
      go("/");
    }
  }, []);

  return (
    <AdminApp>
      <Outlet />
    </AdminApp>
  );
}

export default Admin;
