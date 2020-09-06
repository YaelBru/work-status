import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.defaults.headers.common["Authorization"] = localStorage.getItem("token" || null);

export default instance;
