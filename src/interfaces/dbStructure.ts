export interface DB_Tracking {
    id: number;
    userId: number;
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

export interface DB_Budget {
    id: number;
    userId: number;
    age: number;
    goalAmount: number;
    income: number;
    periodRange: string;
    needs: number;
    wants: number;
    save: number;
    createdAt: string;
    userid: string;
};

export interface DB_Rewards {
    id: number;
    userId: number;
    points: number;
    createdAt: string;
    userid: string;
};

export interface DB_User {
    tracking: DB_Tracking[];
    budget: DB_Budget[];
    rewards: DB_Rewards[];
}