import { createSlice, nanoid } from "@reduxjs/toolkit";
import { seedLeads } from "../../data/seed";

const persisted = JSON.parse(localStorage.getItem("crm_leads") || "null") ?? seedLeads;

const slice = createSlice({
    name: "leads",
    initialState: { list: persisted, filter: "all", search: "" },
    reducers: {
        addLead: {
            reducer: (s, a) => {
                s.list.unshift(a.payload);
                localStorage.setItem("crm_leads", JSON.stringify(s.list));
            },
            prepare: (lead) => ({ payload: { id: nanoid(), status: "New", ...lead, createdAt: new Date().toISOString() } })
        },
        updateLead: (s, a) => {
            const i = s.list.findIndex(l => l.id === a.payload.id);
            if (i > -1) s.list[i] = { ...s.list[i], ...a.payload };
            localStorage.setItem("crm_leads", JSON.stringify(s.list));
        },
        deleteLead: (s, a) => {
            s.list = s.list.filter(l => l.id !== a.payload);
            localStorage.setItem("crm_leads", JSON.stringify(s.list));
        },
        setFilter: (s, a) => { s.filter = a.payload; },
        setSearch: (s, a) => { s.search = a.payload; }
    }
});

export const { addLead, updateLead, deleteLead, setFilter, setSearch } = slice.actions;
export default slice.reducer;
