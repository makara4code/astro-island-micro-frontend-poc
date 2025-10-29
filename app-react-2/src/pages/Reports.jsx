import React, { useState } from "react";
import "../styles/analytics.css";

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const reports = [
    {
      title: "Sales Report",
      description: "Comprehensive sales analysis and trends",
      lastGenerated: "2 hours ago",
      type: "PDF",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "User Activity Report",
      description: "Detailed user engagement metrics",
      lastGenerated: "5 hours ago",
      type: "Excel",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Revenue Analysis",
      description: "Monthly revenue breakdown and forecasts",
      lastGenerated: "1 day ago",
      type: "PDF",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Performance Metrics",
      description: "System and application performance data",
      lastGenerated: "3 hours ago",
      type: "CSV",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Customer Insights",
      description: "Customer behavior and preferences analysis",
      lastGenerated: "6 hours ago",
      type: "PDF",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: "Marketing Campaign",
      description: "Campaign performance and ROI analysis",
      lastGenerated: "12 hours ago",
      type: "Excel",
      icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
    },
  ];

  const scheduledReports = [
    { name: "Weekly Sales Summary", frequency: "Every Monday", nextRun: "In 2 days" },
    { name: "Monthly Analytics", frequency: "1st of each month", nextRun: "In 15 days" },
    { name: "Daily User Activity", frequency: "Every day at 9 AM", nextRun: "Tomorrow" },
  ];

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <div>
          <h1 className="analytics-title">Reports</h1>
          <p className="analytics-description">
            Generate and download comprehensive business reports
          </p>
        </div>
        <button className="btn btn-primary">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Report
        </button>
      </div>

      {/* Period Selector */}
      <div className="period-selector">
        <button 
          className={`period-btn ${selectedPeriod === "day" ? "active" : ""}`}
          onClick={() => setSelectedPeriod("day")}
        >
          Daily
        </button>
        <button 
          className={`period-btn ${selectedPeriod === "week" ? "active" : ""}`}
          onClick={() => setSelectedPeriod("week")}
        >
          Weekly
        </button>
        <button 
          className={`period-btn ${selectedPeriod === "month" ? "active" : ""}`}
          onClick={() => setSelectedPeriod("month")}
        >
          Monthly
        </button>
        <button 
          className={`period-btn ${selectedPeriod === "year" ? "active" : ""}`}
          onClick={() => setSelectedPeriod("year")}
        >
          Yearly
        </button>
      </div>

      {/* Reports Grid */}
      <div className="reports-grid">
        {reports.map((report, index) => (
          <div key={index} className="report-card">
            <div className="report-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={report.icon} />
              </svg>
            </div>
            <div className="report-content">
              <h3 className="report-title">{report.title}</h3>
              <p className="report-description">{report.description}</p>
              <div className="report-meta">
                <span className="report-type">{report.type}</span>
                <span className="report-time">Generated {report.lastGenerated}</span>
              </div>
            </div>
            <div className="report-actions">
              <button className="btn-icon" title="Download">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button className="btn-icon" title="Share">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="btn-icon" title="Regenerate">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Scheduled Reports */}
      <div className="scheduled-section">
        <h2 className="section-title">Scheduled Reports</h2>
        <div className="scheduled-list">
          {scheduledReports.map((report, index) => (
            <div key={index} className="scheduled-item">
              <div className="scheduled-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="scheduled-content">
                <div className="scheduled-name">{report.name}</div>
                <div className="scheduled-frequency">{report.frequency}</div>
              </div>
              <div className="scheduled-next">
                <span className="next-label">Next run:</span>
                <span className="next-time">{report.nextRun}</span>
              </div>
              <button className="btn-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

