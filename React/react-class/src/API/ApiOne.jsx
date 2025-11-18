import axios from "axios";

const ApiOne = axios.create({
  baseURL: "http://localhost:8000",
});

export default ApiOne;
