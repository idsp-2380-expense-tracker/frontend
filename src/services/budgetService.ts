import { BudgetData } from "../types/types";
import { ApiService } from "./apiService";

export class BudgetService extends ApiService {
    async getBudgetDataByUser(userId: string): Promise<BudgetData[]> {
        const data: BudgetData[] = await this.getData("budget");
        return data.filter(item => item.fk_userData.toString() === userId)
    }
}

export const budgetService = new BudgetService();