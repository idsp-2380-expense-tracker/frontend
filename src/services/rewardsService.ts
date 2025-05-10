import { DB_Rewards } from "../interfaces/dbStructure";
import { ChallengeType } from "../interfaces/types";
import { ApiService } from "./apiService";
import { userDataService } from "./userDataService";

export class RewardsService extends ApiService {
    public getRewardsData() {
        return userDataService.userData?.rewards;
    }

    public async saveRewardsData(payload: Partial<DB_Rewards>) {
        await userDataService.saveUserData("rewards", payload);
    }

    public async collectPoints(type: ChallengeType) {
        await this.postRaw("rewards", { type });
    }
}

export const rewardsService = new RewardsService();