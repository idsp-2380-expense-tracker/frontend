import { UserData } from "../types/dbStructure";
import { ApiService } from "./apiService";

export class UserDataService extends ApiService {
    private _userData: UserData | null = null;

    public get userData(): UserData | null {
        return this._userData;
    }

    public async fetchUserData(): Promise<void> {
        this._userData = (await super.getData()) as UserData;
        console.log(this._userData);
    }

    public clearCache(): void {
        this._userData = null;
    }
}

export const userDataService = new UserDataService();