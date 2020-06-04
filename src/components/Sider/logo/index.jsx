import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;
Logo.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

function Logo(props) {
  const { collapsed } = props;
  const logo = collapsed ? 'B' : 'Malburo';
  return (
    <div className="logo-malburo">
      <Title level={4}>{logo}</Title>
    </div>
  );
}

export default Logo;
