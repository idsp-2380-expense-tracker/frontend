import dayjs from "dayjs";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { DB_Budget } from "../../interfaces/dbStructure";
import { userDataService } from "../../services/userDataService";
import { formatNumber } from "../../utils/helpers";
import { PieChart } from "@mantine/charts";
import { RingProgress, Button } from "@mantine/core";
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
  const daysLeft = dayjs()
    .add(1, "month")
    .startOf("month")
    .diff(dayjs(), "day");
  const buttonLabel = hasBudget
    ? "Edit the Budget"
    : "Start Setting your Budget";

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
            <span style={{ fontWeight: "bold" }}>${formatNumber(income)}</span>
          </p>
          <PieChart
            withLabelsLine
            labelsPosition="outside"
            labelsType="value"
            withLabels
            withTooltip
            mx="auto"
            size={150}
            data={[
              { name: "Needs", value: needs ?? 0, color: "#6B21DD" },
              { name: "Wants", value: wants ?? 0, color: "#A36CF7" },
              { name: "Save", value: save ?? 0, color: "#D5BBFB" },
            ]}
          />
          <em>Tap on the Pie Chart to reveal legend</em>
          {/* <p>Needs ${formatNumber(needs)}</p>
          <p>Wants ${formatNumber(wants)}</p>
          <p>Save ${formatNumber(save)}</p> */}
        </span>

        <div id="divider"></div>
        <div id="sm-charts">
          <div id="needs-chart">
            <RingProgress
              sections={[
                {
                  value: ((needs ?? 0) / (income ?? 1)) * 100,
                  color: "#cef24a",
                },
              ]}
              transitionDuration={250}
              size={110}
              thickness={15}
              rootColor="#636087"
            />
            <p>
              Needs <br />${formatNumber(needs)} left
            </p>
          </div>

          <div id="wants-chart">
            <RingProgress
              sections={[
                {
                  value: ((wants ?? 0) / (income ?? 1)) * 100,
                  color: "#cef24a",
                },
              ]}
              transitionDuration={250}
              size={110}
              thickness={15}
              rootColor="#636087"
            />
            <p>
              Wants <br />${formatNumber(wants)} left
            </p>
          </div>

          <div id="save-chart">
            <RingProgress
              sections={[
                {
                  value: ((save ?? 0) / (income ?? 1)) * 100,
                  color: "#cef24a",
                },
              ]}
              transitionDuration={250}
              size={110}
              thickness={15}
              rootColor="#636087"
            />
            <p>
              Save <br />${formatNumber(save)} left
            </p>
          </div>
        </div>

        <p>
          <span style={{ color: "#A36CF7", fontWeight: "bold" }}>
            ${daysLeft} days
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
