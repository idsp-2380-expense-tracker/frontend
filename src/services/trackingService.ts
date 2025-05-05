import { DB_Tracking } from "../interfaces/dbStructure";
import { userDataService } from "./userDataService";

export class TrackingService {
    public getTrackingData() {
        return userDataService.userData?.tracking;
    }

    public async saveTrackingData(payload: DB_Tracking[]) {
        await userDataService.saveUserData("tracking", payload);
    }
}

export const trackingService = new TrackingService();