import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './style.scss';
import Logo from './logo';
const { Sider } = Layout;

SiderContainer.propTypes = {};

function SiderContainer(props) {
  const [collapsed, setCollapsed] = useState(false);
  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Logo collapsed={collapsed} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/books">Books</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/transactions">Transactions</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderContainer;
