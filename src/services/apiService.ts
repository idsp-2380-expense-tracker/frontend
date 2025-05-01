import axios from "axios";

export class ApiService {
    private isHosted: boolean = import.meta.env.VITE_IS_HOSTED === "true";
    private apiBase: string = import.meta.env.BASE_URL;

    protected async getData() {
        const path = this.isHosted
            ? `${this.apiBase}/userData`
            : "/fakeDB.json";

        try {
            const response = await axios.get(path);
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch userData");
        }
    }

    public async postData(endpoint: string, payload: any) {
        if (!this.isHosted) return;

        const path = `${this.apiBase}/${endpoint}`;

        try {
            const response = await axios.post(path, payload, {
                headers: { "Content-Type": "application/json" },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to post to ${endpoint}`);
        }
    }
}
