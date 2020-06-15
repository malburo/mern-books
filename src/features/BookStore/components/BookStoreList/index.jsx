import { Col, Row } from 'antd';
import React from 'react';
import BookStoreCard from '../BookStoreCard';
BookStoreList.propTypes = {};

function BookStoreList(props) {
  const { books, handleDeleteBook } = props;
  const booksList = books.map(book => {
    const { bookPictureUrl, title, description, _id } = book;
    return (
      <Col span={6} style={{ marginTop: 20 }}>
        <BookStoreCard
          bookPictureUrl={bookPictureUrl}
          bookId={_id}
          title={title}
          description={description}
          nameSeller={book.sellerId.fullname}
          key={_id}
          handleDeleteBook={handleDeleteBook}
        />
      </Col>
    );
  });
  return <Row>{booksList}</Row>;
}

export default BookStoreList;
