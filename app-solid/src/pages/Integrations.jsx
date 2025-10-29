import { createSignal, For } from "solid-js";
import "../styles/settings.css";

export function Integrations() {
  const [integrations] = createSignal([
    {
      id: 1,
      name: "Slack",
      description: "Connect your workspace to receive notifications",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      connected: true,
      color: "#4A154B"
    },
    {
      id: 2,
      name: "GitHub",
      description: "Sync your repositories and track commits",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      connected: true,
      color: "#181717"
    },
    {
      id: 3,
      name: "Google Drive",
      description: "Access and manage your files",
      icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
      connected: false,
      color: "#4285F4"
    },
    {
      id: 4,
      name: "Stripe",
      description: "Process payments and manage subscriptions",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      connected: false,
      color: "#635BFF"
    },
    {
      id: 5,
      name: "Mailchimp",
      description: "Manage email campaigns and subscribers",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      connected: true,
      color: "#FFE01B"
    },
    {
      id: 6,
      name: "Zapier",
      description: "Automate workflows between apps",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      connected: false,
      color: "#FF4A00"
    },
    {
      id: 7,
      name: "Dropbox",
      description: "Store and share files in the cloud",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      connected: false,
      color: "#0061FF"
    },
    {
      id: 8,
      name: "Twilio",
      description: "Send SMS and make voice calls",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      connected: false,
      color: "#F22F46"
    }
  ]);

  const handleToggle = (id) => {
    alert(`Toggling integration ${id}`);
  };

  const handleConfigure = (id) => {
    alert(`Configuring integration ${id}`);
  };

  return (
    <div class="settings-container">
      <div class="settings-header">
        <div>
          <h1 class="settings-title">Integrations</h1>
          <p class="settings-description">
            Connect your favorite tools and services
          </p>
        </div>
        <button class="btn btn-primary">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Integration
        </button>
      </div>

      {/* Filter Tabs */}
      <div class="filter-tabs">
        <button class="filter-tab active">All</button>
        <button class="filter-tab">Connected</button>
        <button class="filter-tab">Available</button>
      </div>

      {/* Integrations Grid */}
      <div class="integrations-grid">
        <For each={integrations()}>
          {(integration) => (
            <div class="integration-card">
              <div class="integration-header">
                <div class="integration-icon" style={{ background: integration.color }}>
                  <svg fill="none" stroke="white" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d={integration.icon} />
                  </svg>
                </div>
                <div class="integration-status">
                  {integration.connected ? (
                    <span class="status-badge connected">
                      <span class="status-dot"></span>
                      Connected
                    </span>
                  ) : (
                    <span class="status-badge available">Available</span>
                  )}
                </div>
              </div>
              <div class="integration-content">
                <h3 class="integration-name">{integration.name}</h3>
                <p class="integration-description">{integration.description}</p>
              </div>
              <div class="integration-actions">
                {integration.connected ? (
                  <>
                    <button class="btn btn-secondary" onClick={() => handleConfigure(integration.id)}>
                      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Configure
                    </button>
                    <button class="btn btn-outline-danger" onClick={() => handleToggle(integration.id)}>
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button class="btn btn-primary full-width" onClick={() => handleToggle(integration.id)}>
                    Connect
                  </button>
                )}
              </div>
            </div>
          )}
        </For>
      </div>

      {/* API Keys Section */}
      <div class="api-section">
        <div class="api-header">
          <div>
            <h2 class="api-title">API Keys</h2>
            <p class="api-description">Manage your API keys for custom integrations</p>
          </div>
          <button class="btn btn-secondary">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 4v16m8-8H4" />
            </svg>
            Generate New Key
          </button>
        </div>
        <div class="api-list">
          <div class="api-item">
            <div class="api-info">
              <div class="api-name">Production API Key</div>
              <div class="api-key">sk_live_••••••••••••••••••••1234</div>
            </div>
            <div class="api-meta">
              <span class="api-date">Created: Jan 15, 2024</span>
              <span class="api-usage">Last used: 2 hours ago</span>
            </div>
            <div class="api-actions">
              <button class="btn-icon" title="Copy">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button class="btn-icon btn-danger" title="Revoke">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          <div class="api-item">
            <div class="api-info">
              <div class="api-name">Development API Key</div>
              <div class="api-key">sk_test_••••••••••••••••••••5678</div>
            </div>
            <div class="api-meta">
              <span class="api-date">Created: Dec 1, 2023</span>
              <span class="api-usage">Last used: 1 day ago</span>
            </div>
            <div class="api-actions">
              <button class="btn-icon" title="Copy">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button class="btn-icon btn-danger" title="Revoke">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

