import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: 0,
        name: "John Doe",
        email: "john@gmail.com",
    },
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.id = 0;
            state.name = "";
            state.email = "";
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;