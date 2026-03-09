import React, { useState } from 'react';
import { FiSearch, FiTrendingUp, FiUsers, FiCheckCircle, FiClock, FiActivity } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const DashboardStat = () => {
  // Statistik ma'lumotlar
  const statsData = [
    { id: 1, title: 'Lorem ipsum', value: 125, change: +12, icon: <FiActivity />, color: '#3b82f6' },
    { id: 2, title: 'Adipiscing', value: 1205, change: +8, icon: <FiUsers />, color: '#10b981' },
    { id: 3, title: 'Consectetuer', value: 840, change: -3, icon: <FiCheckCircle />, color: '#f59e0b' },
    { id: 4, title: 'Suscipit', value: 234, change: +5, icon: <FiClock />, color: '#8b5cf6' },
    { id: 5, title: 'Dolor sit amet', value: 567, change: +15, icon: <FiTrendingUp />, color: '#ec4899' },
  ];

  // Grafik ma'lumotlari (haftalik faollik)
  const chartData = [
    { name: 'Mon', value: 65 },
    { name: 'Tue', value: 85 },
    { name: 'Wed', value: 45 },
    { name: 'Thu', value: 95 },
    { name: 'Fri', value: 70 },
    { name: 'Sat', value: 55 },
    { name: 'Sun', value: 40 },
  ];

  // Ma'lumotlar ro‘yxati (so‘nggi faoliyatlar)
  const initialActivities = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', category: 'Adipiscing', time: '2 min ago', status: 'completed' },
    { id: 2, title: 'Consectetuer adipiscing elit', category: 'Suscipit', time: '15 min ago', status: 'pending' },
    { id: 3, title: 'Duis autem vel eum iriure', category: 'Dolor', time: '1 hour ago', status: 'in-progress' },
    { id: 4, title: 'Ut wisi enim ad minim veniam', category: 'Adipiscing', time: '3 hours ago', status: 'completed' },
    { id: 5, title: 'Nam liber tempor cum soluta', category: 'Consectetuer', time: 'yesterday', status: 'pending' },
    { id: 6, title: 'Claritas est etiam processus', category: 'Suscipit', time: 'yesterday', status: 'completed' },
    { id: 7, title: 'Mirum est notare quam littera', category: 'Dolor', time: '2 days ago', status: 'in-progress' },
  ];

  const [activities, setActivities] = useState(initialActivities);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Qidiruv va kategorya bo‘yicha filterlash
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          activity.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || activity.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Kategoryalar ro‘yxati (filter uchun)
  const categories = ['All', ...new Set(activities.map(a => a.category))];

  // Status ranglari
  const statusColors = {
    completed: '#10b981',
    pending: '#f59e0b',
    'in-progress': '#3b82f6',
  };

  return (
    <section className="dashboard-stat">
      <div className="dashboard-container">
        <h2 className="dashboard-title">
          Dashboard <span className="highlight">Statistics</span>
        </h2>

        {/* Statistik kartochkalar */}
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3>{stat.title}</h3>
                <div className="stat-value">
                  <span className="number">{stat.value.toLocaleString()}</span>
                  <span className={`change ${stat.change >= 0 ? 'positive' : 'negative'}`}>
                    {stat.change >= 0 ? '+' : ''}{stat.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grafik va qidiruv qismi */}
        <div className="dashboard-main">
          <div className="chart-section">
            <h3>Weekly Activity</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="activity-section">
            <h3>Recent Activities</h3>
            
            {/* Qidiruv va filter */}
            <div className="search-filter">
              <div className="search-box">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="category-filter"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Ma'lumotlar ro‘yxati */}
            <div className="activity-list">
              {filteredActivities.length > 0 ? (
                filteredActivities.map(activity => (
                  <div className="activity-item" key={activity.id}>
                    <div className="activity-info">
                      <h4>{activity.title}</h4>
                      <p>{activity.category} • {activity.time}</p>
                    </div>
                    <span
                      className="activity-status"
                      style={{ background: `${statusColors[activity.status]}20`, color: statusColors[activity.status] }}
                    >
                      {activity.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="no-results">No activities found</div>
              )}
            </div>
          </div>
        </div>

        {/* Qo‘shimcha statistik bloklar (rasmdagi qo‘shimcha matnlar) */}
        <div className="additional-stats">
          <div className="stat-block">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <span className="stat-badge">+245</span>
          </div>
          <div className="stat-block">
            <h4>Adipiscing</h4>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.</p>
            <span className="stat-badge">1205</span>
          </div>
          <div className="stat-block">
            <h4>Consectetuer</h4>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <span className="stat-badge">840</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardStat;