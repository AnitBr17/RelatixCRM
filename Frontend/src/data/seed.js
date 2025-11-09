export const seedLeads = [
    { id: "l1", name: "Acme Corp", owner: "Priya", email: "contact@acme.com", value: 12000, status: "New", createdAt: "2025-02-10T09:00:00Z" },
    { id: "l2", name: "Globex", owner: "Rohit", email: "info@globex.com", value: 35000, status: "Qualified", createdAt: "2025-03-02T10:00:00Z" },
    { id: "l3", name: "Initech", owner: "Aisha", email: "hello@initech.com", value: 8000, status: "Won", createdAt: "2025-03-19T08:23:00Z" },
];

export const seedActivities = [
    { id: "a1", type: "note", leadId: "l1", text: "Intro call done. Send deck.", createdAt: "2025-03-20T12:00:00Z", actor: "Priya" },
    { id: "a2", type: "status", leadId: "l2", text: "Moved to Qualified", createdAt: "2025-03-21T16:42:00Z", actor: "Rohit" },
];

export const kpi = { mql: 94, sql: 41, won: 12, revenue: 145000 };
export const revenueByMonth = [
    { m: "Jan", v: 12000 }, { m: "Feb", v: 18000 }, { m: "Mar", v: 24000 }, { m: "Apr", v: 28000 },
    { m: "May", v: 30000 }, { m: "Jun", v: 33000 }
];
export const statusBreakdown = [
    { label: "New", value: 38 }, { label: "Qualified", value: 27 },
    { label: "Negotiation", value: 16 }, { label: "Won", value: 12 }, { label: "Lost", value: 7 }
];
