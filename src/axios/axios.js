import axios from "axios";

// const API = "http://localhost:8000/";
const API = "https://portfolio-bf91.onrender.com/";

export const Axios = axios.create({
  baseURL: API,
});