import { useEffect, useState } from "react";
import { budgetService } from "../../services/budgetService";

export default function Budget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    budgetService
      .getBudgetData()
      .then(setData)
      .catch(console.error);
  }, []);

  console.log("Budget data:", data);

  return <div>Budget For Test Log</div>;
}