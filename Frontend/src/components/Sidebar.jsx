import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Item = ({ to, label, icon }) => (
    <NavLink to={to}
        className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-3 py-2.5 transition
       ${isActive ? "bg-brand-100 text-brand-800" : "hover:bg-slate-100"}`
        }>
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{label}</span>
    </NavLink>
);

export default function Sidebar() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    return (
        <aside className="bg-white border-r border-slate-200 p-4 space-y-3">
            <div className="px-2 py-3">
                <div className="text-2xl font-extrabold text-brand-700">Relatix CRM</div>
                <div className="text-xs text-slate-500">Interview Demo</div>
            </div>
            <nav className="space-y-1">
                <Item to="/" label="Dashboard" icon="📊" />
                <Item to="/leads" label="Leads" icon="👥" />
                <Item to="/activities" label="Activity" icon="📝" />
                <Item to="/settings" label="Settings" icon="⚙️" />
            </nav>
            <button
                className="btn-ghost w-full mt-6"
                onClick={() => { dispatch(logout()); nav("/login"); }}>
                Logout
            </button>
            <footer className="pt-10 text-xs text-slate-400">
                v1.0 • Frontend Only
            </footer>
        </aside>
    );
}
