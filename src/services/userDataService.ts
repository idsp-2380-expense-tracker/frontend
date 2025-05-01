import { UserData } from "../types/dbStructure";
import { ApiService } from "./apiService";

export class UserDataService extends ApiService {
    private _userData: UserData | null = null;

    public get userData(): UserData | null {
        return this._userData;
    }

    public async fetchUserData(): Promise<void> {
        this._userData = await super.getData();
        console.log("User data:", this._userData);
    }

    public async saveUserData<K extends keyof UserData>(endpoint: K): Promise<void> {
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
    }
}

export const userDataService = new UserDataService();