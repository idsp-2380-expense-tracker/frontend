import { budgetService } from "../../services/budgetService";


export default function Budget() {
  const budgetData = budgetService.getBudgetData();
  console.log("Budget data:", budgetData);

  return <div>Budget For Test Log</div>;
}