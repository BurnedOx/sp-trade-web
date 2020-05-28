import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BarChartOutlined, DashboardOutlined, StockOutlined, LogoutOutlined, SettingOutlined, BankOutlined } from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../../store';
import { useStore } from '../../utils/hooks';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav: React.FC<RouteComponentProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const authStore = useStore(AuthContext);

    const onCollapse = (collapsed: boolean) => setCollapsed(collapsed);

    const handleLogOut = () => {
        localStorage.removeItem('user');
        authStore.logout();
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className='logo'>SP Trade</div>
            <Menu theme='dark' defaultSelectedKeys={['Dashboard']} mode='inline'>
                <SubMenu key={'Home'} icon={<DashboardOutlined />} title='Home'>
                    <Menu.Item key='Dashboard' onClick={() => props.history.push('')}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key='Profile' onClick={() => props.history.push('/profile')}>Profile</Menu.Item>
                </SubMenu>
                <SubMenu key={'Business'} icon={<BarChartOutlined />} title='Business'>
                    <Menu.Item key='Direct' onClick={() => props.history.push('/direct')}>
                        Direct Members
                    </Menu.Item>
                    <Menu.Item key='Downline' onClick={() => props.history.push('/downline')}>
                        My Downline
                    </Menu.Item>
                    <Menu.Item key='SingleLeg' onClick={() => props.history.push('/single-leg')}>
                        Single Leg Members
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={'Payout'} icon={<StockOutlined />} title='Payout Details'>
                    <Menu.Item key='Level' onClick={() => props.history.push('/level-incomes')}>
                        Level Income Details
                    </Menu.Item>
                    <Menu.Item key='SingleLegIncome' onClick={() => props.history.push('/single-leg-incomes')}>
                        Single Leg Income Details
                    </Menu.Item>
                    <Menu.Item key='AutoPullIncome'>
                        Auto Pull Income Details
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={'Account'} icon={<BankOutlined />} title='Account'>
                    <Menu.Item key='History' onClick={() => props.history.push('/account-history')}>
                        Account History
                    </Menu.Item>
                    <Menu.Item key='WithdrawFund'>
                        Withdraw Fund
                    </Menu.Item>
                    <Menu.Item key='WithdrawReport'>
                        Withdraw Report
                    </Menu.Item>
                </SubMenu>
                <SubMenu key='Settings' icon={<SettingOutlined />} title='Settings'>
                    <Menu.Item key={'Log Out'} icon={<LogoutOutlined />} onClick={handleLogOut}>
                        Log Out
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default withRouter(SideNav);