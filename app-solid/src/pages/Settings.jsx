import { createSignal } from "solid-js";
import "../styles/settings.css";

export function Settings() {
  const [emailNotifications, setEmailNotifications] = createSignal(true);
  const [pushNotifications, setPushNotifications] = createSignal(false);
  const [weeklyReports, setWeeklyReports] = createSignal(true);
  const [darkMode, setDarkMode] = createSignal(false);
  const [language, setLanguage] = createSignal("en");
  const [timezone, setTimezone] = createSignal("UTC");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div class="settings-container">
      <div class="settings-header">
        <div>
          <h1 class="settings-title">Settings</h1>
          <p class="settings-description">
            Manage your account preferences and application settings
          </p>
        </div>
        <button class="btn btn-primary" onClick={handleSave}>
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
          </svg>
          Save Changes
        </button>
      </div>

      {/* Settings Sections */}
      <div class="settings-grid">
        {/* Profile Section */}
        <div class="settings-card">
          <div class="card-header">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 class="card-title">Profile Information</h3>
          </div>
          <div class="card-content">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" value="John Doe" />
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-input" value="john@example.com" />
            </div>
            <div class="form-group">
              <label class="form-label">Bio</label>
              <textarea class="form-textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div class="settings-card">
          <div class="card-header">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h3 class="card-title">Notifications</h3>
          </div>
          <div class="card-content">
            <div class="toggle-group">
              <div class="toggle-info">
                <div class="toggle-label">Email Notifications</div>
                <div class="toggle-description">Receive email updates about your account</div>
              </div>
              <label class="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={emailNotifications()} 
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="toggle-group">
              <div class="toggle-info">
                <div class="toggle-label">Push Notifications</div>
                <div class="toggle-description">Receive push notifications on your devices</div>
              </div>
              <label class="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={pushNotifications()} 
                  onChange={(e) => setPushNotifications(e.target.checked)}
                />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="toggle-group">
              <div class="toggle-info">
                <div class="toggle-label">Weekly Reports</div>
                <div class="toggle-description">Get weekly summary of your activity</div>
              </div>
              <label class="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={weeklyReports()} 
                  onChange={(e) => setWeeklyReports(e.target.checked)}
                />
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div class="settings-card">
          <div class="card-header">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <h3 class="card-title">Appearance</h3>
          </div>
          <div class="card-content">
            <div class="toggle-group">
              <div class="toggle-info">
                <div class="toggle-label">Dark Mode</div>
                <div class="toggle-description">Use dark theme across the application</div>
              </div>
              <label class="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={darkMode()} 
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="form-group">
              <label class="form-label">Language</label>
              <select class="form-select" value={language()} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Timezone</label>
              <select class="form-select" value={timezone()} onChange={(e) => setTimezone(e.target.value)}>
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="CST">Central Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div class="settings-card">
          <div class="card-header">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 class="card-title">Security</h3>
          </div>
          <div class="card-content">
            <div class="form-group">
              <label class="form-label">Current Password</label>
              <input type="password" class="form-input" placeholder="Enter current password" />
            </div>
            <div class="form-group">
              <label class="form-label">New Password</label>
              <input type="password" class="form-input" placeholder="Enter new password" />
            </div>
            <div class="form-group">
              <label class="form-label">Confirm Password</label>
              <input type="password" class="form-input" placeholder="Confirm new password" />
            </div>
            <button class="btn btn-secondary">
              Change Password
            </button>
          </div>
        </div>

        {/* Privacy Section */}
        <div class="settings-card">
          <div class="card-header">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 class="card-title">Privacy</h3>
          </div>
          <div class="card-content">
            <div class="privacy-item">
              <div class="privacy-info">
                <div class="privacy-label">Profile Visibility</div>
                <div class="privacy-description">Control who can see your profile</div>
              </div>
              <select class="form-select">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            <div class="privacy-item">
              <div class="privacy-info">
                <div class="privacy-label">Activity Status</div>
                <div class="privacy-description">Show when you're active</div>
              </div>
              <select class="form-select">
                <option>Everyone</option>
                <option>Friends</option>
                <option>Nobody</option>
              </select>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div class="settings-card danger-card">
          <div class="card-header">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 class="card-title">Danger Zone</h3>
          </div>
          <div class="card-content">
            <div class="danger-item">
              <div>
                <div class="danger-label">Delete Account</div>
                <div class="danger-description">Permanently delete your account and all data</div>
              </div>
              <button class="btn btn-danger">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

