import { userDataService } from "./userDataService";

export class TrackingService {
    public getTrackingData() {
        return userDataService.userData?.tracking;
    }

    public saveTrackingData() {
        userDataService.saveUserData("tracking");
    }
}

export const trackingService = new TrackingService();