import { Layout, Menu, theme } from 'antd';
import { NavLink } from 'react-router';
const { Header, Content, Footer } = Layout;

export const Landing = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo">
        <img src="https://www.virinchicollege.edu.np/storage/site/941680252040.png" alt="logo" style={{height: 90, padding: '30px 0', marginTop: 25}} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: 1,
              label: `Home`,
            },
            {
              key: 2,
              label: `About Us`,
            },

          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED <NavLink to="/admin/login">Admin Login</NavLink>
      </Footer>
    </Layout>
    </div>
  );
}