import { DB_Budget } from "../interfaces/dbStructure";
import { userDataService } from "./userDataService";

export class BudgetService {
    public getBudgetData() {
        return userDataService.userData?.budget;
    }

    public async saveBudgetData(payload: DB_Budget[]) {
        await userDataService.saveUserData("budget", payload);
    }
}

export const budgetService = new BudgetService();