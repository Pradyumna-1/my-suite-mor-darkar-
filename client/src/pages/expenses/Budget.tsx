import { Target, Wallet } from "lucide-react";

import { useState } from "react";

export default function Budget() {

  const [budget, setBudget] =
    useState(60000);

  const [threshold, setThreshold] =
    useState(10000);

  const spent = 29320;

  const percentage =
    (spent / budget) * 100;

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            Budget & Goals
          </h1>

          <p>
            Set your monthly budget and
            low-balance threshold.
          </p>

        </div>

      </div>

      <div className="two-column">

        <section className="card">

          <div className="budget-heading">

            <Wallet />

            <h2>
              Monthly Budget
            </h2>

          </div>

          <label>
            Monthly amount

            <input
              type="number"
              value={budget}
              onChange={(e) =>
                setBudget(
                  Number(e.target.value)
                )
              }
            />

          </label>

          <div className="budget-progress">

            <span
              style={{
                width:
                  `${Math.min(
                    percentage,
                    100
                  )}%`,
              }}
            />

          </div>

          <div className="budget-summary">

            <span>
              Spent
              <strong>
                ₹{spent.toLocaleString()}
              </strong>
            </span>

            <span>
              Remaining
              <strong>
                ₹{Math.max(
                  budget - spent,
                  0
                ).toLocaleString()}
              </strong>
            </span>

          </div>

        </section>

        <section className="card">

          <div className="budget-heading">

            <Target />

            <h2>
              Low Balance Alert
            </h2>

          </div>

          <p>
            Notify me when my available
            balance goes below:
          </p>

          <label>

            Amount

            <input
              type="number"
              value={threshold}
              onChange={(e) =>
                setThreshold(
                  Number(e.target.value)
                )
              }
            />

          </label>

          <button className="primary-button">
            Save Budget
          </button>

        </section>

      </div>

    </div>
  );
}