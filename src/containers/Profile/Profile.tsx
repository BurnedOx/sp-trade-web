import React from 'react';
import { useStore } from '../../utils/hooks';
import { AuthContext } from '../../store';
import { Descriptions, Button } from 'antd';
import { observer } from 'mobx-react-lite';

const Profile: React.FC = () => {
    const authStore = useStore(AuthContext);
    const { user } = authStore;

    const handleLogOut = () => {
        localStorage.removeItem('user');
        authStore.logout();
    };

    return (
        <div>
            <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
                <Descriptions.Item label="Id">{user?.id}</Descriptions.Item>
                <Descriptions.Item label="Mobile">{user?.mobile}</Descriptions.Item>
                <Descriptions.Item label="Sponsored By Id">{user?.sponsoredBy?.id}</Descriptions.Item>
                <Descriptions.Item label="Sponsored BY">{user?.sponsoredBy?.name}</Descriptions.Item>
                <Descriptions.Item label="Status">{user?.status}</Descriptions.Item>
                <Descriptions.Item label="Rank">{user?.rank}</Descriptions.Item>
                <Descriptions.Item label="Activated At">
                    {user?.activatedAt ? new Date(user.activatedAt).toUTCString() : null}
                </Descriptions.Item>
                <Descriptions.Item label="Balance">{user?.balance}</Descriptions.Item>
                <Descriptions.Item label="D.O.J">
                    {user ? new Date(user.createdAt).toUTCString() : null}
                </Descriptions.Item>
                <Descriptions.Item label="Pan No.">{user?.panNumber}</Descriptions.Item>
            </Descriptions>

            <Descriptions title="Bank Details" layout="vertical">
                {
                    user?.bankDetails
                        ? <React.Fragment>
                            <Descriptions.Item label="Account Name">{user.bankDetails.accountName}</Descriptions.Item>
                            <Descriptions.Item label="Bank Name">{user.bankDetails.bankName}</Descriptions.Item>
                            <Descriptions.Item label="Account Number">{user.bankDetails.accountNumber}</Descriptions.Item>
                            <Descriptions.Item label="ISFC">{user.bankDetails.isfc}</Descriptions.Item>
                            <Descriptions.Item label="Account Type">{user.bankDetails.accountType}</Descriptions.Item>
                        </React.Fragment>
                        : <p>No Details Provided</p>
                }
            </Descriptions>
            <Button onClick={handleLogOut}>Logout</Button>
        </div>
    );
};

export default observer(Profile);