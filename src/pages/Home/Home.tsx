import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
// Image Sources
import insightIcon from "../../assets/Party.svg";
import rightArrow from "../../assets/right_arrow.svg";
import spendGraph from "../../assets/spending-graph.svg";
import arrowInCircleGrey from "../../assets/arrow_in_circle_grey.svg";
import coinsIcon from "../../assets/reward_icon.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home-layout">
        <div id="insights">
          <div id="insights-title">
            <img src={insightIcon} alt="Insight icon" id="insightIcon" />
            <span>Check your March insights! </span>
          </div>
          <img src={rightArrow} alt="Right arrow" />
        </div>
        <div id="spending-limit">
          <div id="spent-stats">
            <h1 id="percentage-spending">
              71% <span>left</span>
            </h1>

            <div id="spending-description">
              <p style={{ color: "#e8f9ac" }}>Your spending limit</p>
              <p id="spent">
                $450 <span>on food</span>
              </p>
            </div>
          </div>

          <img src={spendGraph} alt="" />
        </div>
        <div id="spending-summary">
          <p>
            You spent <span>18% less</span> on party this month. Keep it up! 😉
          </p>
        </div>

        <div id="recent-expenses">
          <h1 style={{ paddingBottom: "1rem" }}>Recent Expenses</h1>

          <div id="expense-list">
            <div id="expense-list-title">
              <h1 id="expense-list-price" className="text-price">
                $35.20
              </h1>
              <p id="expense-list-category">Eat-out</p>
            </div>

            <div id="expense-list-btn">
              <img src={arrowInCircleGrey} alt="Arrow in circle" />
              <p id="expense-date">Today, 12:42PM</p>
            </div>
          </div>

          <div id="expense-list">
            <div id="expense-list-title">
              <h1 id="expense-list-price" className="text-price">
                $117.95
              </h1>
              <p id="expense-list-category">Hydro bill</p>
            </div>

            <div id="expense-list-btn">
              <img src={arrowInCircleGrey} alt="Arrow in circle" />
              <p id="expense-date">Yesterday, 8:09PM</p>
            </div>
          </div>
        </div>

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

        {/* Needs Implementation
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

        <div id="rewards-section">
          <div id="challenge-progress">
            <div id="logged-in">
              <p>You've logged in</p>
              <span style={{ fontSize: "36px" }}>🔥</span>
            </div>

            <div id="streak">
              <h1>15</h1>
              <p>days in a row!</p>
            </div>
          </div>

          <div id="earned-points">
            <div id="coins-btn">
              <img src={coinsIcon} alt="Reward coins" />
              <img src={rightArrow} alt="Right arrow" />
            </div>

            <h2>Earned Points</h2>
            <h1>
              230 <span>pt</span>
            </h1>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}
