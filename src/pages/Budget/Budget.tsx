import { useState } from "react";
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
          <BudgetForm onSubmit={(data) => {
            console.log(data);  // Test
            // userDataService.saveUserData("budget", data);
            setStage("main");
          }} />
          <NavBar />
        </>
      )}
    </>
  );
}
