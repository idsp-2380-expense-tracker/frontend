import dayjs from "dayjs";
import { OnBackProps } from "../../interfaces/uiProps";
import { useAuthService } from "../../services/authService";
import { budgetService } from "../../services/budgetService";
import { trackingService } from "../../services/trackingService";
// Image Source
import backgroundBottom from "../../assets/backgrounds/background_bottom.jpg";
import backgroundTop from "../../assets/backgrounds/backgound_top.png";
import closeButtonIcon from "../../assets/close_button.svg";

export default function Insight({ onBack }: OnBackProps) {
  const { user } = useAuthService();
  const firstName = user?.firstName || "";
  const monthName = dayjs().format("MMMM");
  const { income = 0 } = budgetService.getBudgetData() || {};
  const trackingData = trackingService.getTrackingData() || [];
  const currentMonth = dayjs().format("YYYY-MM");
  const thisMonthData = trackingData.filter(
    (item) => dayjs(item.dateOfPayment).format("YYYY-MM") === currentMonth
  );
  const totalSpent = thisMonthData.reduce((sum, item) => sum + item.amount, 0);
  const saved = income - totalSpent;
  const categorySums = thisMonthData.reduce<Record<string, number>>(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    },
    {}
  );
  const topCategories = Object.entries(categorySums)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div id="insights-container">
      <img src={backgroundBottom} alt="" />

      <div id="insights-top">
        <img src={backgroundTop} alt="" />
        <img
          className="close-button"
          src={closeButtonIcon}
          alt=""
          onClick={onBack}
        />
        <h1>Your {monthName}'s Insights</h1>
        <p>Good job, {firstName}!</p>
        <p>
          You've saved ${saved.toFixed(2)} in {monthName}!
        </p>
      </div>

      <div id="insights-contents">
        <h1>Summary in numbers</h1>

        <h4 className="insights-subtitle">You saved</h4>
        <h2 className="insights-amount">${saved.toFixed(2)}</h2>

        <h4 className="insights-subtitle">You spent</h4>
        <h2 className="insights-amount">${totalSpent.toFixed(2)}</h2>

        <h4 className="insights-subtitle">Your total asset</h4>
        <h2 className="insights-amount">${income.toFixed(2)}</h2>

        <h2 id="top-3-cat">Top 3 Expense Categories</h2>
        {topCategories.map(([category, amount]) => (
          <div key={category}>
            <h4 className="insights-subtitle">{category}</h4>
            <h2 className="insights-amount">${amount.toFixed(2)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
