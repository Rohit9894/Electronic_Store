import axios from "axios";
let url = import.meta.env.VITE_PRODUCT_BASEURL;
const axiosInstance = axios.create({
  baseURL: url,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // You can add Authorization headers here if needed
    // 'Authorization': `Bearer ${token}`
  },
});

export default axiosInstance;
