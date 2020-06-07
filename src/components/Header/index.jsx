import { Avatar, Layout } from 'antd';
import React from 'react';
import './style.scss';
const { Header } = Layout;
HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  return (
    <Header
      className="site-layout-background header-container"
      style={{ padding: 0 }}>
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        className="header-container__avatar"
      />
    </Header>
  );
}

export default HeaderContainer;