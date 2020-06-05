import React, { useEffect } from 'react';
import { Table, Divider } from 'antd';
import { useStore } from '../../utils/hooks';
import { IncomeContext } from '../../store';
import { observer } from 'mobx-react-lite';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'From Id',
        dataIndex: 'fromId',
        key: 'fromId',
    },
    {
        title: 'From Name',
        dataIndex: 'fromName',
        key: 'fromName',
    },
    {
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
];

const LevelIncome: React.FC = () => {
    const levelIncomeStore = useStore(IncomeContext);

    useEffect(() => {
        async function fetchMembers() {
            if (levelIncomeStore.levelIncomes.length === 0) {
                await levelIncomeStore.loadLevelIncomes()
            }
        }
        fetchMembers();
        // eslint-disable-next-line
    }, []);

    const data = levelIncomeStore.levelIncomes.map((income, i) => ({
        key: i,
        id: income.id,
        fromId: income.from.id,
        fromName: income.from.name,
        level: income.level,
        amount: income.amount,
        createdAt: new Date(income.createdAt).toUTCString()
    }));

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>Level Income Details</Divider>
            <Table columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default observer(LevelIncome);