import {
  FileText,
  Wallet,
  TrendingUp,
  TrendingDown,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const notes = [
  {
    title: "Meeting Notes - Project X",
    description:
      "Discussed the project roadmap and features.",
    date: "May 18, 2025",
    color: "purple",
  },
  {
    title: "Daily Thoughts",
    description:
      "A place to write down my daily thoughts and reflections.",
    date: "May 17, 2025",
    color: "yellow",
  },
  {
    title: "Ideas for Mobile App",
    description:
      "Some innovative ideas for the new application.",
    date: "May 16, 2025",
    color: "green",
  },
];

export default function Dashboard() {

  return (
    <div className="page">

      <section className="welcome-card">

        <div>

          <h1>
            Welcome back! 👋
          </h1>

          <p>
            What would you like to do today?
          </p>

        </div>

        <div className="welcome-decoration">
          ✦
        </div>

      </section>

      <section className="stats-grid">

        <StatCard
          title="Total Balance"
          value="₹45,680.00"
          icon={<Wallet />}
        />

        <StatCard
          title="Income This Month"
          value="₹75,000.00"
          icon={<TrendingUp />}
          green
        />

        <StatCard
          title="Expenses This Month"
          value="₹29,320.00"
          icon={<TrendingDown />}
          red
        />

        <StatCard
          title="Today's Spending"
          value="₹1,250.00"
          icon={<Wallet />}
        />

      </section>

      <div className="dashboard-columns">

        <section className="dashboard-main">

          <div className="card">

            <div className="card-header">

              <h2>
                Recent Notes
              </h2>

              <Link to="/notes">
                View All
              </Link>

            </div>

            {notes.map((note) => (

              <div
                className="recent-note"
                key={note.title}
              >

                <div
                  className={`note-icon ${note.color}`}
                >
                  <FileText size={15} />
                </div>

                <div className="recent-note-info">

                  <strong>
                    {note.title}
                  </strong>

                  <span>
                    {note.description}
                  </span>

                </div>

                <small>
                  {note.date}
                </small>

              </div>

            ))}

          </div>

          <div className="card">

            <div className="card-header">

              <h2>
                Quick Actions
              </h2>

            </div>

            <div className="quick-actions">

              <Link to="/notes/new">
                <Plus />
                New Note
              </Link>

              <Link to="/expenses">
                <Plus />
                Add Expense
              </Link>

              <Link to="/income">
                <Plus />
                Add Income
              </Link>

              <Link to="/notes/new">
                <FileText />
                Upload Image
              </Link>

            </div>

          </div>

        </section>

        <section className="dashboard-middle">

          <div className="card">

            <div className="card-header">

              <h2>
                Expense Overview
              </h2>

            </div>

            <div className="chart">

              {[40, 65, 50, 75, 90, 60, 45].map(
                (height, index) => (

                  <div
                    className="chart-column"
                    key={index}
                  >

                    <div
                      className="income-bar"
                      style={{
                        height: `${height}px`,
                      }}
                    />

                    <div
                      className="expense-bar"
                      style={{
                        height: `${height * 0.55}px`,
                      }}
                    />

                    <small>
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                      ][index]}
                    </small>

                  </div>

                )
              )}

            </div>

            <div className="chart-legend">

              <span>
                ● Income
              </span>

              <span>
                ● Expenses
              </span>

            </div>

          </div>

        </section>

        <section className="dashboard-side">

          <div className="card">

            <div className="card-header">

              <h2>
                Upcoming Reminders
              </h2>

            </div>

            <Reminder
              title="Low Balance Alert"
              text="When balance goes below ₹10,000"
            />

            <Reminder
              title="Salary Credit"
              text="Every 1st of the month"
            />

            <Reminder
              title="EMI Payment"
              text="Every 5th of the month"
            />

          </div>

          <div className="card budget-card">

            <div className="card-header">

              <h2>
                Budget Alert
              </h2>

            </div>

            <span>
              Monthly Budget
            </span>

            <strong>
              ₹60,000.00
            </strong>

            <div className="progress">
              <span style={{ width: "49%" }} />
            </div>

            <small>
              Spent ₹29,320.00
            </small>

          </div>

        </section>

      </div>

    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  green,
  red,
}: any) {

  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <span>
          {title}
        </span>

        <strong>
          {value}
        </strong>

        <small
          className={
            green
              ? "green-text"
              : red
              ? "red-text"
              : ""
          }
        >
          {green
            ? "↑ Income"
            : red
            ? "↓ Expenses"
            : "Current"}
        </small>

      </div>

    </div>
  );
}

function Reminder({
  title,
  text,
}: {
  title: string;
  text: string;
}) {

  return (
    <div className="reminder-row">

      <div className="reminder-icon">
        <ArrowDownRight size={15} />
      </div>

      <div>

        <strong>
          {title}
        </strong>

        <small>
          {text}
        </small>

      </div>

    </div>
  );
}