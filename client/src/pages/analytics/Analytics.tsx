import {
  BarChart3,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function Analytics() {

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            <BarChart3 size={20} />
            Analytics
          </h1>

          <p>
            Understand your financial activity.
          </p>

        </div>

      </div>

      <div className="stats-grid">

        <Stat
          icon={<TrendingUp />}
          title="Total Income"
          value="₹85,000"
        />

        <Stat
          icon={<TrendingDown />}
          title="Total Expenses"
          value="₹29,320"
          red
        />

        <Stat
          icon={<Wallet />}
          title="Net Balance"
          value="₹55,680"
        />

        <Stat
          icon={<BarChart3 />}
          title="Transactions"
          value="24"
        />

      </div>

      <section className="card analytics-chart">

        <h2>
          Income vs Expenses
        </h2>

        <div className="analytics-bars">

          {[50, 80, 60, 95, 75, 55].map(
            (height, index) => (

              <div key={index}>

                <span
                  style={{
                    height: `${height}px`,
                  }}
                />

                <i
                  style={{
                    height:
                      `${height * 0.45}px`,
                  }}
                />

              </div>

            )
          )}

        </div>

      </section>

    </div>
  );
}

function Stat({
  icon,
  title,
  value,
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
            red
              ? "red-text"
              : "green-text"
          }
        >
          {red
            ? "Expenses"
            : "Overview"}
        </small>

      </div>

    </div>
  );
}