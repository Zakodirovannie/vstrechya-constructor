import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    image: '',
    isError: false,
  },
  reducers: {
    setImage(state, action) {
      state.image = action.payload
    },
    setError(state, action) {
        state.isError = action.payload;
    }
  },
})

export const {setError, setImage} = userSlice.actions
export default userSlice.reducer