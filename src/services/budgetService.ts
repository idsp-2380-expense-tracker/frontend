import { DB_Budget } from "../interfaces/dbStructure";
import { round2 } from "../utils/helpers";
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
            needs: round2(income * 0.5),
            wants: round2(income * 0.3),
            save: round2(income * 0.2),
        };
    }
}

export const budgetService = new BudgetService();