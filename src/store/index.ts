import {createContext} from 'react';
import AuthStore from './AuthStore';
import { MembersStore } from './MembersStore';
import { LevelIncomeStore } from './LevelIncomeStore';

export const AuthContext = createContext<AuthStore | undefined>(undefined);
export const MembersContext = createContext<MembersStore | undefined>(undefined);
export const LevelIncomeContext = createContext<LevelIncomeStore | undefined>(undefined);