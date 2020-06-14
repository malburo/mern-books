import { Col, Row } from 'antd';
import React from 'react';
import BookCard from '../BookCard';
import { useSelector } from 'react-redux';
BookList.propTypes = {};

function BookList(props) {
  const books = useSelector(state => state.books);
  const booksList = books.map(book => {
    const { bookPictureUrl, title, description, _id } = book;
    return (
      <BookCard
        bookPictureUrl={bookPictureUrl}
        title={title}
        description={description}
        nameSeller={book.sellerId.fullname}
        key={_id}
      />
    );
  });
  return (
    <Row>
      <Col span={6}>{booksList}</Col>
    </Row>
  );
}

export default BookList;
