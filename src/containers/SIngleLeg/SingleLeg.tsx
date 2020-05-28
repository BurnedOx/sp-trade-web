import React from 'react';
import { Table, Divider } from 'antd';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Activated At',
        dataIndex: 'activatedAt',
        key: 'activatedAt',
    }
];

const SingleLeg: React.FC = () => {

    const data: any = [];

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>Single Leg Members</Divider>
            <Table columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default SingleLeg;