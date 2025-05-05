import { DB_User } from "../interfaces/dbStructure";
import { ApiService } from "./apiService";

export class UserDataService extends ApiService {
    private _userData: DB_User | null = null;
    private _initialized = false;

    public get userData(): DB_User | null { return this._userData; }
    public get isInitialized(): boolean { return this._initialized; }

    public async fetchUserData() {
        this._userData = await super.getData();
        this._initialized = true;
        console.log("User data:", this._userData);
    }

    public async saveUserData<K extends keyof DB_User>(endpoint: K, payload: DB_User[K]) {
        if (!payload) {
            throw new Error(`No data found for endpoint: ${endpoint}`);
        }

        try {
            await this.postData(endpoint, payload);
            this.updateLocalData(endpoint, payload);
            console.log(`Saved ${endpoint} data successfully.`);
        } catch (error) {
            console.error(`Failed to save ${endpoint} data:`, error);
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