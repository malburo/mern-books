import { Breadcrumb, Layout } from 'antd';
import FooterContainer from 'components/Footer';
import HeaderContainer from 'components/Header';
import SiderContainer from 'components/Sider';
import NotFound from 'components/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';

const Books = React.lazy(() => import('features/Books'));
const Transactions = React.lazy(() => import('features/Transactions'));

const { Content } = Layout;

function App() {
  return (
    <div className="books-app">
      <BrowserRouter>
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
                <Suspense fallback={<div>Loading ...</div>}>
                  <Switch>
                    <Redirect exact from="/" to="/books" />
                    <Route path="/books" component={Books} />
                    <Route path="/transactions" component={Transactions} />
                    <Route path="/shops" component={Books} />
                    <Route component={NotFound} />
                  </Switch>
                </Suspense>
              </div>
            </Content>
            <FooterContainer />
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
