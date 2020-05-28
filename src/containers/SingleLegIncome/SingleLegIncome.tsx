import React from 'react';
import { Table, Divider } from 'antd';

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

    const data: any = [];

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>Single Leg Members</Divider>
            <Table columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default SingleLegIncome;