import { Button, RingProgress, Text } from "@mantine/core";
import { useState } from "react";
import { DB_Budget } from "../../interfaces/dbStructure";
import { PeriodRange } from "../../interfaces/types";
// Image Source
import leftArrow from "../../assets/left_arrow_2.svg";

type BudgetData = Pick<DB_Budget, "periodRange" | "income">;
interface BudgetFormProps {
  onSubmit(data: BudgetData): void;
  onBack(): void;
}

export default function BudgetForm({ onSubmit, onBack }: BudgetFormProps) {
  const [periodRange, setPeriodRange] = useState<PeriodRange>("Weekly");
  const [income, setIncome] = useState<string>("");
  const PERIOD_OPTIONS: PeriodRange[] = ["Weekly", "Biweekly", "Monthly"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ periodRange, income: Number(income) });
  };

  return (
    <div id="budget-form-container">
      <div id="budget-form-header">
        <img src={leftArrow} alt="Left arrow icon" onClick={onBack} />
        <h1>Budget</h1>
      </div>

      <div id="budget-setup-contents">
        <p>
          The Ideal Budget will be generated based on your <span>Income</span>.
        </p>
        <hr />
        <div id="ring-progress-graph">
          <RingProgress
            size={250}
            thickness={35}
            label={
              <Text
                size="xs"
                ta="center"
                px="xs"
                style={{ pointerEvents: "none" }}
              >
                <em>Tap sections to see breakdown</em>
              </Text>
            }
            sections={[
              { value: 50, color: "#6B21DD", tooltip: "Needs (50%)" },
              { value: 30, color: "#A36CF7", tooltip: "Wants (30%)" },
              { value: 20, color: "#D5BBFB", tooltip: "Saving (20%)" },
            ]}
          />
        </div>

        <div id="income-form">
          <h2>Income</h2>
          <form onSubmit={handleSubmit}>
            <div id="period-btn">
              {PERIOD_OPTIONS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriodRange(p)}
                  style={{
                    // fontWeight: periodRange === p ? "bold" : "normal",
                    color: periodRange === p ? "black" : "#A3A2B4",
                    backgroundColor:
                      periodRange === p ? "#cef24a" : "transparent",
                    borderRadius: periodRange === p ? "50px" : "0",
                    border: "0",
                    padding: "0.5rem",
                    width: "100%",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>

            <input
              className="income-input"
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="$0"
              required
              style={{ textAlign: "center", fontSize: "24px", color: "white" }}
            />
            <p style={{ fontSize: "10px", margin: "1rem" }}>
              If you input monthly income, it will be set up{" "}
              <span style={{ color: "white" }}>Monthly Budget</span>.
            </p>

            <Button className="submit-btn" type="submit" disabled={Number(income) < 0}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
