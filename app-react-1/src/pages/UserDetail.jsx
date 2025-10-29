import React from "react";
import { Outlet, Link, useParams, useLocation, useNavigate, useOutletContext } from "react-router";
import "../styles/pages.css";

// Mock user data
const getUserById = (id) => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastLogin: "2 hours ago", phone: "+1 234-567-8900", department: "Engineering", joinDate: "Jan 15, 2022" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", lastLogin: "1 day ago", phone: "+1 234-567-8901", department: "Marketing", joinDate: "Mar 22, 2022" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Active", lastLogin: "3 days ago", phone: "+1 234-567-8902", department: "Sales", joinDate: "May 10, 2022" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Manager", status: "Active", lastLogin: "5 hours ago", phone: "+1 234-567-8903", department: "HR", joinDate: "Feb 5, 2022" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Inactive", lastLogin: "2 weeks ago", phone: "+1 234-567-8904", department: "Support", joinDate: "Jun 18, 2022" },
    { id: 6, name: "Diana Prince", email: "diana@example.com", role: "Admin", status: "Active", lastLogin: "30 minutes ago", phone: "+1 234-567-8905", department: "Engineering", joinDate: "Jan 8, 2022" },
    { id: 7, name: "Ethan Hunt", email: "ethan@example.com", role: "User", status: "Active", lastLogin: "1 hour ago", phone: "+1 234-567-8906", department: "Operations", joinDate: "Apr 12, 2022" },
    { id: 8, name: "Fiona Green", email: "fiona@example.com", role: "Manager", status: "Active", lastLogin: "4 hours ago", phone: "+1 234-567-8907", department: "Finance", joinDate: "Mar 30, 2022" },
  ];
  return users.find(u => u.id === parseInt(id));
};

export const UserDetail = () => {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const user = getUserById(userId);

  if (!user) {
    return (
      <div className="page-container">
        <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
          <h2>User Not Found</h2>
          <p style={{ color: "#6b7280", marginTop: "1rem" }}>The user you're looking for doesn't exist.</p>
          <button className="btn btn-primary" onClick={() => navigate("/users")} style={{ marginTop: "1.5rem" }}>
            Back to Users
          </button>
        </div>
      </div>
    );
  }

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="page-container">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-secondary"
        style={{ marginBottom: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
      >
        <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Users
      </button>

      {/* User Header Card */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem" }}>
          <div className="user-avatar" style={{ width: "5rem", height: "5rem", fontSize: "2rem" }}>
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "0.5rem" }}>
              {user.name}
            </h1>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
              <span className={`badge badge-${user.role.toLowerCase()}`}>
                {user.role}
              </span>
              <span className={`status-badge ${user.status.toLowerCase()}`}>
                <span className="status-dot"></span>
                {user.status}
              </span>
              <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Last login: {user.lastLogin}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button className="btn btn-secondary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <nav style={{ 
          display: "flex", 
          gap: "0.5rem", 
          padding: "0.75rem 1rem",
          borderBottom: "1px solid #e5e7eb"
        }}>
          <Link
            to="profile"
            style={{
              padding: "0.625rem 1rem",
              textDecoration: "none",
              color: isActive("profile") ? "#3b82f6" : "#6b7280",
              fontWeight: isActive("profile") ? "600" : "500",
              borderBottom: isActive("profile") ? "2px solid #3b82f6" : "2px solid transparent",
              transition: "all 0.2s"
            }}
          >
            Profile
          </Link>
          <Link
            to="activity"
            style={{
              padding: "0.625rem 1rem",
              textDecoration: "none",
              color: isActive("activity") ? "#3b82f6" : "#6b7280",
              fontWeight: isActive("activity") ? "600" : "500",
              borderBottom: isActive("activity") ? "2px solid #3b82f6" : "2px solid transparent",
              transition: "all 0.2s"
            }}
          >
            Activity
          </Link>
          <Link
            to="permissions"
            style={{
              padding: "0.625rem 1rem",
              textDecoration: "none",
              color: isActive("permissions") ? "#3b82f6" : "#6b7280",
              fontWeight: isActive("permissions") ? "600" : "500",
              borderBottom: isActive("permissions") ? "2px solid #3b82f6" : "2px solid transparent",
              transition: "all 0.2s"
            }}
          >
            Permissions
          </Link>
          <Link
            to="settings"
            style={{
              padding: "0.625rem 1rem",
              textDecoration: "none",
              color: isActive("settings") ? "#3b82f6" : "#6b7280",
              fontWeight: isActive("settings") ? "600" : "500",
              borderBottom: isActive("settings") ? "2px solid #3b82f6" : "2px solid transparent",
              transition: "all 0.2s"
            }}
          >
            Settings
          </Link>
        </nav>

        {/* Nested Route Content */}
        <div style={{ padding: "1.5rem" }}>
          <Outlet context={{ user }} />
        </div>
      </div>
    </div>
  );
};

