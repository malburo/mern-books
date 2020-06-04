import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space } from 'antd';

const { Column } = Table;
TransactionList.propTypes = {
  data: PropTypes.array,
};

TransactionList.defaultProps = {
  data: [],
};

const data = [
  {
    _id: '5ea91db36df37a026d6eb817',
    userId: '5ea58cf882aa501c38ca3770',
    bookId: '5ea64e1994a0de2bb4e83fab',
    userName: 'Tống Quốc Bảo',
    bookTitle: "You don't know jss",
    quantity: 2,
    isComplete: true,
  },
  {
    _id: '5ea91db36df37a026d6eb817',
    userId: '5ea58cf882aa501c38ca3770',
    bookId: '5ea64e1994a0de2bb4e83fab',
    userName: 'Độ mixi',
    bookTitle: 'HTML',
    quantity: 5,
    isComplete: false,
  },
  {
    _id: '5ea91db36df37a026d6eb817',
    userId: '5ea58cf882aa501c38ca3770',
    bookId: '5ea64e1994a0de2bb4e83fab',
    userName: 'Ngọc Trinh',
    bookTitle: 'CSS',
    quantity: 1,
    isComplete: 'false',
  },
];
function TransactionList(props) {
  return (
    <Table dataSource={data}>
      <Column title="Name" dataIndex="userName" key="username" />
      <Column title="Book" dataIndex="bookTitle" key="book" />
      <Column title="Quantity" dataIndex="quantity" key="quantity" />
      <Column
        title="Status"
        dataIndex="isComplete"
        key="status"
        render={(text, record) => (
          <Space size="middle">
            {record.isComplete ? (
              <Tag>Đã trả</Tag>
            ) : (
              <Tag color="blue">Đang mượn</Tag>
            )}
          </Space>
        )}
      />
    </Table>
  );
}

export default TransactionList;
