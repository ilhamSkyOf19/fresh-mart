import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },
});

export default API;