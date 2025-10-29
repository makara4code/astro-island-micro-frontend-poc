import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { UserDetail, UserProfile, UserActivity, UserPermissions, UserSettings } from "./pages/UserDetail";
import "./App.css";

const AppNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || (!location.pathname.includes("/"));
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="app-nav">
      <div className="nav-brand">
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="nav-title">User Management</span>
      </div>
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${isActive("/") && !location.pathname.match(/\/\d+/) ? "active" : ""}`}
        >
          <svg className="nav-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Users
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/users">
      <div className="app-react-1">
        <AppNav />

        {/* Page Content with Routes */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Users />} />

            {/* Nested routes for User Detail */}
            <Route path="/:userId" element={<UserDetail />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="activity" element={<UserActivity />} />
              <Route path="permissions" element={<UserPermissions />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
