import { DB_Budget } from "../interfaces/dbStructure";
import { userDataService } from "./userDataService";

export class BudgetService {
    public getBudgetData(): DB_Budget | null {
        return userDataService.userData?.budget ?? null;
    }

    public async saveBudgetData(payload: Partial<DB_Budget>) {
        await userDataService.saveUserData("budget", payload);
    }

    public calculateDistribution(income: number
    ): Pick<DB_Budget, "needs" | "wants" | "save"> {
        return {
            needs: Math.round(income * 0.5),
            wants: Math.round(income * 0.3),
            save: Math.round(income * 0.2),
        };
    }
}

export const budgetService = new BudgetService();