import { PeriodRange } from "./types";

export interface DB_Tracking {
    id: number;
    category: string;
    paymentMethod: string;
    amount: number;
    dateOfPayment: string;
    repeat: boolean;
    createdAt: string;
    userid: string;
};

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
    streakStartDate: string;
    dailyCollected: boolean;
    weeklyCollected: boolean;
    monthlyCollected: boolean;
    dailyLoginCount: number;
    weeklyLoginCount: number;
    monthlyLoginCount: number;
    createdAt: string;
    userid: string;
};

export interface DB_User {
    tracking: DB_Tracking[];
    budget: DB_Budget;
    rewards: DB_Rewards;
}