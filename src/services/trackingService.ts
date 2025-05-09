import { DB_Tracking } from "../interfaces/dbStructure";
import { ApiService } from "./apiService";
import { userDataService } from "./userDataService";

export class TrackingService extends ApiService {
    public getTrackingData() {
        return userDataService.userData?.tracking;
    }

    public async saveTrackingData(payload: Partial<DB_Tracking>) {
        await this.postRaw("tracking", payload);
    }
}

export const trackingService = new TrackingService();