import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("crm_user") || "null");

const slice = createSlice({
    name: "auth",
    initialState: { user: saved },
    reducers: {
        loginSuccess: (s, a) => {
            s.user = a.payload;
            localStorage.setItem("crm_user", JSON.stringify(s.user));
        },
        logout: (s) => {
            s.user = null;
            localStorage.removeItem("crm_user");
        }
    }
});

export const { loginSuccess, logout } = slice.actions;
export default slice.reducer;
