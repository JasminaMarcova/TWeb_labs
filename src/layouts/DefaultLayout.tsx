import {Layout, Menu, Button, theme} from "antd";
import React, {useState} from "react";
import {
    LogoutOutlined,
    PieChartOutlined,
    PlusCircleOutlined,
    FieldTimeOutlined,
    ClearOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {NavLink} from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

function clearLocalStorage() {
    localStorage.clear()
    window.location.reload();
}

const items: MenuItem[] = [
    getItem((<NavLink to="/">Films</NavLink>), '1', <PieChartOutlined />),
    getItem((<NavLink to="/film/new">New film</NavLink>), '2', <PlusCircleOutlined />),
    getItem((<NavLink to="/history">History</NavLink>), '3', <FieldTimeOutlined />),
    getItem((<Button ghost={true} style={{border: "none"}} onClick={clearLocalStorage}>Clear storage</Button>), '4', <ClearOutlined />),
    getItem((<NavLink to="/logout">Logout</NavLink>), '5', <LogoutOutlined />),
];

const DefaultLayout = ({children}:any) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>CR-203 Jasmina Marcova ©2023</Footer>
            </Layout>
        </Layout>)
}

export default DefaultLayout;