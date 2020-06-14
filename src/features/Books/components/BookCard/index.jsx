import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

BookCard.propTypes = {
  bookPictureUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nameSeller: PropTypes.string.isRequired,
};

function BookCard(props) {
  const { bookPictureUrl, title, description, nameSeller } = props;
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <img
          alt="example"
          src={bookPictureUrl}
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
