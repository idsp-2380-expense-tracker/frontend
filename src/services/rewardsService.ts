import { DB_Rewards } from "../interfaces/dbStructure";
import { ChallengeType } from "../interfaces/types";
import { ApiService } from "./apiService";
import { userDataService } from "./userDataService";

export class RewardsService extends ApiService {
    public getRewardsData() {
        return userDataService.userData?.rewards;
    }

    // public async saveRewardsData(payload: Partial<DB_Rewards>) {
    //     await userDataService.saveUserData("rewards", payload);
    // }

    public async collectPoints(type: ChallengeType) {
        await this.postRaw("rewards", { type });

        const current = this.getRewardsData();
        if (!current) return;

        const updated: DB_Rewards = { ...current };
        let pointsToAdd = 0;

        switch (type) {
            case "daily":
                pointsToAdd = 10;
                updated.dailyCollected = true;
                break;
            case "weekly":
                pointsToAdd = 300;
                updated.weeklyCollected = true;
                break;
            case "monthly":
                pointsToAdd = 500;
                updated.monthlyCollected = true;
                break;
        }

        updated.points = (current.points ?? 0) + pointsToAdd;
        userDataService.updateLocalData("rewards", updated);
    }
}

export const rewardsService = new RewardsService();