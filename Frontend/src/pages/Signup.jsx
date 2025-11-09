import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../utils/fakeApi";
import { loginSuccess } from "../features/auth/authSlice";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true); setError("");
        try {
            const user = await signup({ name, email, password });
            // auto-login after successful signup
            dispatch(loginSuccess(user));
        } catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    return (
        <div className="min-h-screen grid place-items-center bg-gradient-to-br from-brand-50 to-white">
            <div className="card w-full max-w-md">
                <div className="text-2xl font-bold text-brand-700 mb-1">Create your account</div>
                <p className="text-slate-500 mb-4">It’s quick and free.</p>
                <form onSubmit={submit} className="space-y-3">
                    <input className="input" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                    <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <button className="btn w-full" disabled={loading || !name || !email || !password}>
                        {loading ? "Creating account…" : "Sign up"}
                    </button>
                </form>
                <div className="text-sm text-slate-600 mt-4">
                    Already have an account? <Link to="/login" className="text-brand-700 font-medium">Sign in</Link>
                </div>
            </div>
        </div>
    );
}
