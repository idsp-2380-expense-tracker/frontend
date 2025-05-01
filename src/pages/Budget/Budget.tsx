import NavBar from "../../components/NavBar";
import { budgetService } from "../../services/budgetService";

export default function Budget() {
  const budgetData = budgetService.getBudgetData();
  console.log("Budget data:", budgetData);

  return (
    <>
      <h1>TEST_BUDGET</h1>
      <NavBar />
    </>
  );
}