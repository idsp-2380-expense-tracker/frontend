import dayjs from "dayjs";
import NavBar from "../../components/NavBar";
import { useAuthService } from "../../services/authService";
import { rewardsService } from "../../services/rewardsService";
import LoginChallenge, { Status } from "./RewardsLoginChallenge";

export default function Rewards() {
  const { user } = useAuthService();

  const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
  const nextWeek = dayjs().add(1, "week").startOf("week").format("YYYY-MM-DD");
  const nextMonth = dayjs().add(1, "month").startOf("month").format("YYYY-MM-DD");
  const daysInMonth = dayjs().daysInMonth();

  const userPoints = rewardsService.getRewardsData()?.points || 0;
  const monthlyLoginCount = Number(user?.publicMetadata.monthlyLoginCount) || 0;
  const weeklyLoginCount = Number(user?.publicMetadata.weeklyLoginCount) || 0;
  const dailyLoginCount = Number(user?.publicMetadata.dailyLoginCount) || 0;

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
        title="Daily Login (Monthly)"
        gain={500}
        current={monthlyLoginCount}
        total={daysInMonth}
        openUntil={nextMonth}
        status={monthlyLoginCount >= daysInMonth ? Status.Ready : Status.Incomplete}
      />

      <LoginChallenge
        title="Daily Login (Weekly)"
        gain={300}
        current={weeklyLoginCount}
        total={7}
        openUntil={nextWeek}
        status={weeklyLoginCount >= 7 ? Status.Ready : Status.Incomplete}
      />

      <LoginChallenge
        title="Daily Login"
        gain={10}
        current={dailyLoginCount}
        total={1}
        openUntil={tomorrow}
        status={dailyLoginCount >= 1 ? Status.Ready : Status.Incomplete}
      />

      <NavBar />
    </>
  );
}