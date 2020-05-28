import { observable, action } from 'mobx';
import { Income } from '../interfaces';
import Api from '../api';

export class LevelIncomeStore {
    @observable levelIncomes: Income[] = [];

    @action
    async loadLevelIncomes() {
        this.levelIncomes = await Api.getLevelIncomes();
    }

    @action
    clearStore() {
        this.levelIncomes = [];
    }
}