import { useState } from "react";
import { DB_Budget, PeriodRange } from "../../interfaces/dbStructure";

type BudgetData = Pick<DB_Budget, "periodRange" | "income">;
interface BudgetFormProps { onSubmit(data: BudgetData): void; onBack(): void; }

export default function BudgetForm({ onSubmit, onBack }: BudgetFormProps) {
  const [periodRange, setPeriodRange] = useState<PeriodRange>("Weekly");
  const [income, setIncome] = useState<string>("");
  const PERIOD_OPTIONS: PeriodRange[] = ["Weekly", "Biweekly", "Monthly"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ periodRange, income: Number(income) });
  };

  return (
    <>
      <button onClick={onBack}>BACK</button>
      <h1>Budget Setup</h1>
      <p>The Ideal Budget will be generated based on your Income.</p>
      picture
      <h2>Income</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {PERIOD_OPTIONS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriodRange(p)}
              style={{  // TEST
                fontWeight: periodRange === p ? "bold" : "normal"
              }}
            >
              {p}
            </button>
          ))}
        </div>

        <div>
          <input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <p>If you input monthly income, it will be set up Monthly Budget.</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}