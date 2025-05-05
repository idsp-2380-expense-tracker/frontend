import { DB_Rewards } from "../interfaces/dbStructure";
import { userDataService } from "./userDataService";

export class RewardsService {
    public getRewardsData() {
        return userDataService.userData?.rewards;
    }

    public async saveRewardsData(payload: DB_Rewards) {
        await userDataService.saveUserData("rewards", payload);
    }
}

export const rewardsService = new RewardsService();