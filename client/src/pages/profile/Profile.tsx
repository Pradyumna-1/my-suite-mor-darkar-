import {
  Mail,
  User,
} from "lucide-react";

export default function Profile() {

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            Profile
          </h1>

          <p>
            Manage your MySuite profile.
          </p>

        </div>

      </div>

      <section className="card profile-card">

        <div className="profile-avatar">
          P
        </div>

        <div className="profile-info">

          <h2>
            Pradyumna Kumar Naik
          </h2>

          <p>
            <Mail size={14} />
            demo@mysuite.local
          </p>

          <p>
            <User size={14} />
            MySuite User
          </p>

        </div>

        <button className="secondary-button">
          Edit Profile
        </button>

      </section>

    </div>
  );
}