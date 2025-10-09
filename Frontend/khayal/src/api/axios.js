import axios from "axios";
export const axiosinstance = axios.create({
  baseUrl: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
