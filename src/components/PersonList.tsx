import React from "react";
import { Table, Row, Col, Popconfirm, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const PersonList = ({ data, handleDelete }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
      width: "20%",
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
      width: "15%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      onFilter: (value, record) => record.gender === value,
      width: "20%",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
    },
    {
      align: "center" as "center",
      render: (text, record) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              danger
            />
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <Row style={{ background: "white" }}>
      <Col md={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 5 }}
          bordered
        />
      </Col>
    </Row>
  );
};
