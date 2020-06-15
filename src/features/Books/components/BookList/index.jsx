import { Col, Row } from 'antd';
import React from 'react';
import BookCard from '../BookCard';
BookList.propTypes = {};

function BookList(props) {
  const { books } = props;
  const booksList = books.map(book => {
    const { bookPictureUrl, title, description, _id } = book;
    return (
      <Col span={6}>
        <BookCard
          bookPictureUrl={bookPictureUrl}
          title={title}
          description={description}
          nameSeller={book.sellerId.fullname}
          key={_id}
        />
      </Col>
    );
  });
  return <Row>{booksList}</Row>;
}

export default BookList;
