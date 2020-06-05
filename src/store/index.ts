import {createContext} from 'react';
import AuthStore from './AuthStore';
import { MembersStore } from './MembersStore';
import { IncomeStore } from './IncomeStore';

export const AuthContext = createContext<AuthStore | undefined>(undefined);
export const MembersContext = createContext<MembersStore | undefined>(undefined);
export const IncomeContext = createContext<IncomeStore | undefined>(undefined);