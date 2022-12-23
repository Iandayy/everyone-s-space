import axios from "axios";

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080",
  },
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export default instance;
