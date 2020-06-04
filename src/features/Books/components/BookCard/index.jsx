import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

BookCard.propTypes = {
  bookCover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nameSeller: PropTypes.string.isRequired,
};

function BookCard(props) {
  const { bookCover, title, description, nameSeller } = props;
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <img
          alt="example"
          src={bookCover}
          style={{ height: 300, objectFit: 'contain' }}
        />
      }>
      <Meta title={title} description={description} />
      <p style={{ marginTop: 10, marginBottom: 10 }}>Người Bán: {nameSeller}</p>
      <Button type="primary" block>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
}

export default BookCard;
