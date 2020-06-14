import React from 'react';
import * as Store from './store';
import { getUser } from './utils/getUser';
import AuthStore from './store/AuthStore';
import { MembersStore } from './store/MembersStore';
import { IncomeStore } from './store/IncomeStore';
import { WithrawalStore } from './store/withdrawalStore';

const ContextProvider: React.FC = (props) => {
    const user = getUser();
    const membersStore = new MembersStore();
    const incomeStore = new IncomeStore();
    const withdrawalStore = new WithrawalStore();
    const authStore = new AuthStore(user, membersStore, incomeStore, withdrawalStore);

    return (
        <Store.AuthContext.Provider value={authStore}>
            <Store.MembersContext.Provider value={membersStore}>
                <Store.IncomeContext.Provider value={incomeStore}>
                    <Store.WithdrawalContext.Provider value={withdrawalStore}>
                    {props.children}
                    </Store.WithdrawalContext.Provider>
                </Store.IncomeContext.Provider>
            </Store.MembersContext.Provider>
        </Store.AuthContext.Provider>
    );
};

export default ContextProvider;