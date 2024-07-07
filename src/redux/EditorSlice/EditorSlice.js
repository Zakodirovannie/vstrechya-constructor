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
        updatePage(state, action) {
            state.page = { ...state.page, ...action.payload };
        }
    }
});

export const { setPage, updatePage } = editorSlice.actions;

export default editorSlice.reducer;
