import React from "react";
import moment from "moment";
import {
  Form,
  Input,
  Button,
  Space,
  Row,
  DatePicker,
  Switch,
} from "antd";
import { ManOutlined, WomanOutlined } from "@ant-design/icons";
import "./PersonForm.css";

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 4 },
};

export const PersonForm = ({onFinish}) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      name: "Ruslan",
      gender: true,
      DoB: moment("1992-10-10", "YYYY-MM-DD"),
    });
  };

  return (
    <div className="site-layout-content">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter the name" />
        </Form.Item>
        <Form.Item label="* Date of Birth" style={{ marginBottom: 0 }}>
          <Form.Item
            name="DoB"
            style={{ display: "inline-block", width: 'calc(60% - 12px)' }}
            rules={[
              {
                type: "object",
                required: true,
                message: "Date of Birth is required",
              },
            ]}
          >
            <DatePicker defaultPickerValue={moment().subtract(20, "years")} />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "calc(33% - 12px)",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            Gender:
          </span>
          <Form.Item
            name="gender"
            valuePropName="checked"
            style={{ display: "inline-block" }}
          >
            <Switch
              className='rose'
              checkedChildren={<ManOutlined />}
              unCheckedChildren={<WomanOutlined />}
              defaultChecked
            />
          </Form.Item>
        </Form.Item>
        <Row justify="center">
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
                Fill form
              </Button>
            </Space>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};
