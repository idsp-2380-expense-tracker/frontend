import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SpendingStatsBar from "../../components/SpendingStatsBar";
import ArticleCarousel from "../../components/ArticleCarousel";
// Image Source
import insightIcon from "../../assets/party.svg";
import rightArrow from "../../assets/right_arrow.svg";
import arrowInCircleGrey from "../../assets/arrow_in_circle_grey.svg";
import coinsIcon from "../../assets/reward_icon.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home-layout">
        <section id="insights">
          <div id="insights-title">
            <img src={insightIcon} alt="Insight icon" id="insightIcon" />
            <span>Check your March insights! </span>
          </div>
          <img src={rightArrow} alt="Right arrow" />
        </section>

        <section id="spending-limit">
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

          <SpendingStatsBar />
        </section>

        <section id="spending-summary">
          <p>
            You spent <span>18% less</span> on party this month. Keep it up! 😉
          </p>
        </section>

        <section id="recent-expenses">
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
