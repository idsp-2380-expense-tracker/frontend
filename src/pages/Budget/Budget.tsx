import { useEffect, useState } from "react";
import { budgetService } from "../../services/budgetService";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import BudgetForm from "./BudgetForm";
import BudgetMain from "./BudgetMain";
import BudgetPopup from "./BudgetPopup";

export default function Budget() {
  const budgetData = budgetService.getBudgetData();
  const [stage, setStage] = useState<"popup" | "main" | "form">(() => {
    if (!budgetData || !budgetData.income) return "popup";
    return "main";
  });

  useEffect(() => {
    const data = budgetService.getBudgetData();
    setStage(!data || !data.income ? "popup" : "main");
  }, []);

  return (
    <>
      {stage === "popup" && (
        <BudgetPopup
          onStart={() => setStage("form")}
          onLater={() => setStage("main")}
        />
      )}

      {stage === "main" && (
        <>
          <Header />
          <BudgetMain onStart={() => setStage("form")} />
          <NavBar />
        </>
      )}

      {stage === "form" && (
        <>
          <BudgetForm
            onSubmit={async (data) => {
              const budgetData = budgetService.calculateBudgetData(
                data.income,
                data.periodRange
              );
              await budgetService.saveBudgetData(budgetData);
              setStage("main");
            }}
            onBack={() => setStage("main")}
          />
          <NavBar />
        </>
      )}
    </>
  );
}
