import {
  Bell,
  CalendarDays,
  Plus,
} from "lucide-react";

import { useState } from "react";

export default function Reminders() {

  const [lowBalance, setLowBalance] =
    useState(true);

  const [salary, setSalary] =
    useState(true);

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            Reminders
          </h1>

          <p>
            Manage automatic budget and
            calendar reminders.
          </p>

        </div>

        <button className="primary-button">
          <Plus size={15} />
          Add Reminder
        </button>

      </div>

      <div className="reminders-grid">

        <ReminderCard
          icon={<Bell />}
          title="Low Balance Alert"
          description="When balance goes below ₹10,000"
          enabled={lowBalance}
          setEnabled={setLowBalance}
        />

        <ReminderCard
          icon={<CalendarDays />}
          title="Salary Credit"
          description="Every 1st of the month"
          enabled={salary}
          setEnabled={setSalary}
        />

        <ReminderCard
          icon={<Bell />}
          title="EMI Payment"
          description="Every 5th of the month"
          enabled={false}
          setEnabled={() => {}}
        />

      </div>

    </div>
  );
}

function ReminderCard({
  icon,
  title,
  description,
  enabled,
  setEnabled,
}: any) {

  return (
    <section className="card reminder-card">

      <div className="reminder-large-icon">
        {icon}
      </div>

      <div>

        <strong>
          {title}
        </strong>

        <span>
          {description}
        </span>

      </div>

      <button
        className={
          enabled
            ? "switch enabled"
            : "switch"
        }
        onClick={() =>
          setEnabled(!enabled)
        }
      >
        <i />
      </button>

    </section>
  );
}