import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
// Image Sources
import insightIcon from "../../assets/Party.svg";
import rightArrow from "../../assets/right_arrow.svg";
import spendGraph from "../../assets/spending-graph.svg";

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
      </div>
      <NavBar />
    </>
  );
}
