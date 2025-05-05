import { DB_User } from "../interfaces/dbStructure";
import { ApiService } from "./apiService";

export class UserDataService extends ApiService {
    private _userData: DB_User | null = null;
    private _initialized = false;

    public get userData(): DB_User | null { return this._userData; }
    public get isInitialized(): boolean { return this._initialized; }

    public async fetchUserData(): Promise<void> {
        this._userData = await super.getData();
        this._initialized = true;
        console.log("User data:", this._userData);
    }

    public async saveUserData<K extends keyof DB_User>(endpoint: K): Promise<void> {
        if (!this._userData) return;

        const payload = this._userData[endpoint];
        if (!payload) {
            console.warn(`No data found for endpoint: ${endpoint}`);
            return;
        }

        try {
            await this.postData(endpoint, payload);
            console.log(`Saved ${endpoint} data successfully.`);
        } catch (error) {
            console.error(`Failed to save ${endpoint} data:`, error);
        }
    }

    public clearCache(): void {
        this._userData = null;
        this._initialized = false;
    }
}

export const userDataService = new UserDataService();