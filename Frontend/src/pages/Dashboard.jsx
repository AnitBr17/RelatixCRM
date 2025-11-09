import Card from "../components/card";
import { LineChartCard, DoughnutCard } from "../components/ChartCard";
import { kpi, revenueByMonth, statusBreakdown } from "../data/seed";
import { money } from "../utils/format";

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* KPI cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <div className="card">
                    <div className="text-slate-500 text-sm">MQL</div>
                    <div className="text-3xl font-extrabold">{kpi.mql}</div>
                </div>
                <div className="card">
                    <div className="text-slate-500 text-sm">SQL</div>
                    <div className="text-3xl font-extrabold">{kpi.sql}</div>
                </div>
                <div className="card">
                    <div className="text-slate-500 text-sm">Deals Won</div>
                    <div className="text-3xl font-extrabold">{kpi.won}</div>
                </div>
                <div className="card">
                    <div className="text-slate-500 text-sm">Revenue</div>
                    <div className="text-3xl font-extrabold">{money(kpi.revenue)}</div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                    <LineChartCard
                        title="Revenue (last 6 months)"
                        labels={revenueByMonth.map(d => d.m)}
                        values={revenueByMonth.map(d => d.v)}
                    />
                </div>
                <DoughnutCard
                    title="Lead Status"
                    labels={statusBreakdown.map(d => d.label)}
                    values={statusBreakdown.map(d => d.value)}
                />
            </div>

            {/* Mini activity panel */}
            <Card title="Quick Actions"
                action={<button className="btn">Create Lead</button>}
            >
                <p className="text-sm text-slate-600">
                    This is a frontend-only demo. Data persists in your browser (localStorage).
                </p>
            </Card>
        </div>
    );
}
