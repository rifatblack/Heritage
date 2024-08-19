import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
  headers: {
    "X-CSRFToken": cookies.get("csrftoken"),
  },
});

export default AxiosInstance;
