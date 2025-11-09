import { useDispatch, useSelector } from "react-redux";
import { deleteLead, setFilter, setSearch, updateLead, addLead } from "../features/leads/leadsSlice";
import { dt, money } from "../utils/format";
import { useState } from "react";

export default function LeadTable() {
    const dispatch = useDispatch();
    const { list, filter, search } = useSelector(s => s.leads);
    const [creating, setCreating] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", value: 0, owner: "You" });

    const filtered = list.filter(l => {
        const fOk = filter === "all" || l.status === filter;
        const q = search.toLowerCase();
        const sOk = [l.name, l.email, l.owner, l.status].some(x => String(x).toLowerCase().includes(q));
        return fOk && sOk;
    });

    return (
        <div className="card">
            <div className="flex flex-wrap items-center gap-2 mb-3">
                <select className="input w-40" value={filter} onChange={e => dispatch(setFilter(e.target.value))}>
                    <option value="all">All statuses</option>
                    <option>New</option><option>Qualified</option>
                    <option>Negotiation</option><option>Won</option><option>Lost</option>
                </select>
                <input className="input flex-1" placeholder="Search leads…" value={search}
                    onChange={e => dispatch(setSearch(e.target.value))} />
                <button className="btn" onClick={() => setCreating(true)}>+ Add Lead</button>
            </div>

            <div className="overflow-auto">
                <table className="min-w-full text-sm">
                    <thead className="text-left text-slate-500 border-b">
                        <tr><th className="py-2 pr-3">Lead</th><th className="py-2 pr-3">Owner</th>
                            <th className="py-2 pr-3">Value</th><th className="py-2 pr-3">Status</th>
                            <th className="py-2 pr-3">Created</th><th className="py-2">Actions</th></tr>
                    </thead>
                    <tbody>
                        {filtered.map(l => (
                            <tr key={l.id} className="border-b last:border-0">
                                <td className="py-3 pr-3">
                                    <div className="font-medium">{l.name}</div>
                                    <div className="text-xs text-slate-500">{l.email}</div>
                                </td>
                                <td className="py-3 pr-3">{l.owner}</td>
                                <td className="py-3 pr-3">{money(l.value)}</td>
                                <td className="py-3 pr-3">
                                    <select className="input w-40" value={l.status}
                                        onChange={e => dispatch(updateLead({ id: l.id, status: e.target.value }))}>
                                        {["New", "Qualified", "Negotiation", "Won", "Lost"].map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </td>
                                <td className="py-3 pr-3">{dt(l.createdAt)}</td>
                                <td className="py-3">
                                    <button className="btn-ghost" onClick={() => dispatch(deleteLead(l.id))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan={6} className="py-10 text-center text-slate-400">No leads match.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Create Lead modal */}
            {creating && (
                <div className="fixed inset-0 bg-black/30 grid place-items-center p-6">
                    <div className="card w-full max-w-lg">
                        <h3 className="font-semibold mb-4">Add Lead</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <input className="input" placeholder="Company name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                            <input className="input" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                            <div className="grid grid-cols-2 gap-3">
                                <input className="input" placeholder="Owner" value={form.owner} onChange={e => setForm(f => ({ ...f, owner: e.target.value }))} />
                                <input className="input" type="number" placeholder="Value" value={form.value} onChange={e => setForm(f => ({ ...f, value: Number(e.target.value) }))} />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-5">
                            <button className="btn-ghost" onClick={() => setCreating(false)}>Cancel</button>
                            <button className="btn" onClick={() => {
                                if (!form.name || !form.email) return;
                                dispatch(addLead(form)); setCreating(false); setForm({ name: "", email: "", value: 0, owner: "You" });
                            }}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
