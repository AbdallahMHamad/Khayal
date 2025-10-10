import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Example: "https://localhost:7058/api"
  withCredentials: true,
});
