// Mock async helpers so the UI "feels" real
export const delay = (ms = 400) => new Promise(r => setTimeout(r, ms));

function readUsers() {
    const raw = localStorage.getItem("crm_users");
    const list = raw ? JSON.parse(raw) : [];
    // ensure a demo user exists for first run
    if (list.length === 0) {
        const demo = [{ id: "u-demo", name: "Demo User", email: "demo@relatix.com", password: "demo123", role: "Manager" }];
        localStorage.setItem("crm_users", JSON.stringify(demo));
        return demo;
    }
    return list;
}
function writeUsers(list) { localStorage.setItem("crm_users", JSON.stringify(list)); }

export async function signup({ name, email, password, role = "Manager" }) {
    await delay();
    const users = readUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        throw new Error("Email already registered");
    }
    const user = { id: crypto.randomUUID?.() ?? String(Date.now()), name, email, password, role };
    users.push(user);
    writeUsers(users);
    // return public profile (no password)
    const { password: _p, ...publicUser } = user;
    return publicUser;
}

export async function login({ email, password }) {
    await delay();
    const users = readUsers();
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!found || found.password !== password) throw new Error("Invalid email or password");
    const { password: _p, ...publicUser } = found;
    return publicUser;
}
