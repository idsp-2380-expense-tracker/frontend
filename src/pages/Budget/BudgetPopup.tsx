import { RingProgress, Text } from "@mantine/core";

interface BudgetPopupProps {
  onStart(): void;
  onLater(): void;
}

export default function BudgetPopup({ onStart, onLater }: BudgetPopupProps) {
  return (
    <div className="budget-popup">
      <div id="budget-header">
        <h1>Guide to set up your budget</h1>
        <br />
        <p>There is a widely used approach to managing a personal budget.</p>
      </div>

      <br />
      <div className="rule-box">
        <h3>50/30/20 Rule</h3>
        <p>
          <span>The 50/30/20 rule</span> involves allocating <span>50%</span> of
          your income to essential expenses, <span>30%</span> to discretionary
          spending, and <span>20%</span> to savings.
        </p>
      </div>

      <div className="chart-placeholder">
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
              Tap sections to see breakdown
            </Text>
          }
          sections={[
            { value: 50, color: "#6B21DD", tooltip: "Needs (50%)" },
            { value: 30, color: "#A36CF7", tooltip: "Wants (30%)" },
            { value: 20, color: "#D5BBFB", tooltip: "Saving (20%)" },
          ]}
        />
        <p>Get a custom budget by entering income and goals</p>
      </div>

      <br />
      <div className="popup-buttons">
        <button
          id="start-budget-btn"
          style={{ cursor: "pointer" }}
          onClick={onStart}
        >
          Start Setting your Budget
        </button>
        <button id="later-btn" style={{ cursor: "pointer" }} onClick={onLater}>
          Later
        </button>
      </div>
    </div>
  );
}
