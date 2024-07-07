// src/components/SubmitButton.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import getValue from '@react-page/editor';
import {instance} from "../../api/api.config";

const SubmitButton = () => {
    const pageState = useSelector((state) => state.editor.page);

    const handleCLick = () => {
        console.log('Value: ', getValue(pageState));
    };

    const handleExport = async () => {
        try {
            // Получаем текущее состояние страницы
            const pageValue = getValue(pageState);

            // Сериализуем состояние в JSON
            const serializedPage = JSON.stringify(pageValue);

            // Отправляем данные на сервер
            const response = await instance.post('https://your-server.com/api/export', serializedPage, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Page exported successfully:', response.data);
        } catch (error) {
            console.error('Error exporting the page:', error);
        }
    };

    return (
        <button className='border-2 border-blue-500 p-5 rounded-md ml-2 hover:bg-blue-500' onClick={handleCLick}>Export Page</button>
    );
};

export default SubmitButton;
