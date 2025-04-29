import { ApiService } from "./apiService";

class BudgetService extends ApiService {
    public getBudgetData() {
        return this.getData("budget");
    }
}

export const budgetService = new BudgetService();