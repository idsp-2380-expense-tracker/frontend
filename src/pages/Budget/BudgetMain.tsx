import dayjs from "dayjs";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { DB_Budget } from "../../interfaces/dbStructure";
import { userDataService } from "../../services/userDataService";
import { formatNumber } from "../../utils/helpers";

interface BudgetMainProps { onStart(): void; }

export default function BudgetMain({ onStart }: BudgetMainProps) {
  const [hasBudget, setHasBudget] = useState<boolean>(false);
  const [budget, setBudget] = useState<DB_Budget | null>(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handleMonthChange = (diff: number) => {
    setCurrentMonth((prev) => prev.add(diff, "month"));
  };

  useEffect(() => {
    if (userDataService.isInitialized) {
      const b = userDataService.userData?.budget ?? null;
      setHasBudget(!!b);
      setBudget(b);
    }
  }, [userDataService.isInitialized, userDataService.userData]);

  const income = hasBudget ? budget?.income : 0;
  const needs = hasBudget ? budget?.needs : 0;
  const wants = hasBudget ? budget?.wants : 0;
  const save = hasBudget ? budget?.save : 0;
  const daysLeft = dayjs().add(1, "month").startOf("month").diff(dayjs(), "day");
  const buttonLabel = hasBudget ? "Edit the Budget" : "Start Setting your Budget";

  return (
    <>
      <h1>Budget</h1>
      <h2>50/30/20 Rule</h2>
      <div>
        <button onClick={() => handleMonthChange(-1)}>{"<"}</button>
        <h3>{currentMonth.format("MMMM YYYY")}</h3>
        <button onClick={() => handleMonthChange(1)}>{">"}</button>
      </div>

      <span>
        Image
        <p>Income ${formatNumber(income)}</p>
        <p>Needs ${formatNumber(needs)}</p>
        <p>Wants ${formatNumber(wants)}</p>
        <p>Save ${formatNumber(save)}</p>
      </span>

      <span>
        Image
        <p>Needs ${formatNumber(needs)} left</p>
        Image
        <p>Wants ${formatNumber(wants)} left</p>
        Image
        <p>Save ${formatNumber(save)} left</p>
      </span>

      <p>{`${daysLeft} days left to next month`}</p>
      <button onClick={onStart}>{buttonLabel}</button>

      <NavBar />
    </>
  );
}