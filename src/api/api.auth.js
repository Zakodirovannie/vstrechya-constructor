import {instance} from "./api.config.js";

const BASE_URL = "https://vstrechya.space";
const BASE = 'http://localhost:5173'

export const login = (email, password) => {
    return instance.post("/auth/signin/", {email, password})
}

export const refreshToken = () => {
    return instance.post("/auth/api/token/refresh/", {
        refresh: localStorage.getItem("refresh-token")
    }).then((response) => {
        if (response.status === 401) {
            window.location.assign("/login")
        }
    }).catch(err => console.log('Error: ', err))
}

export const getMyInfo = () => {
    return instance.get(`/users/me/`).catch(() => refreshToken());
}