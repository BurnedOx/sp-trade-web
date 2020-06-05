export interface BankDetails {
    accountName: string;
    bankName: string;
    accountNumber: number;
    isfc: number;
    accountType: string;
}

export interface User {
    id: string;
    name: string;
    mobile: number;
    sponsoredBy: Pick<User, 'id' | 'name'> | null;
    epinId: string | null;
    bankDetails: BankDetails | null;
    panNumber: number | null;
    roll: 'user' | 'admin';
    status: 'active' | 'inactive';
    activatedAt: Date | null;
    balance: number;
    rank: string | null;
    updatedAt: Date;
    createdAt: Date;
    token: string;
}

export interface Member {
    id: string;
    name: string;
    level: number;
    status: 'active' | 'inactive';
    activatedAt: Date | null;
    createdAt: Date;
}

export interface SingleLeg {
    id: string;
    name: string;
    activatedAt: string;
}

export interface Epin {
    id: string;
    owner: Pick<User, 'id' | 'name'> | null;
    updatedAt: Date;
    createdAt: Date;
}

export interface Income {
    id: string,
    ownerId: string,
    from: Pick<User, 'id' | 'name'>,
    level: number,
    amount: number,
    createdAt: Date
}

export interface ROI {
    id: string;
    credit: number;
    currentBalance: number;
    rank: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface RegistrationDTO {
    name: string;
    mobile: number;
    password: string;
    sponsorId: string;
}

export interface LoginDTO {
    userId: string;
    password: string;
}