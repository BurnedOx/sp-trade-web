import React from 'react';
import * as Store from './store';
import { getUser } from './utils/getUser';
import AuthStore from './store/AuthStore';
import { MembersStore } from './store/MembersStore';
import { LevelIncomeStore } from './store/LevelIncomeStore';

const ContextProvider: React.FC = (props) => {
    const user = getUser();
    const authStore = new AuthStore(user);
    const membersStore = new MembersStore();
    const levelIncomeStore = new LevelIncomeStore();

    return (
        <Store.AuthContext.Provider value={authStore}>
            <Store.MembersContext.Provider value={membersStore}>
                <Store.LevelIncomeContext.Provider value={levelIncomeStore}>
                    {props.children}
                </Store.LevelIncomeContext.Provider>
            </Store.MembersContext.Provider>
        </Store.AuthContext.Provider>
    );
};

export default ContextProvider;