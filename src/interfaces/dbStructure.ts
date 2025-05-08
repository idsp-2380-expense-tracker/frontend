export interface DB_Tracking {
    id: number;
    category: string;
    paymentMethod: string;
    amount: number;
    dateOfPayment: string;
    repeat: boolean;
    title?: string;
    note?: string;
    createdAt: string;
    userid: string;
};

export type PeriodRange = "Weekly" | "Biweekly" | "Monthly";

export interface DB_Budget {
    id: number;
    periodRange: PeriodRange;
    income: number;
    needs: number;
    wants: number;
    save: number;
    createdAt: string;
    userid: string;
}

export interface DB_Rewards {
    id: number;
    points: number;
    createdAt: string;
    userid: string;
};

export interface DB_User {
    tracking: DB_Tracking[];
    budget: DB_Budget;
    rewards: DB_Rewards;
}