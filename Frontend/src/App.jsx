import { useSelector } from "react-redux";
import RoutesDef from "./routes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function App(){
  const { user } = useSelector(s=>s.auth);
  const authed = !!user;

  if(!authed) return <RoutesDef />; // shows Login route only

  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <Sidebar/>
      <div className="flex flex-col">
        <Header/>
        <main className="p-6 space-y-6 bg-slate-50 flex-1">
          <RoutesDef />
        </main>
      </div>
    </div>
  );
}
