import { OnBackProps } from "../../interfaces/uiProps";
// Image Source
import backgroundBottom from "../../assets/backgrounds/background_bottom.png";
import backgroundTop from "../../assets/backgrounds/background_top.png";
import closeButtonIcon from "../../assets/close_button.svg";

export default function Insight({ onBack }: OnBackProps) {
  return (
    <div id="insights-container">
      <img src={backgroundBottom} alt="Background image with vegetables" />

      <div id="insights-top">
        <img src={backgroundTop} alt="Background image with pigs" />

        <img
          className="close-button"
          src={closeButtonIcon}
          alt="Close button icon"
          onClick={onBack}
        />

        <h1>Your March's Insights</h1>
        <p>Good job, Jane!</p>
        <p>You've saved $362.00 in March!</p>
        <p>It is a greate improvement. I'm so proud of you!</p>
      </div>

      <div id="insights-contents">
        <h1>Summary in numbers</h1>

        <h4 className="insights-subtitle">You saved</h4>
        <h2 className="insights-amount">$362.00</h2>

        <h4 className="insights-subtitle">You spent</h4>
        <h2 className="insights-amount">$1275.93</h2>

        <h4 className="insights-subtitle">Your total asset</h4>
        <h2 className="insights-amount">$9782.19</h2>

        <h2 id="top-3-cat">Top 3 Expense Categories</h2>

        <h4 className="insights-subtitle">Whole Foods Martet</h4>
        <h2 className="insights-amount">$405.62</h2>

        <h4 className="insights-subtitle">Palgong tea</h4>
        <h2 className="insights-amount">$178.09</h2>

        <h4 className="insights-subtitle">Michaels</h4>
        <h2 className="insights-amount">$170.20</h2>
      </div>
    </div>
  );
}
