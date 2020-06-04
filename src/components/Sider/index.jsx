import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
SiderLayout.propTypes = {};

function SiderLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/books">Books</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/transaction">Transactions</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link to="/users">Transactions</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default SiderLayout;
