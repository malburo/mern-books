import { Col, Row } from 'antd';
import React from 'react';
import BookCard from '../BookCard';
BookList.propTypes = {};

function BookList(props) {
  const book = [];
  return (
    <Row>
      <Col span={6}>
        <BookCard
          bookCover={book.bookCover}
          title={book.title}
          decription={book.decription}
          nameSeller={book.nameSeller}
        />
      </Col>
    </Row>
  );
}

export default BookList;
