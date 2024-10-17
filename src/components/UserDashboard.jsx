import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, LogOut, Edit2 } from 'lucide-react';
import './UserDashboard.css';
const StatCard = ({ title, value, icon }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div className="stat-content">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  </div>
);

const ActivityItem = ({ date, activity, points, status }) => (
  <div className="activity-item">
    <div className="activity-date">{date}</div>
    <div className="activity-details">
      <p className="activity-name">{activity}</p>
      <span className={`activity-status ${status.toLowerCase()}`}>{status}</span>
    </div>
    <div className="activity-points">+{points} tokens</div>
  </div>
);

const mockChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

export default function UserDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [profileImage, setProfileImage] = useState('./grey.png');

  const stats = [
    { title: "Total Tokens", value: "2,450", icon: "🪙" },
    { title: "Items Recycled", value: "143", icon: "♻️" },
    { title: "CO2 Reduced", value: "250kg", icon: "🌱" },
    { title: "Rewards Used", value: "12", icon: "🎁" }
  ];

  const recentActivity = [
    { date: "Oct 15, 2024", activity: "Recycled Electronics", points: 100, status: "Completed" },
    { date: "Oct 13, 2024", activity: "Plastic Waste Collection", points: 75, status: "Pending" },
    { date: "Oct 10, 2024", activity: "Purchased Eco Products", points: 50, status: "Completed" }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="dashboard-content">
            <section className="stats-grid">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </section>

            <section className="recent-activity">
              <div className="section-header">
                <h2>Recent Activity</h2>
                <button className="view-all">View All</button>
              </div>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
            </section>

            <section className="impact-chart">
              <div className="section-header">
                <h2>Environmental Impact</h2>
                <select className="time-filter">
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#10b981" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        );
      case 'activity':
        return (
          <div className="activity-content">
            <h2>Activity Log</h2>
            <div className="activity-list extended">
              {[...recentActivity, ...recentActivity].map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
            </div>
          </div>
        );
      case 'rewards':
        return (
          <div className="rewards-content">
            <h2>Available Rewards</h2>
            <div className="rewards-list">
              {[1, 2, 3].map((reward) => (
                <div key={reward} className="reward-item">
                  <img src={`./reward.png`} alt={`Reward ${reward}`} />
                  <h3>Eco Reward {reward}</h3>
                  <p>500 tokens</p>
                  <button className="claim-reward">Claim</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="settings-content">
            <section className="settings-section">
              <h2>Account Settings</h2>
              <form className="settings-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" defaultValue="Grey" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue="grey@example.com" />
                </div>
                <div className="form-group">
                  <label>Notification Preferences</label>
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" defaultChecked />
                      Email Notifications
                    </label>
                    <label>
                      <input type="checkbox" defaultChecked />
                      Mobile Notifications
                    </label>
                  </div>
                </div>
                <button type="submit" className="save-settings">
                  Save Changes
                </button>
              </form>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
            <button className="edit-profile"><Edit2 size={16} /></button>
          </div>
          <h2>Grey</h2>
          <p>Eco Warrior Level 5</p>
        </div>

        <nav className="dashboard-nav">
          {['overview', 'activity', 'rewards', 'settings'].map((section) => (
            <button 
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="help-button">
            Need Help? Contact Support
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-title">
            <h1>Welcome back, Grey!</h1>
            <p>Track your recycling impact and manage your rewards</p>
          </div>
          <div className="header-actions">
            <button className="notification-btn"><Bell size={20} /></button>
            <button className="logout-btn"><LogOut size={20} /> Logout</button>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}