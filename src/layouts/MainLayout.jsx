import { Breadcrumb, Layout } from 'antd';
import FooterContainer from 'components/Footer';
import HeaderContainer from 'components/Header';
import SiderContainer from 'components/Sider';
import React from 'react';
const { Content } = Layout;

MainLayout.propTypes = {};
function MainLayout(props) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderContainer />
      <Layout className="site-layout">
        <HeaderContainer />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <FooterContainer />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
