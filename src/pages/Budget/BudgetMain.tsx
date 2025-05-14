import { PieChart } from "@mantine/charts";
import { Button, RingProgress } from "@mantine/core";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { DB_Budget } from "../../interfaces/dbStructure";
import { userDataService } from "../../services/userDataService";
import {} from "../../utils/helpers";
// Image Source
import leftArrow from "../../assets/left_arrow.png";
import rightArrow from "../../assets/right_arrow.svg";

interface BudgetMainProps {
  onStart(): void;
}

export default function BudgetMain({ onStart }: BudgetMainProps) {
  const [hasBudget, setHasBudget] = useState<boolean>(false);
  const [budget, setBudget] = useState<DB_Budget | null>(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const trackingData = userDataService.userData?.tracking ?? [];
  const handleMonthChange = (diff: number) => {
    setCurrentMonth((prev) => prev.add(diff, "month"));
  };

  useEffect(() => {
    if (userDataService.isInitialized) {
      const b = userDataService.userData?.budget ?? null;
      setHasBudget(!!b);
      setBudget(b);
    }
  }, [userDataService.isInitialized]);

  const income = Number(budget?.income) || 0;
  const needs = Number(budget?.needs) || 0;
  const wants = Number(budget?.wants) || 0;
  const save = Number(budget?.save) || 0;
  const daysLeft = dayjs()
    .add(1, "month")
    .startOf("month")
    .diff(dayjs(), "day");
  const buttonLabel = hasBudget
    ? "Edit the Budget"
    : "Start Setting your Budget";

  const oneTimeSpending = trackingData
    .filter(
      (t) => !t.repeat && dayjs(t.dateOfPayment).isSame(currentMonth, "month")
    )
    .reduce((sum, t) => sum + t.amount, 0);

  const recurringSpending = trackingData
    .filter((t) => t.repeat)
    .reduce((sum, t) => sum + t.amount, 0);

  const thisMonthSpending = oneTimeSpending + recurringSpending;

  let remainingToAllocate = thisMonthSpending;
  const needsLeft = Math.max(Number(needs) - remainingToAllocate, 0);
  remainingToAllocate = Math.max(remainingToAllocate - Number(needs), 0);
  const wantsLeft = Math.max(Number(wants) - remainingToAllocate, 0);
  remainingToAllocate = Math.max(remainingToAllocate - Number(wants), 0);
  const saveLeft = Math.max(Number(save) - remainingToAllocate, 0);

  const pieChartData = [
    { name: "Needs", value: Number(needs) || 0, color: "#6B21DD" },
    { name: "Wants", value: Number(wants) || 0, color: "#A36CF7" },
    { name: "Save", value: Number(save) || 0, color: "#D5BBFB" },
  ];

  const total = pieChartData.reduce((sum, item) => sum + item.value, 0);

  if (total === 0) {
    pieChartData.push({ name: "No data", value: 1, color: "#D5BBFB" });
  }

  return (
    <div id="budget-main-container">
      <div id="budget-main-contents">
        <h1>Budget</h1>
        <h3>50/30/20 Rule</h3>
        <div id="month-year">
          <img
            src={leftArrow}
            alt="Left arrow"
            onClick={() => handleMonthChange(-1)}
          />
          <h3>{currentMonth.format("MMMM YYYY")}</h3>
          <img
            src={rightArrow}
            alt="Right arrow"
            onClick={() => handleMonthChange(1)}
          />
        </div>

        <span>
          <p id="income-stats">
            Income{" "}
            <span style={{ fontWeight: "bold" }}>${income.toFixed(2)}</span>
          </p>
          <PieChart
            withLabelsLine
            labelsPosition="outside"
            labelsType="value"
            withLabels
            withTooltip
            mx="auto"
            size={180}
            data={pieChartData}

            // data={[
            //   { name: "Needs", value: needs ?? 0, color: "#6B21DD" },
            //   { name: "Wants", value: wants ?? 0, color: "#A36CF7" },
            //   { name: "Save", value: save ?? 0, color: "#D5BBFB" },
            // ]}
          />
          <em>Tap on the Pie Chart to reveal legend</em>
          {/* <p>Needs ${needs)}</p>
          <p>Wants ${wants)}</p>
          <p>Save ${save)}</p> */}
        </span>

        <div id="divider"></div>
        <div id="sm-charts">
          <div id="needs-chart">
            <RingProgress
              sections={[
                {
                  value: needs > 0 ? (needsLeft / needs) * 100 : 0,
                  color: "#cef24a",
                },
              ]}
              transitionDuration={250}
              size={110}
              thickness={15}
              rootColor="#636087"
            />
            <p>
              Needs <br />${needsLeft.toFixed(2)} left
            </p>
          </div>

          <div id="wants-chart">
            <RingProgress
              sections={[
                {
                  value: wants > 0 ? (wantsLeft / wants) * 100 : 0,
                  color: "#cef24a",
                },
              ]}
              transitionDuration={250}
              size={110}
              thickness={15}
              rootColor="#636087"
            />
            <p>
              Wants <br />${wantsLeft.toFixed(2)} left
            </p>
          </div>

          <div id="save-chart">
            <RingProgress
              sections={[
                {
                  value: save > 0 ? (saveLeft / save) * 100 : 0,
                  color: "#cef24a",
                },
              ]}
              transitionDuration={250}
              size={110}
              thickness={15}
              rootColor="#636087"
            />
            <p>
              Save <br />${saveLeft.toFixed(2)} left
            </p>
          </div>
        </div>

        <p>
          <span style={{ color: "#A36CF7", fontWeight: "bold" }}>
            {daysLeft} days
          </span>{" "}
          {` left to next month`}
        </p>
        <Button id="edit-budget-btn" onClick={onStart}>
          {buttonLabel}
        </Button>
        <NavBar />
      </div>
    </div>
  );
}
