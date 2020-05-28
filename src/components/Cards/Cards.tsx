import React, { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { useStore } from '../../utils/hooks';
import { AuthContext, MembersContext, LevelIncomeContext } from '../../store';
import { observer } from 'mobx-react-lite';

const Cards: React.FC = () => {
    const authStore = useStore(AuthContext);
    const membersStore = useStore(MembersContext);
    const levelIncomeStore = useStore(LevelIncomeContext);

    useEffect(() => {
        async function loadAll() {
            if (membersStore.directs.length === 0) {
                await membersStore.loadDirect();
            }
            if (membersStore.dowlines.length === 0) {
                await membersStore.loadDownline();
            }
            if (levelIncomeStore.levelIncomes.length === 0) {
                await levelIncomeStore.loadLevelIncomes();
            }
        }
        loadAll();
        // eslint-disable-next-line
    }, []);

    let totalIncome = levelIncomeStore.levelIncomes.length !== 0
        ? levelIncomeStore.levelIncomes
            .map(i => i.amount)
            .reduce((a, b) => a + b)
        : 0;

    return (
        <Row className='row' gutter={[16, 24]} style={{background: '#f0f2f5'}}>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="Dierct Members"
                    extra={<Link to='/direct'>View</Link>}
                    hoverable
                >
                    <p>{membersStore.directs.length}</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="My Downline"
                    extra={<Link to='/downline'>View</Link>}
                    hoverable
                >
                    <p>{membersStore.dowlines.length}</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="Level Income"
                    extra={<Link to='/level-incomes'>View</Link>}
                    hoverable
                >
                    <p>{levelIncomeStore.levelIncomes.length}</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="My Walet"
                    hoverable
                >
                    <p>{authStore.user?.balance}</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="Single-leg Members"
                    hoverable
                >
                    <p>Unavailable</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="ROI Income"
                    hoverable
                >
                    <p>Unavailable</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="Auto-Pull Income"
                    hoverable
                >
                    <p>Unavailable</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="Total Withdrawl"
                    hoverable
                >
                    <p>Unavailable</p>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    size="small"
                    title="Total Income"
                    hoverable
                >
                    <p>{totalIncome}</p>
                </Card>
            </Col>
        </Row>
    );
};

export default observer(Cards);