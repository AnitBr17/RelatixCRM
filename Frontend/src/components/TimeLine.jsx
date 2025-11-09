import { useSelector } from "react-redux";
import { dt } from "../utils/format";

export default function Timeline() {
    const list = useSelector(s => s.activities.list);
    return (
        <ul className="card divide-y">
            {list.map(i => (
                <li key={i.id} className="py-3 flex items-start gap-3">
                    <span className="text-xl">{i.type === "status" ? "🔔" : "📝"}</span>
                    <div>
                        <div className="text-sm">
                            <span className="font-medium">{i.actor}</span>: {i.text}
                        </div>
                        <div className="text-xs text-slate-500">{dt(i.createdAt)}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
