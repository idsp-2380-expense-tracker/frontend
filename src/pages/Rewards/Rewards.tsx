import dayjs from "dayjs";
import NavBar from "../../components/NavBar";
import { rewardsService } from "../../services/rewardsService";
import { calcTotalDaysInMonth, formatOffsetDate } from "../../utils/helpers";
import LoginChallenge, { Status } from "./RewardsLoginChallenge";

export default function Rewards() {
  const rewardsData = rewardsService.getRewardsData()!;
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

  return (
    <>
      <div>
        IMAGE
        <div>
          <p>Points Earned</p>
          <h1>{userPoints}</h1>
        </div>
      </div>

      <h2>Challenges</h2>

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
        onCollect={async () => await rewardsService.collectPoints("daily")}
      />

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
        onCollect={async () => await rewardsService.collectPoints("weekly")}
      />

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
        onCollect={async () => await rewardsService.collectPoints("monthly")}
      />

      <NavBar />
    </>
  );
}
