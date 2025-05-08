import { useState } from "react";
import { DB_Budget, PeriodRange } from "../../interfaces/dbStructure";

type BudgetData = Pick<DB_Budget, "periodRange" | "income">;
interface BudgetFormProps { onSubmit(data: BudgetData): void; }

export default function BudgetForm({ onSubmit }: BudgetFormProps) {
  const [periodRange, setPeriodRange] = useState<PeriodRange>("Weekly");
  const [income, setIncome] = useState<string>("");
  const PERIOD_OPTIONS: PeriodRange[] = ["Weekly", "Biweekly", "Monthly"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ periodRange, income: Number(income) });
  };

  return (
    <>
      <h1>Budget Setup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Period</label>
          <div>
            {PERIOD_OPTIONS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriodRange(p)}
                style={{
                  fontWeight: periodRange === p ? "bold" : "normal"
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="income">Income</label>
          <input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}