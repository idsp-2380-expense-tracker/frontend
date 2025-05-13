import ArticleCarousel from "../../components/ArticleCarousel";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SpendingStatsBar from "../../components/SpendingStatsBar";
// Image Source
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowInCircleGrey from "../../assets/arrow_in_circle_grey.svg";
import insightIcon from "../../assets/party.svg";
import coinsIcon from "../../assets/reward_icon.svg";
import rightArrow from "../../assets/right_arrow.svg";
import { useAuthService } from "../../services/authService";
import { budgetService } from "../../services/budgetService";
import { rewardsService } from "../../services/rewardsService";
import { trackingService } from "../../services/trackingService";
import Insight from "./Insight";

export default function Home() {
  const navigate = useNavigate();
  const [view, setView] = useState<"home" | "insight">("home");
  const { user } = useAuthService();

  if (view === "insight") {
    return <Insight onBack={() => setView("home")} />;
  }

  const streakDays = Number(user?.publicMetadata.loginStreak) ?? 0;

  const { points = 0 } = rewardsService.getRewardsData() ?? {};

  const { needs = 0, wants = 0 } = budgetService.getBudgetData() ?? {};
  const totalBudget = needs + wants;

  const trackingData = trackingService.getTrackingData() ?? [];
  const today = dayjs().startOf("day");
  const thisMonth = dayjs().month();

  const recentExpenses = trackingData
    .filter((item) => !dayjs(item.dateOfPayment).isAfter(today, "day"))
    .sort((a, b) => dayjs(b.dateOfPayment).diff(dayjs(a.dateOfPayment)))
    .slice(0, 2);

  const monthExpenses = trackingData.reduce((sum, item) => {
    if (item.repeat) {
      return sum + item.amount;
    }
    return (
      sum + (dayjs(item.dateOfPayment).month() === thisMonth ? item.amount : 0)
    );
  }, 0);

  const remaining = totalBudget - monthExpenses;
  const percentLeft = Math.round((remaining / totalBudget) * 100);

  return (
    <>
      <Header />
      <div id="home-layout">
        <section id="insights">
          <div id="insights-title">
            <img src={insightIcon} alt="Insight icon" id="insightIcon" />
            <span>Check your March insights! </span>
          </div>
          <img
            src={rightArrow}
            alt="Right arrow"
            style={{ cursor: "pointer" }}
            onClick={() => setView("insight")}
          />
        </section>

        <section id="spending-limit">
          <div id="spent-stats">
            <h1 id="percentage-spending">
              {percentLeft}% <span>left</span>
            </h1>

            <div id="spending-description">
              <p style={{ color: "#e8f9ac" }}>Your spending limit</p>
              <p id="spent">
                ${remaining.toFixed(2)}
                {/* <span>on food</span> */}
              </p>
            </div>
          </div>

          <SpendingStatsBar percentLeft={percentLeft} remaining={remaining} />
        </section>

        {/* <section id="spending-summary">
          <p>
            You spent <span>18% less</span> on party this month. Keep it up! 😉
          </p>
        </section> */}

        <section id="recent-expenses">
          <h1 style={{ paddingBottom: "1rem" }}>Recent Expenses</h1>

          {recentExpenses.map((item) => {
            const d = dayjs(item.dateOfPayment);
            const label = d.isSame(today, "day")
              ? "Today"
              : d.isSame(today.subtract(1, "day"), "day")
              ? "Yesterday"
              : d.format("MMM D, YYYY");

            return (
              <div id="expense-list" key={item.id}>
                <div id="expense-list-title">
                  <h1 id="expense-list-price" className="text-price">
                    ${item.amount.toFixed(2)}
                  </h1>
                  <p id="expense-list-category">{item.category}</p>
                </div>
                <div
                  id="expense-list-btn"
                  onClick={() =>
                    navigate("/tracking", {
                      state: { date: item.dateOfPayment },
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img src={arrowInCircleGrey} alt="Arrow in circle" />
                  <p id="expense-date">{label}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* <div id="recent-expenses">
          {expenses.map((expense) => (
            <div key={expense.id} id="expense-list">
              <div id="expense-list-title">
                <h1 id="expense-list-price">${expense.amount.toFixed(2)}</h1>
                <p id="expense-list-category">{expense.category}</p>
              </div>

              <div id="expense-list-btn">
                <img src={arrowInCircleGrey} alt="Arrow in circle" />
                <p id="expense-date">{expense.date}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Needs to fetch from DB
        type Expense = {
          id: string;
          amount: number;
          category: string;
          date: string;
        };

        const expenses: Expense[] = [
          { id: '1', amount: 35.2, category: 'Eat-out', date: 'Today, 12:42PM' },
          { id: '2', amount: 12.5, category: 'Groceries', date: 'Yesterday, 3:10PM' },
        ];
         */}

        <section id="rewards-section">
          <div id="challenge-progress">
            <div id="logged-in">
              <p>You've logged in</p>
              <span style={{ fontSize: "36px" }}>🔥</span>
            </div>

            <div id="streak">
              <h1>{streakDays}</h1>
              <p>days in a row!</p>
            </div>
          </div>

          <div id="earned-points">
            <div id="coins-btn">
              <img src={coinsIcon} alt="Reward coins" />
              <img
                src={rightArrow}
                alt="Right arrow"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/rewards")}
              />
            </div>

            <h2>Earned Points</h2>
            <h1>
              {points} <span>pt</span>
            </h1>
          </div>
        </section>

        <ArticleCarousel />
      </div>
      <NavBar />
    </>
  );
}

{
  /* <section id="article-list">
          <div id="article">
            <h3 id="article-link">
              <a
                href="https://www.forbes.com/sites/truetamplin/2025/01/15/the-benefits-of-expense-tracking-and-how-you-can-do-it-effectively/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                The Benefits Of Expense Tracking And How You Can Do It
                Effectively
              </a>
              <br />
              <span className="link-text">
                Read more <img src={linkIcon} alt="Link icon" />
              </span>
            </h3>

            <div id="article-by">
              <p id="expense-list-category">Forbes</p>
              <p>by True Tamplin</p>
            </div>
          </div>
        </section> */
}
