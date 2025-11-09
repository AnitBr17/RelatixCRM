# 💼 Relatix CRM — Full Stack Application

A complete **Customer Relationship Management (CRM)** system built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It features user authentication, role-based access, lead management, analytics dashboards, and beautiful UI — ideal for interview demos and portfolio projects.

---

## 🚀 Tech Stack

| Layer | Technologies Used |
|--------|--------------------|
| **Frontend** | React.js, Redux Toolkit, Chart.js, React Router, Pure CSS (Tailwind-inspired) |
| **Backend** | Node.js, Express.js, MongoDB (Mongoose), JWT Authentication |
| **State & Auth** | Redux Toolkit + localStorage |
| **Charting & UI** | Chart.js + custom dashboard components |
| **Other Tools** | bcrypt, express-validator, dotenv, cors, helmet |

---

## 🏗️ Project Overview

### 🖥️ Frontend (React)

A clean and modern dashboard UI built with **React.js** and **Redux Toolkit**, featuring:
- Authentication (Signup + Login)
- Dashboard with KPI stats and charts
- Leads table with CRUD operations (localStorage-based)
- Activity timeline
- Responsive design using custom CSS (no Tailwind directives)

### ⚙️ Backend (Node.js + Express)

A secure and scalable API backend that handles:
- User authentication with JWT (Access + Refresh Tokens)
- Role-based access control (Admin, Manager, Sales)
- CRUD operations for leads
- Input validation and error handling
- MongoDB integration via Mongoose

---

## 📂 Folder Structure
relatix-crm/
├─ frontend/
│ ├─ src/
│ │ ├─ app/
│ │ ├─ components/
│ │ ├─ features/
│ │ ├─ pages/
│ │ ├─ utils/
│ │ ├─ data/
│ │ ├─ App.jsx
│ │ ├─ routes.jsx
│ │ └─ index.css
│ ├─ vite.config.js
│ ├─ tailwind.config.js
│ └─ package.json
│
├─ backend/
│ ├─ server.js
│ ├─ config/
│ │ └─ db.js
│ ├─ middleware/
│ ├─ models/
│ ├─ controllers/
│ ├─ routes/
│ ├─ utils/
│ ├─ package.json
│ └─ .env
│
└─ README.md
