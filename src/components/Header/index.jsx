import { Avatar, Layout, Badge, Popover, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import API from 'utils/api';
import { countCart } from 'features/Cart/cartSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { logoutSuccess } from 'features/Auth/AuthSlice';
const { Header } = Layout;
HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  const [visible, setVisible] = useState(false);
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

  const logout = () => {
    localStorage.removeItem('jwtToken');
    dispatch(logoutSuccess);
    history.push('/auth/login');
  };

  const handleVisibleChange = visible => {
    setVisible(visible);
  };
  return (
    <Header
      className="site-layout-background header-container"
      style={{ padding: 0 }}>
      <Badge count={count} className="header__cart">
        <a href="#" className="header__cart-link" />
      </Badge>

      <Popover
        content={<a onClick={logout}>logout</a>}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          className="header-container__avatar"
          type="primary"
        />
      </Popover>
    </Header>
  );
}

export default HeaderContainer;
