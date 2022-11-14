import axios from "axios";

const instance = axios.create({
  baseURL: `https://everyone-s-post.herokuapp.com/`,
});

export default instance;
