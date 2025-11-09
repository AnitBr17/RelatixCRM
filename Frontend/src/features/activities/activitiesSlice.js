import { createSlice, nanoid } from "@reduxjs/toolkit";
import { seedActivities } from "../../data/seed";

const persisted = JSON.parse(localStorage.getItem("crm_acts") || "null") ?? seedActivities;

const slice = createSlice({
    name: "activities",
    initialState: { list: persisted },
    reducers: {
        logNote: {
            reducer: (s, a) => {
                s.list.unshift(a.payload);
                localStorage.setItem("crm_acts", JSON.stringify(s.list));
            },
            prepare: (data) => ({ payload: { id: nanoid(), type: "note", createdAt: new Date().toISOString(), ...data } })
        },
        logStatus: (s, a) => {
            s.list.unshift({ id: nanoid(), type: "status", createdAt: new Date().toISOString(), ...a.payload });
            localStorage.setItem("crm_acts", JSON.stringify(s.list));
        }
    }
});

export const { logNote, logStatus } = slice.actions;
export default slice.reducer;
