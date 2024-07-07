import {instance} from "./api.config.js";

const BASE_URL = "https://vstrechya.space";
const BASE = 'http://localhost:5173'

export const refreshToken = () => {
    console.log(localStorage)
    return instance.post("/auth/api/token/refresh/", {
        refresh: localStorage.getItem("refresh-token")
    }).catch((err) => console.log(err));
}

export const getMyInfo = () => {
    return instance.get(`/users/me/`).catch(() => refreshToken());
}