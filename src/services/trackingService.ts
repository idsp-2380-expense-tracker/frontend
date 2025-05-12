import { DB_Rewards_Delete, DB_Tracking } from "../interfaces/dbStructure";
import { ApiService } from "./apiService";
import { userDataService } from "./userDataService";

export class TrackingService extends ApiService {
    public getTrackingData() {
        return userDataService.userData?.tracking;
    }

    public async saveTrackingData(payload: Partial<DB_Tracking>) {
        await userDataService.saveUserData("tracking", payload);
    }

    public async deleteTrackingData(payload: DB_Rewards_Delete) {
        await userDataService.deleteTrackingData(payload);
    }
}

export const trackingService = new TrackingService();