import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7106/api",
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
api.interceptors.response.use(response => response,
    error => {
    console.log(error)
    if (error.response.status == 401 && !window.location.href.includes('login')) {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
})
export default api
