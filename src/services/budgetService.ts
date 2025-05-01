import { userDataService } from "./userDataService";

export class BudgetService {
    public getBudgetData() {
        return userDataService.userData?.budget;
    }

    public saveBudgetData() {
        userDataService.saveUserData("budget");
    }
}

export const budgetService = new BudgetService();