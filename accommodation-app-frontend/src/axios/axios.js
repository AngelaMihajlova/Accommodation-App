import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://backend:9090/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;