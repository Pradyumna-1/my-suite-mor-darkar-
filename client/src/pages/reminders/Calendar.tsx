import {
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

export default function Calendar() {

  const days =
    Array.from(
      { length: 30 },
      (_, i) => i + 1
    );

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            Calendar
          </h1>

          <p>
            View your reminders and scheduled
            financial events.
          </p>

        </div>

        <button className="primary-button">
          <Plus size={15} />
          Add Event
        </button>

      </div>

      <section className="card calendar-card">

        <div className="calendar-header">

          <button>
            <ChevronLeft />
          </button>

          <h2>
            September 2026
          </h2>

          <button>
            <ChevronRight />
          </button>

        </div>

        <div className="calendar-week">

          {[
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
          ].map((day) => (
            <strong key={day}>
              {day}
            </strong>
          ))}

        </div>

        <div className="calendar-days">

          {days.map((day) => (

            <div
              key={day}
              className={
                day === 23
                  ? "calendar-day today"
                  : "calendar-day"
              }
            >

              <b>
                {day}
              </b>

              {day === 1 && (
                <span>
                  Salary
                </span>
              )}

              {day === 5 && (
                <span>
                  EMI
                </span>
              )}

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}