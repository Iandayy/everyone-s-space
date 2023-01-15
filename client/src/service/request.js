import axios from "axios";

const instance = axios.create({
  baseURL: "https://port-0-server-dpuqy925lbnnny33.gksl2.cloudtype.app",
  withCredentials: true,
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
