import axios from "axios";

const apiConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

apiConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiConfig;
