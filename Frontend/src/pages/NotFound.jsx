import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="min-h-[60vh] grid place-items-center">
            <div className="text-center space-y-2">
                <div className="text-6xl">🔎</div>
                <h1 className="text-2xl font-bold">Page not found</h1>
                <Link to="/" className="btn">Back to Dashboard</Link>
            </div>
        </div>
    );
}
