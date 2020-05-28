import { observable, action } from 'mobx';
import { User, RegistrationDTO, LoginDTO } from '../interfaces';
import Api from '../api';

export default class AuthStore {
    @observable user: User | null = null;

    constructor(user: User | null) {
        this.user = user;
    }

    @action
    async register(data: RegistrationDTO) {
        const user = await Api.register(data);
        this.user = user;
        return user;
    }

    @action
    async login(data: LoginDTO) {
        const user = await Api.login(data);
        this.user = user;
        return user;
    }

    @action
    async activate(id: string) {
        const user = await Api.activateAccount(id);
        this.user = user;
        return user;
    }

    @action
    logout() {
        this.user = null;
    }
}