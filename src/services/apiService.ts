import axios from "axios";
import { DB_User } from "../interfaces/dbStructure";

export type TokenGetter = () => Promise<string | null>;

export class ApiService {
  private isHosted: boolean = import.meta.env.VITE_IS_HOSTED === "true";
  private apiBase: string = import.meta.env.VITE_API_BASE;

  private static getToken: TokenGetter = async () => null;
  public static setToken(tokenGetter: TokenGetter) { ApiService.getToken = tokenGetter; }

  protected async getData() {
    const token = await ApiService.getToken();
    const path = this.isHosted
      ? `${this.apiBase}/user/data`
      : "/fakeDB.json";

    const headers = this.isHosted && token
      ? { Authorization: `Bearer ${token}` }
      : undefined;

    try {
      const response = await axios.get(path, { headers });
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch userData (${error})`);
    }
  }

  protected async postData<K extends keyof DB_User>(endpoint: K, payload: DB_User[K]) {
    if (!this.isHosted) return;

    const headers = await this.checkToken();
    const path = `${this.apiBase}/${endpoint}`;

    try {
      const response = await axios.post(path, payload, { headers });
      return response.data;
    } catch (error) {
      console.error(`Failed to post to ${endpoint} (${error})`);
    }
  }

  protected async postRaw(path: string, payload: any) {
    const headers = await this.checkToken();

    try {
      const response = await axios.post(`${this.apiBase}/${path}`, payload, { headers });
      return response.data;
    } catch (error) {
      console.error(`Failed to post to ${path} (${error})`);
    }
  }

  private async checkToken() {
    const token = await ApiService.getToken();
    if (!token) throw new Error("No auth token available");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    return headers;
  }
}
