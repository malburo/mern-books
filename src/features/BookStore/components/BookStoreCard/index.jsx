import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './style.scss';
BookStoreCard.propTypes = {
  bookPictureUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nameSeller: PropTypes.string.isRequired,
};

function BookStoreCard(props) {
  const {
    bookPictureUrl,
    title,
    description,
    bookId,
    handleDeleteBook,
  } = props;
  return (
    <Card
      hoverable
      style={{ width: 260 }}
      cover={
        <img
          alt="example"
          src={bookPictureUrl}
          style={{ height: 160, objectFit: 'cover' }}
        />
      }>
      <Meta title={title} description={description} />
      <div className="book-store-card__button">
        <Button type="primary">Edit</Button>
        <Button type="danger" onClick={handleDeleteBook(bookId)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default BookStoreCard;
