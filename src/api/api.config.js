import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://engine.vstrechya.space/",
});


instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("access-token")}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)