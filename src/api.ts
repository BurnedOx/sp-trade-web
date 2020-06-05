import axios, { AxiosInstance } from 'axios';
import { getUser } from './utils/getUser';
import { RegistrationDTO, User, LoginDTO, Member, Income, SingleLeg, ROI } from './interfaces';

export default abstract class Api {
    private static instance: AxiosInstance;

    static create() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_ENDPOINT
        });
        this.instance.interceptors.request.use((config) => {
            const user = getUser();
            if (user) {
                config.headers['x-userid'] = user.id;
                config.headers['Authorization'] = `Bearer ${user.token}`;
                config.headers['Content-Type'] = 'application/json';
            }
            return config;
        });

    }

    // Accounts Api

    static async register(data: RegistrationDTO): Promise<User> {
        return (await Api.instance.post('/accounts/register', data)).data;
    }

    static async login(data: LoginDTO): Promise<User> {
        return (await Api.instance.post('/accounts/login', data)).data;
    }

    static async activateAccount(id: string): Promise<User> {
        return (await Api.instance.put('/accounts/activate', { id })).data;
    }

    // Members Api

    static async getDirectMembers(): Promise<Member[]> {
        return (await Api.instance.get('/members/direct')).data;
    }

    static async getDownlines(): Promise<Member[]> {
        return (await Api.instance.get('/members/downline')).data;
    }

    static async getSingleLegs(): Promise<SingleLeg[]> {
        return (await Api.instance.get('/members/single-leg')).data;
    }

    // Incomes Api

    static async getLevelIncomes(): Promise<Income[]> {
        return (await Api.instance.get('/income')).data;
    }

    static async getROI(): Promise<ROI[]> {
        return (await Api.instance.get('/roi')).data;
    }
}

Api.create();