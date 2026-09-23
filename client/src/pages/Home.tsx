import {
  FileText,
  Wallet,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("mysuite_user");
    localStorage.removeItem("mysuite_token");

    navigate("/login");
  };

  return (
    <div className="home-page">

      <div className="home-container">

        {/* WELCOME */}

        <section className="home-welcome">

          <div className="home-welcome-inner">

            <h1>
              Welcome Back! 👋
            </h1>

            <p>
              What would you like to do today?
            </p>

          </div>

        </section>

        {/* MODULES */}

        <section className="module-selection">

          {/* NOTES */}

          <article className="module-card notes-module">

            <div className="module-icon notes-icon">
              <FileText size={36} />
            </div>

            <h2>
              Notes
            </h2>

            <p>
              Write, organize and
              <br />
              manage your notes
            </p>

            <button
              onClick={() =>
                navigate("/notes")
              }
              className="module-button notes-button"
            >
              Go to Notes
            </button>

          </article>

          {/* EXPENSE TRACKER */}

          <article className="module-card expense-module">

            <div className="module-icon expense-icon">
              <Wallet size={36} />
            </div>

            <h2>
              Expense Tracker
            </h2>

            <p>
              Track your income,
              <br />
              expenses and budget
            </p>

            <button
              onClick={() =>
                navigate("/expenses")
              }
              className="module-button expense-button"
            >
              Go to Expense Tracker
            </button>

          </article>

        </section>

        {/* LOGOUT */}

        <button
          className="home-logout"
          onClick={logout}
        >
          <LogOut size={14} />

          Logout

        </button>

      </div>

    </div>
  );
}