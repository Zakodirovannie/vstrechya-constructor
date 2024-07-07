// src/features/editor/editorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // начальное состояние редактора
    page: {}
};

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        addField(state, action) {
            console.log(action.payload);
            const fieldValue = action.payload;
            if (fieldValue) {
                state.page['name'] = fieldValue;
            }
        }
    }
});

export const { setPage, addField } = editorSlice.actions;

export default editorSlice.reducer;
