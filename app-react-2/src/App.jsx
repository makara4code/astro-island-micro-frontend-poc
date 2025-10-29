import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from "react-router";
import { Analytics } from "./pages/Analytics";
import { Reports } from "./pages/Reports";
import { Dashboard, DashboardOverview, DashboardMetrics, DashboardSettings } from "./pages/Dashboard";
import "./App.css";

const AppNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="app-nav">
      <div className="nav-brand">
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span className="nav-title">Analytics Hub</span>
      </div>
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${isActive("/") && !isActive("/reports") && !isActive("/dashboard") ? "active" : ""}`}
        >
          <svg className="nav-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analytics
        </Link>
        <Link
          to="/reports"
          className={`nav-link ${isActive("/reports") ? "active" : ""}`}
        >
          <svg className="nav-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Reports
        </Link>
        <Link
          to="/dashboard"
          className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
        >
          <svg className="nav-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/analytics">
      <div className="app-react-2">
        <AppNav />

        {/* Page Content with Routes */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />

            {/* Nested routes for Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<DashboardOverview />} />
              <Route path="metrics" element={<DashboardMetrics />} />
              <Route path="settings" element={<DashboardSettings />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
