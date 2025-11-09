export const money = (n) => n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
export const dt = (s) => new Date(s).toLocaleString();
