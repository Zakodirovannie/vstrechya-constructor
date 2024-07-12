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

export const getExhibitions = async (id) => {
    const response = await instance.get(`/users/${id}/`)
    return response.data.collections
}
export const getExhibitionDetails = (id) => {
    return instance.get(`/constructor/collections/${id}/`)
}

export const createExhibition = (exhibition) => {
    return instance.post(`/constructor/collections/create/`, exhibition, {
    });
}
