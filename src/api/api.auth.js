import {instance} from "./api.config.js";
import {deleteCookie} from "./cookie";

export const logout = () => {
    deleteCookie('sessionId');
    deleteCookie('csrftoken');
    deleteCookie('access_token');
    deleteCookie('refresh_token');
}

export const activation = () => {
    return instance.post('/auth/send-activation-email/')
}

export const getMyInfo = () => {
    return instance.get(`/users/me/`)
        .catch(err => console.log('Error: ', err));
}

export const getExhibitions = async (id) => {
    const response = await instance.get(`/users/${id}/`);
    return response.data.exhibitions;
}
export const getExhibitionDetails = (id) => {
    return instance.get(`/constructor/collections/${id}/`);
}

export const createExhibition = (exhibition) => {
    return instance.post(`/constructor/collections/create/`, exhibition)
        .catch(error => console.log(error.response.data));
}

export const patchExhibition = (exhibition, id) => {
    return instance.patch(`/constructor/collections/${id}/`, exhibition)
        .catch(error => console.log(error.response.data));
}
