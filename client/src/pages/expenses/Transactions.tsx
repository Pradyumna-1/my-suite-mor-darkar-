import { Plus } from "lucide-react";

const transactions = [
  {
    date: "May 18, 2025",
    description: "Salary",
    category: "Salary",
    type: "Income",
    amount: "₹75,000",
  },
  {
    date: "May 18, 2025",
    description: "Grocery Shopping",
    category: "Grocery",
    type: "Expense",
    amount: "₹1,250",
  },
  {
    date: "May 17, 2025",
    description: "Electricity Bill",
    category: "Utilities",
    type: "Expense",
    amount: "₹1,100",
  },
  {
    date: "May 16, 2025",
    description: "Freelance Project",
    category: "Freelance",
    type: "Income",
    amount: "₹10,000",
  },
  {
    date: "May 16, 2025",
    description: "Restaurant",
    category: "Food",
    type: "Expense",
    amount: "₹850",
  },
];

export default function Transactions({
  incomeOnly = false,
}: {
  incomeOnly?: boolean;
}) {

  const data = incomeOnly
    ? transactions.filter(
        (item) => item.type === "Income"
      )
    : transactions;

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            {incomeOnly
              ? "Income"
              : "Transactions"}
          </h1>

          <p>
            Manage your financial transactions.
          </p>

        </div>

        <button className="primary-button">
          <Plus size={15} />
          Add Transaction
        </button>

      </div>

      <section className="card table-card">

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>

          </thead>

          <tbody>

            {data.map((transaction) => (

              <tr key={transaction.description}>

                <td>
                  {transaction.date}
                </td>

                <td>
                  <strong>
                    {transaction.description}
                  </strong>
                </td>

                <td>
                  {transaction.category}
                </td>

                <td>
                  <span
                    className={
                      transaction.type === "Income"
                        ? "transaction-badge income"
                        : "transaction-badge expense"
                    }
                  >
                    {transaction.type}
                  </span>
                </td>

                <td
                  className={
                    transaction.type === "Income"
                      ? "green-text"
                      : "red-text"
                  }
                >
                  {transaction.type === "Income"
                    ? "+"
                    : "-"}{" "}
                  {transaction.amount}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

    </div>
  );
}