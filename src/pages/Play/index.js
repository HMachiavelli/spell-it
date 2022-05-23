import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/services/auth";
import { Outlet } from "react-router-dom";
import PlayApp from "./_Base";

function Play() {
  const go = useNavigate();

  useEffect(() => {
    const auth = isAuthenticated(false);

    if (!auth) {
      go("/login");
    }
  }, []);

  return (
    <PlayApp>
      <Outlet />
    </PlayApp>
  );
}

export default Play;
