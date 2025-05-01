import { userDataService } from "./userDataService";

export class RewardsService {
    public getRewardsData() {
        return userDataService.userData?.rewards;
    }

    public saveRewardsData() {
        userDataService.saveUserData("rewards");
    }
}

export const rewardsService = new RewardsService();