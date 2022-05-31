import axios from "axios";
import { useNavigate } from "react-router-dom";

export let httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
