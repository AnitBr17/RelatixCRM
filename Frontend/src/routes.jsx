import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function RoutesDef() {
    const { user } = useSelector(s => s.auth);
    const Guard = ({ children }) => user ? children : <Navigate to="/login" replace />;

    return (
        <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            <Route path="/" element={<Guard><Dashboard /></Guard>} />
            <Route path="/leads" element={<Guard><Leads /></Guard>} />
            <Route path="/activities" element={<Guard><Activities /></Guard>} />
            <Route path="/settings" element={<Guard><Settings /></Guard>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
