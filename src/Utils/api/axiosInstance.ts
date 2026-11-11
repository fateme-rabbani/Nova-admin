import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL?.trim();

if (!baseURL) {
  throw new Error("VITE_API_BASE_URL is not configured.");
}

export const axiosInstance = axios.create({ baseURL, timeout: 15000 });
