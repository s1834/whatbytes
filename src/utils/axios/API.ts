import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://whatbyte.shubhshah.xyz"
    : "http://localhost:3000";

const API = axios.create({
  baseURL: baseURL,
});

export default API;
