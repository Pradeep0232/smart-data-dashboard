import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/stats`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setStats(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch data.",err);
        setLoading(false);
      });
  }, []);

  const chartData = stats ? [
    {name: "Total Users", value:stats.totalUsers},
    {name:"Active Users", value:stats.activeUsers},
  ]:[];

  return (
    <div className="app">
      <h1>📊 Smart User Dashboard</h1>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {stats && (

        <>
        <div className="card-container">
          <div className="card">👥 Total Users: {stats.totalUsers}</div>
          <div className="card">🟢 Active Users: {stats.activeUsers}</div>
          <div className="card">💰 Revenue: ${stats.revenue}</div>
          <div className="card">⏱️ Avg. Session: {stats.avgSessionTime}</div>
        </div>

        

       <h2 style={{ marginTop: "50px" }}>📈 Engagement Chart</h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
