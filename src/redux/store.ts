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

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']