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
                age: 0,             //TEST    
                goalAmount: 0,    //TEST
                income:      data.income,
                needs: distro.needs,
                periodRange: data.periodRange,
                save: distro.save,
                wants: distro.wants
                // ...distro,
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
