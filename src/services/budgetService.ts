import { userDataService } from "./userDataService";

export class BudgetService {
    public getBudgetData() {
        return userDataService.userData?.budget;
    }
}

export const budgetService = new BudgetService();