import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    id: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email
            state.id = action.payload.id
        }
    }
})

export const userReducer = userSlice.reducer
export const { login } = userSlice.actions