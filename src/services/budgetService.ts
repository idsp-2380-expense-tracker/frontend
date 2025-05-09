import { DB_Budget } from "../interfaces/dbStructure";
import { PeriodRange } from "../interfaces/types";
import { round2 } from "../utils/helpers";
import { ApiService } from "./apiService";
import { userDataService } from "./userDataService";

export class BudgetService extends ApiService {
    public getBudgetData(): DB_Budget | null {
        return userDataService.userData?.budget ?? null;
    }

    public async saveBudgetData(payload: Partial<DB_Budget>) {
        await userDataService.saveUserData("budget", payload);
    }

    public calculateBudgetData(_income: number, period: PeriodRange
    ): Partial<DB_Budget> {
        const monthlyIncome = this.getMonthlyAmount(_income, period);
        return {
            income: monthlyIncome,
            periodRange: period,
            needs: round2(monthlyIncome * 0.5),
            wants: round2(monthlyIncome * 0.3),
            save: round2(monthlyIncome * 0.2)
        }
    }

    private getMonthlyAmount(income: number, period: PeriodRange): number {
        const factorMap: Record<PeriodRange, number> = {
            Weekly: 52 / 12,
            Biweekly: 26 / 12,
            Monthly: 1
        };
        return round2(income * factorMap[period]);
    }
}

export const budgetService = new BudgetService();