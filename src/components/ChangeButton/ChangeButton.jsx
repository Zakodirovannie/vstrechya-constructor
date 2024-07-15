import React from 'react';
import { useSelector } from 'react-redux';
import {patchExhibition} from "../../api/api.auth";

const ChangeButton = ({name, id}) => {
    const pageState = useSelector((state) => state.editor.page);

    const handleExport = async () => {
        try {
            if (!name || !pageState.rows) {
                console.error('Название и содержимое выставки обязательны!');
                return;
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('status', 0);
            const serializedPageState = JSON.stringify(pageState);
            formData.append('html_content', serializedPageState);
            //Отправляем данные на сервер
            const response = await patchExhibition(formData, id);
            console.log('Выставка успешно загружена: ', response.data);
        } catch (error) {
            console.error('Ошибка при загрузке выставки: ', error);
        }
    };

    return (
        <button className='border-0 p-5 rounded-md mr-2 hover:bg-black hover:text-white transition ease-in-out delay-50'
                onClick={handleExport}>
            Сохранить
        </button>
    );
};

export default ChangeButton;
