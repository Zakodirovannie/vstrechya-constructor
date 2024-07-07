import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthSlice/AuthSlice'
import userReducer from './UserSlice/UserSlice'
import editorReducer from './EditorSlice/EditorSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    editor: editorReducer,
  },
})