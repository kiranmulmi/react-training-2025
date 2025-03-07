import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const CustomLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin  = localStorage.getItem('is_login');
    if (isLogin !== '1') {
      navigate('/login');
    }
  }
  , []);
  const handleLogoutClick = () => {
    localStorage.setItem('is_login', 0);
    navigate('/login');
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Users',
                onClick: () => navigate('/admin/users'),
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Dashboard',
                onClick: () => navigate('/admin/dashboard'),
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Settings',
                onClick: () => navigate('/admin/settings'),
              },
              {
                key: '4',
                icon: <UploadOutlined />,
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