interface BudgetFormProps { onSubmit(): void; }
export default function BudgetForm({ onSubmit }: BudgetFormProps) {
  return (
    <>
        <h1>TEST_BUDGET_FORM</h1>
        <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
        <label>Income</label>
        <input type="number" name="income" />
        <button type="submit">Submit</button>
        </form>
    </>
  );
}