// src/components/SubmitButton.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addField} from "../../redux/EditorSlice/EditorSlice";
import {createExhibition} from "../../api/api.auth";

const SubmitButton = ({name}) => {
    const pageState = useSelector((state) => state.editor.page);
    const dispatch = useDispatch();

    const handleExport = async () => {
        try {
            if (!name){
                return
            }
            dispatch(addField(name));
            //Отправляем данные на сервер
            const response = await createExhibition(pageState)
            console.log('Page exported successfully:', response.data);
        } catch (error) {
            console.error('Error exporting the page:', error);
        }
    };

    return (
        <button className='border-2 border-beige p-5 rounded-md mr-2 hover:bg-beige transition ease-in-out delay-50' onClick={handleExport}>Export Page</button>
    );
};

export default SubmitButton;
