import React from "react";
import { Outlet, Link, useLocation } from "react-router";

export const Dashboard = () => {
  const location = useLocation();

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        Dashboard
      </h2>
      
      {/* Sub-navigation */}
      <nav style={{ 
        display: "flex", 
        gap: "1rem", 
        marginBottom: "2rem",
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "1rem"
      }}>
        <Link 
          to="overview"
          style={{
            padding: "0.5rem 1rem",
            textDecoration: "none",
            color: location.pathname.includes("overview") ? "#3b82f6" : "#6b7280",
            fontWeight: location.pathname.includes("overview") ? "600" : "500",
            borderBottom: location.pathname.includes("overview") ? "2px solid #3b82f6" : "none"
          }}
        >
          Overview
        </Link>
        <Link 
          to="metrics"
          style={{
            padding: "0.5rem 1rem",
            textDecoration: "none",
            color: location.pathname.includes("metrics") ? "#3b82f6" : "#6b7280",
            fontWeight: location.pathname.includes("metrics") ? "600" : "500",
            borderBottom: location.pathname.includes("metrics") ? "2px solid #3b82f6" : "none"
          }}
        >
          Metrics
        </Link>
        <Link 
          to="settings"
          style={{
            padding: "0.5rem 1rem",
            textDecoration: "none",
            color: location.pathname.includes("settings") ? "#3b82f6" : "#6b7280",
            fontWeight: location.pathname.includes("settings") ? "600" : "500",
            borderBottom: location.pathname.includes("settings") ? "2px solid #3b82f6" : "none"
          }}
        >
          Settings
        </Link>
      </nav>

      {/* Nested route content will render here */}
      <Outlet />
    </div>
  );
};

// Nested route components
export const DashboardOverview = () => (
  <div style={{ 
    background: "#fff", 
    padding: "1.5rem", 
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb"
  }}>
    <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
      Overview
    </h3>
    <p style={{ color: "#6b7280" }}>
      This is the dashboard overview page. It shows a summary of all your metrics.
    </p>
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(3, 1fr)", 
      gap: "1rem",
      marginTop: "1.5rem"
    }}>
      <div style={{ 
        background: "#f9fafb", 
        padding: "1rem", 
        borderRadius: "0.5rem",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "2rem", fontWeight: "700", color: "#3b82f6" }}>
          1,234
        </div>
        <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
          Total Users
        </div>
      </div>
      <div style={{ 
        background: "#f9fafb", 
        padding: "1rem", 
        borderRadius: "0.5rem",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "2rem", fontWeight: "700", color: "#8b5cf6" }}>
          567
        </div>
        <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
          Active Sessions
        </div>
      </div>
      <div style={{ 
        background: "#f9fafb", 
        padding: "1rem", 
        borderRadius: "0.5rem",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "2rem", fontWeight: "700", color: "#10b981" }}>
          89%
        </div>
        <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
          Success Rate
        </div>
      </div>
    </div>
  </div>
);

export const DashboardMetrics = () => (
  <div style={{ 
    background: "#fff", 
    padding: "1.5rem", 
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb"
  }}>
    <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
      Detailed Metrics
    </h3>
    <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
      View detailed performance metrics and analytics data.
    </p>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
          <th style={{ padding: "0.75rem", textAlign: "left", fontSize: "0.875rem", color: "#6b7280" }}>
            Metric
          </th>
          <th style={{ padding: "0.75rem", textAlign: "left", fontSize: "0.875rem", color: "#6b7280" }}>
            Value
          </th>
          <th style={{ padding: "0.75rem", textAlign: "left", fontSize: "0.875rem", color: "#6b7280" }}>
            Change
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
          <td style={{ padding: "0.75rem" }}>Page Views</td>
          <td style={{ padding: "0.75rem", fontWeight: "600" }}>45,231</td>
          <td style={{ padding: "0.75rem", color: "#10b981" }}>+12.5%</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
          <td style={{ padding: "0.75rem" }}>Bounce Rate</td>
          <td style={{ padding: "0.75rem", fontWeight: "600" }}>32.4%</td>
          <td style={{ padding: "0.75rem", color: "#ef4444" }}>-2.1%</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
          <td style={{ padding: "0.75rem" }}>Avg. Session</td>
          <td style={{ padding: "0.75rem", fontWeight: "600" }}>4m 32s</td>
          <td style={{ padding: "0.75rem", color: "#10b981" }}>+8.3%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const DashboardSettings = () => (
  <div style={{ 
    background: "#fff", 
    padding: "1.5rem", 
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb"
  }}>
    <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
      Dashboard Settings
    </h3>
    <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
      Configure your dashboard preferences and display options.
    </p>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input type="checkbox" defaultChecked />
        <span>Show real-time updates</span>
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input type="checkbox" defaultChecked />
        <span>Enable notifications</span>
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input type="checkbox" />
        <span>Dark mode</span>
      </label>
      <div style={{ marginTop: "1rem" }}>
        <button style={{
          padding: "0.625rem 1.25rem",
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: "0.375rem",
          fontWeight: "500",
          cursor: "pointer"
        }}>
          Save Settings
        </button>
      </div>
    </div>
  </div>
);

