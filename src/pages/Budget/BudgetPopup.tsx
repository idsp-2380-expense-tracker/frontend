interface BudgetPopupProps { onStart(): void; onLater(): void; }

export default function BudgetPopup({ onStart, onLater }: BudgetPopupProps) {
  return (
    <div className="budget-popup">
      <h1>Guide to set up your budget</h1>
      <p>There is a widely used approach to managing a personal budget.</p>

      <div className="rule-box">
        <h2>50/30/20 Rule</h2>
        <p>The 50/30/20 rule involves allocating 50% of your income to essential expenses, 30% to discretionary spending, and 20% to savings.</p>
      </div>

      <div className="chart-placeholder">
        IMAGE
      <p>Get a custom budget by entering income and goals</p>
      </div>

      <div className="popup-buttons">
        <button onClick={onStart}>Start Setting your Budget</button>
        <button onClick={onLater}>Later</button>
      </div>
    </div>
  );
}