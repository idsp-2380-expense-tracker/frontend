export class ApiService {
    private isHosted: boolean = import.meta.env.VITE_IS_HOSTED === "true";
    private apiBase: string = import.meta.env.BASE_URL;

    protected async getData() {
        const path = this.isHosted
            ? `${this.apiBase}/userData`
            : `/fakeDB.json`;
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to fetch userData`);
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
