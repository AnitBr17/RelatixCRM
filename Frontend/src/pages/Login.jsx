import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import { login } from "../utils/fakeApi";

export default function Login() {
    const [email, setEmail] = useState("demo@relatix.com");
    const [password, setPassword] = useState("demo123");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true); setError("");
        try {
            const user = await login({ email, password });
            dispatch(loginSuccess(user));
        } catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    return (
        <div className="min-h-screen grid place-items-center bg-gradient-to-br from-brand-50 to-white">
            <div className="card w-full max-w-md">
                <div className="text-2xl font-bold text-brand-700 mb-1">Relatix CRM</div>
                <p className="text-slate-500 mb-4">Sign in to continue</p>
                <form onSubmit={submit} className="space-y-3">
                    <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <button className="btn w-full" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>
                </form>
                <div className="text-sm text-slate-600 mt-4">
                    New here? <Link to="/signup" className="text-brand-700 font-medium">Create an account</Link>
                </div>
                <div className="text-xs text-slate-400 mt-2">Demo user: demo@relatix.com / demo123</div>
            </div>
        </div>
    );
}
