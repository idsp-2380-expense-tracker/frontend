export type TrackingData = {
    category: string;
    paymentMethod: string;
    amount: number;
    dateOfPayment: string;
    repeat: boolean;
    title: string;
    note: string;
    fk_userData: number;
};

export type BudgetData = {
    age: number;
    goalAmount: number;
    fk_userData: number;
    period: {
        income: number;
        periodRange: string;
        fk_budgetData: number;
    };
    distribution: {
        needs: number;
        wants: number;
        save: number;
        fk_budgetData: number;
    };
};

export type RewardsData = {
    points: number;
    fk_userData: number;
};

export interface UserData {
    tracking: TrackingData[];
    budget: BudgetData[];
    rewards: RewardsData[];
}