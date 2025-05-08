import NavBar from "../../components/NavBar";
import { DB_Rewards } from "../../interfaces/dbStructure";
import { rewardsService } from "../../services/rewardsService";
import { userDataService } from "../../services/userDataService";

export default function Rewards() {
  const handleClick = async () => {
    const newReward: Partial<DB_Rewards> = {
      points: 250,
    };

    try {
      await rewardsService.saveRewardsData(newReward);
      console.log("ewards updated to 250 points");
      console.log("Updated User data:", userDataService.userData);
    } catch (error) {
      console.error(`Failed to update rewards: ${error}`);
    }
  };

  return (
    <>
      <h1>TEST_REWARDS</h1>
      <button onClick={handleClick}>TEST_Set Rewards to 250</button>
      <NavBar />
    </>
  );
}
