import {instance} from "./api.config.js";
import {deleteCookie} from "./cookie";


export const login = (email, password) => {
    return instance.post("/auth/signin/", {email, password})
}

export const logout = () => {
    deleteCookie('sessionId');
    deleteCookie('csrftoken');
    deleteCookie('access_token');
    deleteCookie('refresh_token');
}

export const getUser = (id) => {
    return instance.get(`/users/${id}/`)
}

export const getMyInfo = () => {
    return instance.get(`/users/me/`)
        .catch(err => console.log('Error: ', err));
}

export const changeMyPhoto = (photo) => {
    return instance.post(`/users/upload_avatar/`, photo)
}

export const changeProfileInfo = (id, last_name, first_name, image_url, phone) => {
    return instance.post(`/users/${id}/edit`, {
        first_name,
        last_name,
        image_url,
        phone
    })
}

export const getExhibitions = async (id) => {
    const response = await instance.get(`/users/${id}/`);
    return response.data.exhibitions;
}
export const getExhibitionDetails = (id) => {
    return instance.get(`/constructor/collections/${id}/`);
}

export const createExhibition = (exhibition) => {
    return instance.post(`/constructor/collections/create/`, exhibition);
}

export const patchExhibition = (exhibition, id) => {
    return instance.patch(`/constructor/collections/${id}/`, exhibition);
}
