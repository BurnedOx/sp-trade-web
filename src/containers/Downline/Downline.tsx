import React, { useEffect, useState } from 'react';
import { Table, Divider } from 'antd';
import { useStore } from '../../utils/hooks';
import { MembersContext } from '../../store';
import { observer } from 'mobx-react-lite';

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
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Activated At',
        dataIndex: 'activatedAt',
        key: 'activatedAt',
    },
    {
        title: 'DOJ',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
];

const Downline: React.FC = () => {
    const membersStore = useStore(MembersContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMembers() {
            if (membersStore.dowlines.length === 0) {
                setLoading(true);
                try {
                    await membersStore.loadDownline();
                } finally {
                    setLoading(false);
                }
            }
        }
        fetchMembers();
        // eslint-disable-next-line
    }, []);

    const data = membersStore.dowlines.map((m, i) => ({
        key: i,
        ...m,
        activatedAt: m.activatedAt ? new Date(m.activatedAt).toUTCString() : null,
        createdAt: new Date(m.createdAt).toUTCString()
    }));

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>My Downline</Divider>
            <Table loading={loading} columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default observer(Downline);