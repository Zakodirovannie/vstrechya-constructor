import slate from "@react-page/plugins-slate";
import { imagePlugin } from '@react-page/plugins-image';
import spacer from "@react-page/plugins-spacer";
import type { ImageUploadType } from '@react-page/plugins-image';
import video from '@react-page/plugins-video';
import background, { ModeEnum } from '@react-page/plugins-background';

import '@react-page/plugins-background/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-video/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import {instance} from "./api/api.config";

const ImageUploadService = (endpoint: string): ImageUploadType => {
    return (file, reportProgress) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('img', file);

            instance.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(response => {
                    resolve({url: response.data['image_url']});
                })
                .catch(function (error) {
                    if (error.response) {
                        // Запрос был сделан, и сервер ответил кодом состояния, который
                        // выходит за пределы 2xx
                        console.log(error.response.data);
                    }
                    reject(error);
                });
        });
    };
};

const cellPlugins = [
    slate(),
    imagePlugin({ imageUpload: ImageUploadService('https://engine.vstrechya.space/constructor/upload-image/') }),
    spacer,
    video,
    background({
        imageUpload: ImageUploadService('https://engine.vstrechya.space/constructor/upload-image/'),
        enabledModes:
            ModeEnum.COLOR_MODE_FLAG |
            ModeEnum.IMAGE_MODE_FLAG |
            ModeEnum.GRADIENT_MODE_FLAG,
    }),
];

export default cellPlugins;
