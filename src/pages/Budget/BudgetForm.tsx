import { useState } from "react";
import { DB_Budget } from "../../interfaces/dbStructure";

type BudgetData = Pick<DB_Budget, "age" | "income" | "periodRange" | "goalName" | "goalAmount">;
interface BudgetFormProps { onSubmit(data: BudgetData): void; }

export default function BudgetForm({ onSubmit }: BudgetFormProps) {
  const [age, setAge] = useState<string>("");
  const [periodRange, setPeriodRange] = useState<string>("Weekly");
  const [income, setIncome] = useState<string>("");
  const [goalName, setGoalName] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      age: Number(age),
      income: Number(income),
      periodRange,
      goalName,
      goalAmount: Number(goalAmount),
    });
  };

  return (
    <>
      <h1>Budget Setup</h1>
      <form onSubmit={handleSubmit}>
        <section className="first-section">
          <p>The Ideal Budget will be generated based on your Age and Income.</p>
          
          <div>
            <label>Age</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Period</label>
            <div>
              { ["Weekly", "Biweekly", "Monthly"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriodRange(p)}
                  style={{ fontWeight: periodRange === p ? "bold" : "normal" }}
                >
                  {p}
                </button>
              )) }
            </div>
          </div>

          <div>
            <label>Income</label>
            <input
              id="income"
              type="number"
              value={income}
              onChange={e => setIncome(e.target.value)}
              required
            />
            <p>If you input monthly income, it will be set up Monthly Budget.</p>
          </div>
        </section>

        <section className="second-section">
          <h2>Saving Goal</h2>
          <p>Setting savings goals not only gives you good motivation but also helps you build savings habits.</p>
          
          <div>
            <label>Naming your goal</label>
            <input
              id="goalName"
              type="text"
              value={goalName}
              onChange={e => setGoalName(e.target.value)}
              required
            />
            <p>Based on your purpose, set the name for your savings goal! ex. Vacation, Buy Car...etc</p>
          </div>

          <div>
            <label>Goal Amount</label>
            <input
              id="goalAmount"
              type="number"
              value={goalAmount}
              onChange={e => setGoalAmount(e.target.value)}
              required
            />
          </div>
        </section>

        <p>The new budget will start next month</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}