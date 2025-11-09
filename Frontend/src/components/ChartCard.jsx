import Card from "./card";
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
    ArcElement, Tooltip, Legend
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

export function LineChartCard({ title, labels, values }) {
    return (
        <Card title={title}>
            <Line data={{
                labels,
                datasets: [{ label: title, data: values, fill: false, tension: 0.35 }]
            }}
                options={{ plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false }}
            />
            <div className="h-2" />
        </Card>
    );
}

export function DoughnutCard({ title, labels, values }) {
    return (
        <Card title={title}>
            <Doughnut data={{ labels, datasets: [{ data: values }] }}
                options={{ plugins: { legend: { position: "bottom" } }, cutout: "60%" }}
            />
        </Card>
    );
}
