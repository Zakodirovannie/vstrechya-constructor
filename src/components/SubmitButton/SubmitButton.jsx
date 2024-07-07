// src/components/SubmitButton.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import {createExhibition} from "../../api/api.auth";

const SubmitButton = ({name}) => {
    const pageState = useSelector((state) => state.editor.page);

    const handleExport = async () => {
        try {
            if (!name || !pageState.rows) {
                console.error('Name and page state are required');
                return;
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('status', 0);
            const serializedPageState = JSON.stringify(pageState);
            formData.append('json_data', serializedPageState);
            console.log(formData.get('json_data'));
            //Отправляем данные на сервер
            const response = await createExhibition(formData);
            console.log('Page exported successfully:', response.data);
        } catch (error) {
            console.error('Error exporting the page:', error);
        }
    };

    return (
        <button className='border-2 border-beige p-5 rounded-md mr-2 hover:bg-beige transition ease-in-out delay-50' onClick={handleExport}>
            Сохранить
        </button>
    );
};

export default SubmitButton;
