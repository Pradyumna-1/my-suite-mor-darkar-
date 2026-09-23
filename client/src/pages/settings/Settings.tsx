import {
  Bell,
  Lock,
  Settings as SettingsIcon,
} from "lucide-react";

export default function Settings() {

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            <SettingsIcon size={20} />
            Settings
          </h1>

          <p>
            Configure your MySuite preferences.
          </p>

        </div>

      </div>

      <div className="settings-grid">

        <section className="card settings-card">

          <Bell />

          <div>

            <h2>
              Notifications
            </h2>

            <label>
              <input
                type="checkbox"
                defaultChecked
              />

              Low balance notifications
            </label>

            <label>
              <input
                type="checkbox"
                defaultChecked
              />

              Reminder notifications
            </label>

            <label>
              <input
                type="checkbox"
                defaultChecked
              />

              Monthly financial summary
            </label>

          </div>

        </section>

        <section className="card settings-card">

          <Lock />

          <div>

            <h2>
              Security
            </h2>

            <p>
              Password and account security
              settings.
            </p>

            <button className="secondary-button">
              Change Password
            </button>

          </div>

        </section>

      </div>

    </div>
  );
}