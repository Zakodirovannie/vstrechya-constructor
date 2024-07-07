import {instance} from "./api.config.js";

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

export const createExhibition = (data) => {
    return instance.post(`/constructor/collections/create/`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}