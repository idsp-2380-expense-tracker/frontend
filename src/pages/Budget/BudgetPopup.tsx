interface BudgetPopupProps { onStart(): void; onLater(): void; }

export default function BudgetPopup({ onStart, onLater }: BudgetPopupProps) {
  return (
    <>
      <h1>TEST_BUDGET_POPUP</h1>
      <button onClick={onStart}>Start Setting your Budget</button>
      <button onClick={onLater}>Later</button>
    </>
  );
}