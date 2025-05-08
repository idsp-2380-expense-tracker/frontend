import { useState } from "react";
import { budgetService } from "../../services/budgetService";

import NavBar from "../../components/NavBar";
import BudgetForm from "./BudgetForm";
import BudgetMain from "./BudgetMain";
import BudgetPopup from "./BudgetPopup";

export default function Budget() {
  const [stage, setStage] = useState<"popup" | "main" | "form">("popup");

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
          <BudgetMain onStart={() => setStage("form")} />
          <NavBar />
        </>
      )}

      {stage === "form" && (
        <>
          <BudgetForm 
            onSubmit={(data) => {
              const distro = budgetService.calculateDistribution(data.income);
              budgetService.saveBudgetData({
                income:      data.income,
                periodRange: data.periodRange,
                ...distro,
              });
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
