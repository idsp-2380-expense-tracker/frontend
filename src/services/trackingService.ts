import { useAuthService } from "./authService";
import { userDataService } from "./userDataService";

export class TrackingService {
    public getTrackingData() {
        return userDataService.userData?.tracking;
    }

    public async saveTrackingData() {
        const { getToken } = useAuthService();
        const token = await getToken();
        if (token) {
            await userDataService.saveUserData("tracking", token);
        } else {
            throw new Error("No auth token");
        }
    }
}

export const trackingService = new TrackingService();