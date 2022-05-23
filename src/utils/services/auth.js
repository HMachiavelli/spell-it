import { httpClient } from "../httpClient";

const clearAuthSession = () => {
  localStorage.removeItem("expire_at");
  localStorage.removeItem("access_token");
  localStorage.removeItem("role");
};

export const checkTokenExpiration = () => {
  const expire_at = localStorage.getItem("expire_at");
  if (!expire_at || +expire_at < Date.now()) {
    clearAuthSession();
    return false;
  }

  return true;
};

export const isAuthenticated = (adminOnly) => {
  const token_valid = checkTokenExpiration();
  if (!token_valid) {
    clearAuthSession();
    return false;
  }

  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    clearAuthSession();
    return false;
  }

  const role = localStorage.getItem("role");
  if (!role || (adminOnly && role !== "admin")) {
    clearAuthSession();
    return false;
  }

  return true;
};

export const authenticate = async (client_id, client_secret) => {
  const response = await httpClient.post(
    "/authenticate",
    {
      grant_type: "get-credentials",
    },
    {
      auth: {
        username: client_id,
        password: client_secret,
      },
    }
  );

  if (!response || !response.data || !response.data.token) {
    throw new Error("Unauthorized");
  }

  return response.data;
};
