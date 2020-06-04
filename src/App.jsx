import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import NotFound from 'components/NotFound';
import React, { useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';

const Books = React.lazy(() => import('features/Books'));
const Transactions = React.lazy(() => import('features/Transactions'));
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <div className="books-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/books">Books</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <Link to="/transactions">Transactions</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}>
                  <Switch>
                    <Redirect exact from="/" to="/books" />

                    <Route path="/books" component={Books} />
                    <Route path="/transactions" component={Transactions} />
                    <Route path="/shops" component={Books} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