// Nested route components
export const UserProfile = () => {
  const { user } = useOutletContext();

  return (
    <div>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        Profile Information
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "0.5rem" }}>
            Full Name
          </label>
          <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "0.375rem", border: "1px solid #e5e7eb" }}>
            {user.name}
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "0.5rem" }}>
            Email Address
          </label>
          <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "0.375rem", border: "1px solid #e5e7eb" }}>
            {user.email}
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "0.5rem" }}>
            Phone Number
          </label>
          <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "0.375rem", border: "1px solid #e5e7eb" }}>
            {user.phone}
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "0.5rem" }}>
            Department
          </label>
          <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "0.375rem", border: "1px solid #e5e7eb" }}>
            {user.department}
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "0.5rem" }}>
            Role
          </label>
          <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "0.375rem", border: "1px solid #e5e7eb" }}>
            {user.role}
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "0.5rem" }}>
            Join Date
          </label>
          <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "0.375rem", border: "1px solid #e5e7eb" }}>
            {user.joinDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserActivity = () => {
  const activities = [
    { id: 1, action: "Logged in", timestamp: "2 hours ago", ip: "192.168.1.1" },
    { id: 2, action: "Updated profile", timestamp: "1 day ago", ip: "192.168.1.1" },
    { id: 3, action: "Changed password", timestamp: "3 days ago", ip: "192.168.1.2" },
    { id: 4, action: "Logged in", timestamp: "5 days ago", ip: "192.168.1.1" },
    { id: 5, action: "Uploaded document", timestamp: "1 week ago", ip: "192.168.1.3" },
  ];

  return (
    <div>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        Recent Activity
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {activities.map((activity) => (
          <div 
            key={activity.id}
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "1rem",
              background: "#f9fafb",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb"
            }}
          >
            <div>
              <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
                {activity.action}
              </div>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                IP: {activity.ip}
              </div>
            </div>
            <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              {activity.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const UserPermissions = () => {
  const permissions = [
    { id: 1, name: "View Dashboard", granted: true },
    { id: 2, name: "Edit Users", granted: true },
    { id: 3, name: "Delete Users", granted: false },
    { id: 4, name: "Manage Roles", granted: true },
    { id: 5, name: "View Reports", granted: true },
    { id: 6, name: "Export Data", granted: false },
  ];

  return (
    <div>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        User Permissions
      </h2>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {permissions.map((permission) => (
          <label 
            key={permission.id}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.75rem",
              padding: "1rem",
              background: "#f9fafb",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
              cursor: "pointer"
            }}
          >
            <input 
              type="checkbox" 
              defaultChecked={permission.granted}
              style={{ width: "1.25rem", height: "1.25rem" }}
            />
            <span style={{ fontWeight: "500" }}>{permission.name}</span>
          </label>
        ))}
      </div>
      <button className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
        Save Permissions
      </button>
    </div>
  );
};

export const UserSettings = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        Account Settings
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>
            Email Notifications
          </h3>
          <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <input type="checkbox" defaultChecked />
            <span>Receive email notifications</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <input type="checkbox" defaultChecked />
            <span>Weekly activity summary</span>
          </label>
        </div>
        
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>
            Security
          </h3>
          <button className="btn btn-secondary" style={{ marginBottom: "0.75rem" }}>
            Reset Password
          </button>
          <br />
          <button className="btn btn-secondary">
            Enable Two-Factor Authentication
          </button>
        </div>

        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#dc2626" }}>
            Danger Zone
          </h3>
          <button className="btn btn-danger">
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

