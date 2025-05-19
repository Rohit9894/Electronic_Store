import axios from "axios";
let url = import.meta.env.VITE_PRODUCT_BASEURL;
const axiosInstance = axios.create({
  baseURL: url,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
