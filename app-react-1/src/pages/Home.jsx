import React from "react";
import "../styles/pages.css";

export function Home() {
  const stats = [
    { label: "Total Users", value: "2,543", change: "+12%", trend: "up" },
    { label: "Active Today", value: "1,234", change: "+5%", trend: "up" },
    { label: "New This Week", value: "89", change: "+23%", trend: "up" },
    { label: "Pending Approval", value: "12", change: "-8%", trend: "down" },
  ];

  const recentActivity = [
    { user: "John Doe", action: "Created account", time: "2 minutes ago" },
    { user: "Jane Smith", action: "Updated profile", time: "15 minutes ago" },
    { user: "Bob Johnson", action: "Logged in", time: "1 hour ago" },
    { user: "Alice Williams", action: "Changed password", time: "2 hours ago" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">User Management Dashboard</h1>
          <p className="page-description">
            Monitor and manage user accounts, activities, and permissions
          </p>
        </div>
        <button className="btn btn-primary">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add User
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className={`stat-change ${stat.trend}`}>{stat.change}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="section-grid">
        <div className="card">
          <h3 className="card-title">Quick Actions</h3>
          <div className="action-list">
            <button className="action-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>View All Users</span>
            </button>
            <button className="action-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create New User</span>
            </button>
            <button className="action-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Export User Data</span>
            </button>
            <button className="action-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Manage Permissions</span>
            </button>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-avatar">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="activity-content">
                  <div className="activity-user">{activity.user}</div>
                  <div className="activity-action">{activity.action}</div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

