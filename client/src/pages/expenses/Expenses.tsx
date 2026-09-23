import {
  LayoutDashboard,
  Receipt,
  TrendingUp,
  TrendingDown,
  Target,
  CalendarDays,
  Bell,
  BarChart3,
  Settings,
  Plus,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

const expenseNavigation = [
  {
    path: "/expenses",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/transactions",
    label: "Transactions",
    icon: Receipt,
  },
  {
    path: "/income",
    label: "Income",
    icon: TrendingUp,
  },
  {
    path: "/expenses",
    label: "Expenses",
    icon: TrendingDown,
  },
  {
    path: "/budget",
    label: "Budget & Goals",
    icon: Target,
  },
  {
    path: "/calendar",
    label: "Calendar",
    icon: CalendarDays,
  },
  {
    path: "/reminders",
    label: "Reminders",
    icon: Bell,
  },
  {
    path: "/analytics",
    label: "Reports",
    icon: BarChart3,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Expenses() {

  const navigate = useNavigate();

  return (
    <div className="expense-app">

      {/* EXPENSE SIDEBAR */}

      <aside className="expense-sidebar">

        <div className="expense-brand">

          <div className="expense-brand-icon">
            <Wallet size={17} />
          </div>

          <strong>
            Expense Tracker
          </strong>

        </div>

        <nav>

          {expenseNavigation.map(
            (item, index) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={`${item.label}-${index}`}
                  to={item.path}
                  end={
                    item.path === "/expenses"
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "expense-nav active"
                      : "expense-nav"
                  }
                >
                  <Icon size={15} />
                  {item.label}
                </NavLink>
              );
            }
          )}

        </nav>

        <button
          className="back-to-mysuite"
          onClick={() =>
            navigate("/")
          }
        >
          ← Back to MySuite
        </button>

      </aside>

      {/* EXPENSE CONTENT */}

      <main className="expense-main">

        <div className="expense-page-header">

          <div>
            <h1>
              Dashboard
            </h1>

            <p>
              Track your income, expenses
              and financial goals.
            </p>
          </div>

          <select>
            <option>
              This Month
            </option>

            <option>
              This Week
            </option>

            <option>
              This Year
            </option>
          </select>

        </div>

        {/* STAT CARDS */}

        <div className="expense-stat-grid">

          <ExpenseStat
            title="Total Balance"
            amount="₹45,680.00"
            icon={<Wallet />}
          />

          <ExpenseStat
            title="Income This Month"
            amount="₹75,000.00"
            icon={<ArrowUpRight />}
            type="income"
          />

          <ExpenseStat
            title="Expenses This Month"
            amount="₹29,320.00"
            icon={<ArrowDownRight />}
            type="expense"
          />

          <ExpenseStat
            title="Today's Spending"
            amount="₹1,250.00"
            icon={<Wallet />}
          />

        </div>

        {/* MAIN CONTENT */}

        <div className="expense-dashboard-grid">

          {/* OVERVIEW */}

          <section className="expense-card overview-card">

            <div className="expense-card-header">

              <h2>
                Overview
              </h2>

              <select>
                <option>
                  Monthly
                </option>

                <option>
                  Weekly
                </option>
              </select>

            </div>

            <div className="expense-chart">

              {[
                70,
                95,
                75,
                110,
                85,
                65,
                100,
                80,
                55,
                90,
                75,
                105,
              ].map(
                (height, index) => (

                  <div
                    className="expense-chart-column"
                    key={index}
                  >

                    <div
                      className="chart-income"
                      style={{
                        height:
                          `${height}px`,
                      }}
                    />

                    <div
                      className="chart-expense"
                      style={{
                        height:
                          `${height * .42}px`,
                      }}
                    />

                    <small>
                      {
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][index]
                      }
                    </small>

                  </div>

                )
              )}

            </div>

            <div className="chart-legend">

              <span>
                <i className="legend-income" />
                Income
              </span>

              <span>
                <i className="legend-expense" />
                Expenses
              </span>

            </div>

          </section>

          {/* RECENT TRANSACTIONS */}

          <section className="expense-card recent-transactions">

            <div className="expense-card-header">

              <h2>
                Recent Transactions
              </h2>

              <button
                onClick={() =>
                  navigate("/transactions")
                }
              >
                View All
              </button>

            </div>

            <Transaction
              title="Salary"
              amount="+ ₹75,000"
              income
            />

            <Transaction
              title="Grocery Shopping"
              amount="- ₹1,250"
            />

            <Transaction
              title="Electricity Bill"
              amount="- ₹1,100"
            />

            <Transaction
              title="Freelance Project"
              amount="+ ₹10,000"
              income
            />

            <Transaction
              title="Restaurant"
              amount="- ₹850"
            />

          </section>

          {/* BUDGET ALERT */}

          <section className="expense-card budget-alert">

            <h2>
              Budget Alert
            </h2>

            <p>
              You will be notified when
              your balance goes below
            </p>

            <div className="budget-alert-value">
              ₹10,000
            </div>

            <button>
              Edit
            </button>

          </section>

          {/* BUDGET */}

          <section className="expense-card budget-goal">

            <div className="expense-card-header">

              <h2>
                Budget & Goals
              </h2>

              <button>
                Edit
              </button>

            </div>

            <span>
              Monthly Budget
            </span>

            <strong>
              ₹60,000.00
            </strong>

            <div className="budget-progress-bar">
              <span
                style={{
                  width: "49%",
                }}
              />
            </div>

            <div className="budget-details">

              <span>
                Spent
                <strong>
                  ₹29,320.00
                </strong>
              </span>

              <span>
                Remaining
                <strong>
                  ₹30,680.00
                </strong>
              </span>

            </div>

          </section>

          {/* QUICK ADD */}

          <section className="expense-card quick-expense">

            <h2>
              Quick Add
            </h2>

            <div>

              <button>
                <Plus size={14} />
                Expense
              </button>

              <button>
                <Plus size={14} />
                Income
              </button>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

function ExpenseStat({
  title,
  amount,
  icon,
  type,
}: any) {

  return (
    <div className="expense-stat">

      <div
        className={`expense-stat-icon ${
          type || ""
        }`}
      >
        {icon}
      </div>

      <div>

        <span>
          {title}
        </span>

        <strong>
          {amount}
        </strong>

        <small
          className={
            type === "income"
              ? "income-text"
              : type === "expense"
              ? "expense-text"
              : ""
          }
        >
          {type === "income"
            ? "Income"
            : type === "expense"
            ? "Expenses"
            : "Available"}
        </small>

      </div>

    </div>
  );
}

function Transaction({
  title,
  amount,
  income = false,
}: any) {

  return (
    <div className="transaction-item">

      <div
        className={
          income
            ? "transaction-icon income"
            : "transaction-icon expense"
        }
      >
        {income
          ? <ArrowUpRight size={14} />
          : <ArrowDownRight size={14} />}
      </div>

      <div className="transaction-info">

        <strong>
          {title}
        </strong>

        <span>
          May 18, 2025
        </span>

      </div>

      <strong
        className={
          income
            ? "income-text"
            : "expense-text"
        }
      >
        {amount}
      </strong>

    </div>
  );
}