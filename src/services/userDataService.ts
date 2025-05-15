import { DB_Tracking, DB_Tracking_Delete, DB_Tracking_Response_New, DB_User } from "../interfaces/dbStructure";
import { ApiService } from "./apiService";

const STORAGE_KEY = "userData";

export class UserDataService extends ApiService {
    private _initialized = false;

    public get isInitialized(): boolean { return this._initialized; }
    public get userData(): DB_User | null {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) as DB_User : null;
    }

    public async fetchUserData() {
        const fetched = await super.getData();
        const userData: DB_User = {
            tracking: fetched?.tracking ?? [],
            budget: fetched?.budget ?? {} as DB_User["budget"],
            rewards: fetched?.rewards ?? {} as DB_User["rewards"],
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        this._initialized = true;
        console.log("User data:", userData);
    }

    // public async syncLoginStreak(user: any) {
    //     if (!user) return;
    //
    //     const today = dayjs().format("YYYY-MM-DD");
    //     const payload = { date: today };
    //
    //     await this.postRaw("user/login-streak", payload);
    //     await user.reload();
    // }

    public async saveUserData<K extends keyof DB_User>(endpoint: K, partialPayload: Partial<DB_User[K] | DB_Tracking>) {
        const current = this.userData?.[endpoint];
        if (!current) {
            throw new Error(`No existing data found for endpoint: ${endpoint}`);
        }

        const fullPayload = {
            ...current,
            ...partialPayload
        } as DB_User[K];

        try {
            if (endpoint === "tracking") {
                const payload = partialPayload as DB_Tracking;
                const isNew = payload.id === 0;

                const isHosted = import.meta.env.VITE_IS_HOSTED === "true";

                if (isNew && !isHosted) {   // Random Id for Dev
                    payload.id = Math.floor(Math.random() * 100000) + 1;
                }

                const response = await this.postRaw(endpoint, payload);

                if (isNew && isHosted) {
                    payload.id = (response as DB_Tracking_Response_New).id;
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

    public async deleteTrackingData(payload: DB_Tracking_Delete) {
        await this.postRaw("tracking", payload);
        const data = this.userData;
        if (data) {
            const updated = data.tracking.filter(item => item.id !== payload.idForDelete);
            this.updateLocalData("tracking", updated as DB_User["tracking"]);
        }
    }

    private updateLocalData<K extends keyof DB_User>(endpoint: K, payload: DB_User[K]) {
        const data = this.userData;
        if (data) {
            const updated: DB_User = { ...data, [endpoint]: payload };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            console.log(`Local_Data_${endpoint} updated.`);
        }
    }

    private updateTrackingLocalData(payload: DB_Tracking, isNew: boolean) {
        const data = this.userData;
        if (data) {
            const tracking = [...data.tracking];
            if (isNew) {
                tracking.push(payload);
            } else {
                const idx = tracking.findIndex(item => item.id === payload.id);
                if (idx > -1) tracking[idx] = payload;
            }
            this.updateLocalData("tracking", tracking as DB_User["tracking"]);
            console.log("Local_Data_tracking updated.");
        }
    }

    public clearCache() {
        localStorage.removeItem(STORAGE_KEY);
        this._initialized = false;
    }
}

export const userDataService = new UserDataService();