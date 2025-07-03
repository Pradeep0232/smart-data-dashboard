
# 🚀 Smart Data Dashboard

A full-stack data dashboard built using **React.js**, **FastAPI**, and **PySpark**, designed to analyze and visualize user behavior and performance metrics in real-time from a CSV dataset.

---

## 🧠 Features

- 📊 Displays key user insights:
  - Total Users
  - Active Users
  - Total Revenue
  - Average Session Time
- 📈 Interactive bar chart visualization using Recharts
- ⚡ FastAPI backend with PySpark to process big data efficiently
- 🌐 CORS-enabled communication between frontend and backend
- 🔄 Responsive, clean, and modern UI

---

## 🛠️ Tech Stack

| Frontend  | Backend   | Data Processing |
|-----------|-----------|-----------------|
| React.js  | FastAPI   | PySpark         |
| Vite      | Uvicorn   | CSV Input       |
| Recharts  | CORS      |                 |

---

## 🧪 How to Run the Project Locally

### 🔧 1. Clone the Repo

```bash
git clone https://github.com/pradeep0232/smart-data-dashboard.git
cd smart-data-dashboard
```

### 🚀 2. Run Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # For Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

> Make sure your CSV file is placed in: `backend/data/user_data.csv`

### 💻 3. Run Frontend

```bash
cd ../frontend
npm install
npm run dev
```

> Access the app at: [http://localhost:5173](http://localhost:5173)

---

## 📷 Screenshot

![Smart Data Dashboard Preview](dashboard-preview.png.png)

---

## 📬 Contact

Built with ❤️ by [Pradeep Kumar](https://github.com/pradeep0232)
