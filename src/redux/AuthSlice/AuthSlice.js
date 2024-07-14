import {createSlice} from '@reduxjs/toolkit'
import {getCookie} from "../../api/cookie";

const csrfToken = getCookie('csrftoken')

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: csrfToken !== null,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer