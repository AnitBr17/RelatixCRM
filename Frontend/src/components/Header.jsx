import { useSelector } from "react-redux";

export default function Header() {
    const { user } = useSelector(s => s.auth);
    return (
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="font-semibold">Welcome back, {user?.name} 👋</div>
            <div className="flex items-center gap-3">
                <input className="input w-64" placeholder="Search… (UI only)" />
                <div className="w-9 h-9 rounded-full bg-brand-600 text-white grid place-items-center font-bold">
                    {user?.name?.[0] ?? "U"}
                </div>
            </div>
        </header>
    );
}
