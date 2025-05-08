import dayjs from "dayjs";
import { DB_User } from "../interfaces/dbStructure";
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

    public async syncLoginStreak(user: any) {
        if (!user) return;

        const today = dayjs().format("YYYY-MM-DD");
        const payload = { date: today };

        await this.postRaw("user/login-streak", payload);
        await user.reload();
    }

    public async saveUserData<K extends keyof DB_User>(endpoint: K, partialPayload: Partial<DB_User[K]>) {
        const current = this._userData?.[endpoint];

        if (!current) {
            throw new Error(`No existing data found for endpoint: ${endpoint}`);
        }

        const fullPayload = {
            ...current,
            ...partialPayload
        };

        try {
            await this.postData(endpoint, fullPayload);
            this.updateLocalData(endpoint, fullPayload);
            console.log(`Saved ${endpoint} data successfully.`);
        } catch (error) {
            console.error(`Failed to save ${endpoint} data (${error})`);
        }
    }

    private updateLocalData<K extends keyof DB_User>(endpoint: K, payload: DB_User[K]) {
        if (this._userData) {
            this._userData[endpoint] = payload;
            console.log(`Local_Data_${endpoint} updated.`);
        }
    }

    public clearCache() {
        this._userData = null;
        this._initialized = false;
    }
}

export const userDataService = new UserDataService();