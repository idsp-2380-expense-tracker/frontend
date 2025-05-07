interface BudgetMainProps { onStart(): void; }

export default function BudgetMain({ onStart }: BudgetMainProps) {
  return (
    <>
      <h1>TEST_BUDGET_MAIN</h1>
      <button onClick={onStart}>Start Setting your Budget</button>
    </>
  );
}