import { useAuthService } from "./authService";
import { userDataService } from "./userDataService";

export class RewardsService {
    public getRewardsData() {
        return userDataService.userData?.rewards;
    }

    public async saveRewardsData() {
        const { getToken } = useAuthService();
        const token = await getToken();
        if (token) {
            await userDataService.saveUserData("rewards", token);
        } else {
            throw new Error("No auth token");
        }
    }
}

export const rewardsService = new RewardsService();