import React, { useEffect } from 'react';
import { Table, Divider } from 'antd';
import { useStore } from '../../utils/hooks';
import { MembersContext } from '../../store';

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
    const memberStore = useStore(MembersContext);

    useEffect(() => {
        async function load() {
            if (memberStore.singleLeg.length === 0) {
                await memberStore.loadSingleLeg();
            }
        }
        load();
        // eslint-disable-next-line
    }, []);

    const data = memberStore.singleLeg.map((m, key) => {
        const { id, name, activatedAt } = m;
        return { key, id, name, activatedAt: new Date(activatedAt).toUTCString() };
    })

    return (
        <React.Fragment>
            <Divider orientation="left" style={{ color: '#333' }}>Single Leg Members</Divider>
            <Table columns={columns} dataSource={data} scroll={{ x: '100%' }} />
        </React.Fragment>
    );
};

export default SingleLeg;