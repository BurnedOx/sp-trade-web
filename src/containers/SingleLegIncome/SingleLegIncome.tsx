import React, { useEffect, useState } from 'react';
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
        title: 'Credit',
        dataIndex: 'credit',
        key: 'credit',
    },
    {
        title: 'Current Balance',
        dataIndex: 'current',
        key: 'current',
    },
    {
        title: 'Tr Date',
        dataIndex: 'trDate',
        key: 'trDate',
    },
    {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
    }
];

const SingleLegIncome: React.FC = () => {
    const incomeStore = useStore(IncomeContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function load() {
            if (incomeStore.roiIncomes.length === 0) {
                setLoading(true);
                try {
                    await incomeStore.loadRoiIncomes();
                } finally {
                    setLoading(false);
                }
            }
        }
        load();
        // eslint-disable-next-line
    }, []);

    const data = incomeStore.roiIncomes.map((roi, key) => {
        const { id, credit, currentBalance: current, createdAt, rank } = roi;
        return { key, id, credit, current, trDate: new Date(createdAt).toUTCString(), rank };
    });

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>Single Leg Incomes</Divider>
            <Table loading={loading} columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default observer(SingleLegIncome);