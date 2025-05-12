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

export interface DB_Rewards {           // id = 0 (new), id = n (edit)
    id: number;
    data: {
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
    }
};

export interface DB_Rewards_Delete {
    id: number;                         // id = -1
    idForDelete: number;                // existing id needs to be deleted
}

export interface DB_Rewards_Response_New {
    id: number                          // created id from backend
}

export interface DB_User {
    tracking: DB_Tracking[];
    budget: DB_Budget;
    rewards: DB_Rewards;
}