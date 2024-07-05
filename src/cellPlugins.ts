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

const fakeImageUploadService: (url: string) => ImageUploadType =
    (defaultUrl) => (file, reportProgress) => {
        return new Promise((resolve, reject) => {
            let counter = 0;
            const interval = setInterval(() => {
                counter++;
                reportProgress(counter * 10);
                if (counter > 9) {
                    clearInterval(interval);
                    alert(
                        'В данный момент отсутствует загрузка изображений на сервер. Данный файл может быть перезаписан!'
                    );
                    resolve({ url: URL.createObjectURL(file) });
                }
            }, 100);
        });
    };


const cellPlugins = [
    slate(),
    imagePlugin({ imageUpload: fakeImageUploadService('/images/react.png') }),
    spacer,
    video,
    background({
        imageUpload: fakeImageUploadService('/images/sea-bg.jpg'),
        enabledModes:
            ModeEnum.COLOR_MODE_FLAG |
            ModeEnum.IMAGE_MODE_FLAG |
            ModeEnum.GRADIENT_MODE_FLAG,
    }),
];

export default cellPlugins;
