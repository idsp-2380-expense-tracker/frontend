export class ApiService {
    private isHosted: boolean = import.meta.env.VITE_IS_HOSTED === "true";
    private apiBase: string = "https://backend-nqq1.onrender.com/api";

    protected async getData(endpoint: string) {
        const path = this.isHosted
            ? `${this.apiBase}/${endpoint}`
            : `/fakeDB_Model/fakeDB_${endpoint}.json`;
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
        return response.json();
    }

    // protected async postData(endpoint: string, payload: any) {
    //     const path = this.isHosted
    //         ? `${this.apiBase}/${endpoint}`
    //         : `/fakeDB_Model/fakeDB_${endpoint}.json`;
    //     const response = await fetch(path, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(payload),
    //     });
    //     if (!response.ok) throw new Error(`Failed to post to ${endpoint}`);
    //     return response.json();
    // }
}
