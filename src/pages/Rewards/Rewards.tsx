import dayjs from "dayjs";
import NavBar from "../../components/NavBar";
import { rewardsService } from "../../services/rewardsService";
import { calcTotalDaysInMonth, formatOffsetDate } from "../../utils/helpers";
import LoginChallenge, { Status } from "./RewardsLoginChallenge";
// Image Source
import { useEffect, useState } from "react";
import trophyIcon from "../../assets/trophy.svg";
import Header from "../../components/Header";

export default function Rewards() {
  const [rewardsData, setRewardsData] = useState(
    rewardsService.getRewardsData()!
  );
  const {
    points: userPoints = 0,
    dailyLoginCount = 0,
    weeklyLoginCount = 0,
    monthlyLoginCount = 0,
    dailyCollected,
    weeklyCollected,
    monthlyCollected,
    streakStartDate,
  } = rewardsData;

  const start = dayjs(streakStartDate);
  const tomorrow = formatOffsetDate(start, "day");
  const nextWeek = formatOffsetDate(start, "week");
  const nextMonth = formatOffsetDate(start, "month", 1);
  const daysInMonth = calcTotalDaysInMonth(start);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCollect = async (type: "daily" | "weekly" | "monthly") => {
    await rewardsService.collectPoints(type);
    const updated = rewardsService.getRewardsData();
    if (updated) {
      setRewardsData({ ...updated });
    }
  };

  return (
    <>
      <Header />
      <div id="rewards-container">
        <div id="rewards-header">
          <img src={trophyIcon} alt="Trophy icon" />
          <div id="points-earned">
            <p id="points-earned-title">Points Earned</p>
            <h1>{userPoints}</h1>
          </div>
        </div>

        <h2>CHALLENGES</h2>

        <div id="challenges-container">
          <div id="daily-login">
            <LoginChallenge
              type="daily"
              title="Daily Login"
              gain={10}
              current={dailyLoginCount}
              total={1}
              openUntil={tomorrow}
              status={
                dailyCollected
                  ? Status.Collected
                  : dailyLoginCount >= 1
                  ? Status.Ready
                  : Status.Incomplete
              }
              onCollect={handleCollect}
            />
          </div>

          <div id="weekly-streak">
            <LoginChallenge
              type="weekly"
              title="Weekly Streak"
              gain={300}
              current={weeklyLoginCount}
              total={7}
              openUntil={nextWeek}
              status={
                weeklyCollected
                  ? Status.Collected
                  : weeklyLoginCount >= 7
                  ? Status.Ready
                  : Status.Incomplete
              }
              onCollect={handleCollect}
            />
          </div>

          <div id="monthly-streak">
            <LoginChallenge
              type="monthly"
              title="Monthly Streak"
              gain={500}
              current={monthlyLoginCount}
              total={daysInMonth}
              openUntil={nextMonth}
              status={
                monthlyCollected
                  ? Status.Collected
                  : monthlyLoginCount >= daysInMonth
                  ? Status.Ready
                  : Status.Incomplete
              }
              onCollect={handleCollect}
            />
          </div>
        </div>

        <NavBar />
      </div>
    </>
  );
}
