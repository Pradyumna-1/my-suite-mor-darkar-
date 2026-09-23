import { Bell } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isNotes =
    location.pathname.startsWith("/notes");

  const isExpenses =
    location.pathname.startsWith("/expenses") ||
    location.pathname.startsWith("/transactions") ||
    location.pathname.startsWith("/income") ||
    location.pathname.startsWith("/budget") ||
    location.pathname.startsWith("/calendar") ||
    location.pathname.startsWith("/reminders");

  const logout = () => {
    localStorage.removeItem("mysuite_user");
    localStorage.removeItem("mysuite_token");

    navigate("/login");
  };

  return (
    <div className="mysuite-app">

      {/* TOP HEADER */}

      <header className="mysuite-header">

        <button
          className="brand"
          onClick={() => navigate("/")}
        >
          <div className="brand-icon">
            MS
          </div>

          <div className="brand-text">
            <strong>MySuite</strong>
            <span>Notes • Expenses</span>
          </div>
        </button>

        <div className="header-right">

          {(isNotes || isExpenses) && (
            <div className="header-search">
              <span>⌕</span>

              <input
                placeholder={
                  isNotes
                    ? "Search notes..."
                    : "Search transactions..."
                }
              />
            </div>
          )}

          <button className="header-icon">
            <Bell size={16} />
            <i />
          </button>

          <div className="header-user">

            <div className="header-avatar">
              P
            </div>

            <span>
              John Doe
            </span>

            <span className="header-arrow">
              ▾
            </span>

          </div>

        </div>

      </header>

      {/* CONTENT */}

      <main className="mysuite-content">
        <Outlet />
      </main>

    </div>
  );
}