export default function Card({ title, children, action }) {
    return (
        <section className="card">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{title}</h3>
                {action}
            </div>
            {children}
        </section>
    );
}
