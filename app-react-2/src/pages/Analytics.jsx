import React from "react";
import "../styles/analytics.css";

export function Analytics() {
  const metrics = [
    { 
      label: "Total Revenue", 
      value: "$45,231", 
      change: "+20.1%", 
      trend: "up",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    { 
      label: "Active Users", 
      value: "2,543", 
      change: "+12.5%", 
      trend: "up",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    { 
      label: "Conversion Rate", 
      value: "3.24%", 
      change: "+4.3%", 
      trend: "up",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    { 
      label: "Avg. Session", 
      value: "4m 32s", 
      change: "-2.4%", 
      trend: "down",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
  ];

  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 78 },
    { month: "Mar", value: 72 },
    { month: "Apr", value: 85 },
    { month: "May", value: 92 },
    { month: "Jun", value: 88 },
  ];

  const topPages = [
    { page: "/dashboard", views: "12,543", bounce: "32%", time: "3m 24s" },
    { page: "/products", views: "8,234", bounce: "28%", time: "4m 12s" },
    { page: "/about", views: "5,432", bounce: "45%", time: "2m 08s" },
    { page: "/contact", views: "3,221", bounce: "52%", time: "1m 45s" },
    { page: "/blog", views: "2,876", bounce: "38%", time: "5m 32s" },
  ];

  const trafficSources = [
    { source: "Organic Search", percentage: 45, color: "#3b82f6" },
    { source: "Direct", percentage: 25, color: "#8b5cf6" },
    { source: "Social Media", percentage: 18, color: "#ec4899" },
    { source: "Referral", percentage: 12, color: "#10b981" },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <div>
          <h1 className="analytics-title">Analytics Dashboard</h1>
          <p className="analytics-description">
            Track your performance metrics and user behavior
          </p>
        </div>
        <div className="date-range">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Last 30 days</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={metric.icon} />
              </svg>
            </div>
            <div className="metric-content">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.trend}`}>
                <svg className="change-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={metric.trend === "up" ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
                </svg>
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Revenue Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Revenue Overview</h3>
            <select className="chart-select">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
              <option>This year</option>
            </select>
          </div>
          <div className="bar-chart">
            {chartData.map((data, index) => (
              <div key={index} className="bar-group">
                <div className="bar-container">
                  <div 
                    className="bar" 
                    style={{ height: `${(data.value / maxValue) * 100}%` }}
                  >
                    <span className="bar-value">${data.value}k</span>
                  </div>
                </div>
                <div className="bar-label">{data.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Traffic Sources</h3>
          </div>
          <div className="traffic-chart">
            {trafficSources.map((source, index) => (
              <div key={index} className="traffic-item">
                <div className="traffic-info">
                  <div className="traffic-dot" style={{ background: source.color }}></div>
                  <span className="traffic-source">{source.source}</span>
                </div>
                <div className="traffic-bar-container">
                  <div 
                    className="traffic-bar" 
                    style={{ width: `${source.percentage}%`, background: source.color }}
                  ></div>
                </div>
                <span className="traffic-percentage">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages Table */}
      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Top Pages</h3>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="table-container">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Page Views</th>
                <th>Bounce Rate</th>
                <th>Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page, index) => (
                <tr key={index}>
                  <td className="page-cell">{page.page}</td>
                  <td className="views-cell">{page.views}</td>
                  <td>
                    <div className="bounce-rate">
                      <div className="bounce-bar">
                        <div 
                          className="bounce-fill" 
                          style={{ width: page.bounce }}
                        ></div>
                      </div>
                      <span>{page.bounce}</span>
                    </div>
                  </td>
                  <td className="time-cell">{page.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

