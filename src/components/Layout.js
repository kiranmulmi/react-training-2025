import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from "react-router";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
  DashboardOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { UserContext } from '../context/user.context';
import { showSuccessToast } from '../utils/toastify.util';

const { Header, Sider, Content } = Layout;

const CustomLayout = () => {
  const { _user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin  = localStorage.getItem('is_login');
    if (isLogin !== '1') {
      navigate('/admin/login');
    }
  }
  , []);
  const handleLogoutClick = () => {
    localStorage.setItem('is_login', 0);
    showSuccessToast('Logout successful');
    navigate('/admin/login');
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" >
            <img src="https://www.virinchicollege.edu.np/storage/site/941680252040.png" alt="logo" style={{height: 90, padding: 25}} />
          </div>
          <div style={{color: "#ffffff", padding: 30}}>{_user?.email}</div>
          <Menu
            theme="dark"
            mode="inline"
            items={[
              {
                key: '1',
                icon: <DashboardOutlined />,
                label: 'Dashboard',
                onClick: () => navigate('/admin/dashboard'),
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'Users',
                onClick: () => navigate('/admin/users'),
              },
              {
                key: '3',
                icon: <SettingOutlined />,
                label: 'Settings',
                onClick: () => navigate('/admin/settings'),
              },
              {
                key: '4',
                icon: <LogoutOutlined />,
                label: 'Logout',
                onClick: () => handleLogoutClick(),
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default CustomLayout;