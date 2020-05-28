import { observable, action } from 'mobx';
import { Member } from '../interfaces';
import Api from '../api';

export class MembersStore {
    @observable directs: Member[] = [];
    @observable dowlines: Member[] = [];

    @action
    async loadDirect() {
        this.directs = await Api.getDirectMembers();
    }

    @action
    clearDirects() {
        this.directs = [];
    }

    @action
    async loadDownline() {
        this.dowlines = await Api.getDownlines();
    }

    @action
    async clearDownlines() {
        this.dowlines = [];
    }
}