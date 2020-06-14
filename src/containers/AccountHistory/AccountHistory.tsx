import React from 'react';
import { Table, Divider } from 'antd';
import { observer } from 'mobx-react-lite';

const columns = [
    {
        title: 'Sl No',
        dataIndex: 'slNo',
        key: 'slNo',
    },
    {
        title: 'Tr Date',
        dataIndex: 'trDate',
        key: 'trDate',
    },
    {
        title: 'Credit',
        dataIndex: 'credit',
        key: 'credit',
    },
    {
        title: 'Debit',
        dataIndex: 'debit',
        key: 'debit',
    },
    {
        title: 'Current Balance',
        dataIndex: 'current',
        key: 'current',
    },
    {
        title: 'Remarks',
        dataIndex: 'remarks',
        key: 'remarks',
    },
];

const AccountHistory: React.FC = () => {

    const data: any = [];

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>Account History</Divider>
            <Table columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default observer(AccountHistory);