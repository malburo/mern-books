import { Avatar, Layout, Badge } from 'antd';
import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import API from 'utils/api';
import { countCart } from 'features/Cart/cartSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const { Header } = Layout;
HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const count = useSelector(state => state.carts.bookId.length);
  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.jwtToken;
        if (token) {
          API.setToken(token);
        } else {
          history.push('/auth/login');
        }
        const response = await API.call('get', 'cart');
        dispatch(countCart(response.carts));
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);
  return (
    <Header
      className="site-layout-background header-container"
      style={{ padding: 0 }}>
      <Badge count={count} className="header__cart">
        <a href="#" className="header__cart-link" />
      </Badge>
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        className="header-container__avatar"
      />
    </Header>
  );
}

export default HeaderContainer;
