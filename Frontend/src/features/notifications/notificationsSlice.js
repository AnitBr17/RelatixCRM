import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "notifications",
    initialState: { list: [] },
    reducers: {
        push: (s, a) => { s.list.push({ id: nanoid(), ...a.payload }); },
        remove: (s, a) => { s.list = s.list.filter(n => n.id !== a.payload); }
    }
});

export const { push, remove } = slice.actions;
export default slice.reducer;
