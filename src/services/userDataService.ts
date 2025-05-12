import { DB_Rewards_Delete, DB_Rewards_Response_New, DB_Tracking, DB_User } from "../interfaces/dbStructure";
import { ApiService } from "./apiService";

export class UserDataService extends ApiService {
    private _userData: DB_User | null = null;
    private _initialized = false;

    public get userData(): DB_User | null { return this._userData; }
    public get isInitialized(): boolean { return this._initialized; }

    public async fetchUserData() {
        this._userData = await super.getData();

        this._userData = {
            tracking: this._userData?.tracking ?? [],
            budget: this._userData?.budget ?? {} as DB_User["budget"],
            rewards: this._userData?.rewards ?? {} as DB_User["rewards"],
        };

        this._initialized = true;
        console.log("User data:", this._userData);
    }

    // public async syncLoginStreak(user: any) {
    //     if (!user) return;

    //     const today = dayjs().format("YYYY-MM-DD");
    //     const payload = { date: today };

    //     await this.postRaw("user/login-streak", payload);
    //     await user.reload();
    // }

    public async saveUserData<K extends keyof DB_User>(endpoint: K, partialPayload: Partial<DB_User[K] | DB_Tracking>) {
        const current = this._userData?.[endpoint];

        if (!current) {
            throw new Error(`No existing data found for endpoint: ${endpoint}`);
        }

        const fullPayload = {
            ...current,
            ...partialPayload
        };

        try {
            if (endpoint === "tracking") {
                const payload = partialPayload as DB_Tracking;
                const isNew = payload.id === 0;

                const isHosted = import.meta.env.VITE_IS_HOSTED === "true";
                if (isNew) {
                    let newId: number;
                    if (!isHosted) {       // Random Id for Dev
                        newId = Math.floor(Math.random() * 100000) + 1;
                        console.log(newId);
                    } else {
                        const response: DB_Rewards_Response_New = await this.postRaw(endpoint, partialPayload);
                        newId = response.id;
                    }
                    payload.id = newId;
                }
                this.updateTrackingLocalData(payload, isNew);
            } else {
                await this.postData(endpoint, fullPayload);
                this.updateLocalData(endpoint, fullPayload);
            }
            console.log(`Saved ${endpoint} data successfully.`);
        } catch (error) {
            console.error(`Failed to save ${endpoint} data (${error})`);
        }
    }

    public async deleteTrackingData(payload: DB_Rewards_Delete) {
        await this.postRaw("tracking", payload);
        const trackingData = userDataService.userData?.tracking;
        if (trackingData) {
            userDataService.userData!.tracking = trackingData.filter(
                item => item.id !== payload.idForDelete
            );
        }
    }

    private updateLocalData<K extends keyof DB_User>(endpoint: K, payload: DB_User[K]) {
        if (this._userData) {
            this._userData[endpoint] = payload;
            console.log(`Local_Data_${endpoint} updated.`);
        }
    }

    private updateTrackingLocalData(payload: DB_Tracking, isNew: boolean) {
        const trackingData = this.userData?.tracking;
        if (trackingData) {
            if (isNew) {
                trackingData.push(payload);
            } else {
                const index = trackingData.findIndex(item => item.id === payload.id);
                trackingData[index] = payload;
            }
            console.log("Local_Data_tracking updated.");
        }
    }

    public clearCache() {
        this._userData = null;
        this._initialized = false;
    }
}

export const userDataService = new UserDataService();