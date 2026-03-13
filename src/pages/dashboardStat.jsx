// src/pages/dashboardStat.jsx
import React, { useState } from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiActivity,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/main.css";

const DashboardStat = () => {
  const statsData = [
    {
      id: 1,
      title: "Deep work hours",
      value: 125,
      change: +12,
      icon: <FiActivity />,
      color: "#4ade80",
    },
    {
      id: 2,
      title: "Sessions this week",
      value: 1205,
      change: +8,
      icon: <FiUsers />,
      color: "#60a5fa",
    },
    {
      id: 3,
      title: "Avg. session length",
      value: 48,
      change: -3,
      icon: <FiClock />,
      color: "#facc15",
    },
    {
      id: 4,
      title: "Goals completed",
      value: 234,
      change: +5,
      icon: <FiCheckCircle />,
      color: "#f97316",
    },
    {
      id: 5,
      title: "Distractions blocked",
      value: 567,
      change: +15,
      icon: <FiTrendingUp />,
      color: "#a855f7",
    },
  ];

  const chartData = [
    { name: "Mon", value: 65 },
    { name: "Tue", value: 85 },
    { name: "Wed", value: 45 },
    { name: "Thu", value: 95 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 55 },
    { name: "Sun", value: 40 },
  ];

  const initialActivities = [
    {
      id: 1,
      title: "Deep work: Strategy doc",
      category: "Deep work",
      time: "2 min ago",
      status: "completed",
    },
    {
      id: 2,
      title: "Blocked: Social media",
      category: "Distraction",
      time: "15 min ago",
      status: "completed",
    },
    {
      id: 3,
      title: "Planning: Sprint focus blocks",
      category: "Planning",
      time: "1 hour ago",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Deep work: Refactor auth flow",
      category: "Deep work",
      time: "3 hours ago",
      status: "completed",
    },
    {
      id: 5,
      title: "Goal created: Q2 focus target",
      category: "Goals",
      time: "yesterday",
      status: "pending",
    },
  ];

  const [activities] = useState(initialActivities);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...new Set(activities.map((a) => a.category))];

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || activity.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const statusColors = {
    completed: "#22c55e",
    pending: "#f97316",
    "in-progress": "#60a5fa",
  };

  return (
    <section
      className="section dashboard-section"
      id="dashboard"
      aria-labelledby="dashboard-heading"
    >
      <div className="container">
        <header className="section-header section-header-centered">
          <p className="section-kicker">Analytics</p>
          <h2 id="dashboard-heading" className="section-title">
            See every focus session in one calm dashboard.
          </h2>
          <p className="section-subtitle">
            Real-time charts and activity feeds make it easy to spot trends,
            celebrate streaks, and debug distraction patterns.
          </p>
        </header>

        <div className="dashboard-stats-grid">
          {statsData.map((stat) => (
            <article className="metric-card" key={stat.id}>
              <div
                className="metric-icon"
                style={{
                  backgroundColor: `${stat.color}22`,
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>
              <div className="metric-body">
                <p className="metric-label">{stat.title}</p>
                <div className="metric-main">
                  <span className="metric-value">
                    {stat.value.toLocaleString()}
                  </span>
                  <span
                    className={`metric-change ${
                      stat.change >= 0 ? "positive" : "negative"
                    }`}
                  >
                    {stat.change >= 0 ? "+" : ""}
                    {stat.change}%
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="dashboard-main-grid">
          <section className="panel">
            <header className="panel-header">
              <h3>Weekly focus activity</h3>
              <span className="panel-caption">Hours of deep work per day</span>
            </header>
            <div className="panel-body chart-panel">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      background: "#020617",
                      borderRadius: 10,
                      border: "1px solid #1e293b",
                      color: "#e5e7eb",
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#60a5fa"
                    radius={[8, 8, 0, 0]}
                    barSize={24}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="panel">
            <header className="panel-header">
              <h3>Recent activity</h3>
              <span className="panel-caption">
                Live feed of focus sessions and key events
              </span>
            </header>

            <div className="panel-toolbar">
              <div className="toolbar-search">
                <FiSearch className="toolbar-search-icon" />
                <input
                  type="text"
                  placeholder="Search activity…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="toolbar-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="activity-list">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <article className="activity-row" key={activity.id}>
                    <div className="activity-copy">
                      <h4>{activity.title}</h4>
                      <p>
                        {activity.category} • {activity.time}
                      </p>
                    </div>
                    <span
                      className="activity-status"
                      style={{
                        backgroundColor: `${statusColors[activity.status]}22`,
                        color: statusColors[activity.status],
                      }}
                    >
                      {activity.status}
                    </span>
                  </article>
                ))
              ) : (
                <div className="activity-empty">No activity found.</div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DashboardStat;