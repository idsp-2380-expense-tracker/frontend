import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { DB_Budget } from "../../interfaces/dbStructure";
import { userDataService } from "../../services/userDataService";

interface BudgetMainProps { onStart(): void; }

export default function BudgetMain({ onStart }: BudgetMainProps) {
  const [hasBudget, setHasBudget] = useState<boolean>(false);
  const [budget, setBudget] = useState<DB_Budget | null>(null);

  useEffect(() => {
    if (userDataService.isInitialized) {
      const b = userDataService.userData?.budget ?? null;
      setHasBudget(!!b);
      setBudget(b);
    }
  }, [userDataService.isInitialized, userDataService.userData]);

  return (
    <>
      <h1>Budget</h1>
      <h2>50/30/20 Rule</h2>

      {hasBudget ? (
        <>
          <p>Period: {budget?.periodRange}</p>
          <p>Income ${budget?.income}</p>
          <p>Needs ${budget?.needs}</p>
          <p>Wants ${budget?.wants}</p>
          <p>Save ${budget?.save}</p>
          <button onClick={onStart}>Edit the Budget</button>
        </>
      ) : (
        <>
          <p>Period: Monthly</p>
          <p>Income $0</p>
          <p>Needs $0</p>
          <p>Wants $0</p>
          <p>Save $0</p>
          <button onClick={onStart}>Start Setting your Budget</button>
        </>
      )}

      <NavBar />
    </>
  );
}