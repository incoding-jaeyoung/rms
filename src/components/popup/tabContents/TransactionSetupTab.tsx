'use client';

import { Form, Select, Checkbox, Space, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
export default function TransactionSetupTab() {
  const [form] = Form.useForm();

  const handleSave = (values: unknown) => {
    console.log('Transaction Setup saved:', values);
    // TODO: API 호출하여 데이터 저장
  };

  return (
    <div className="p-4">
      <Form form={form} layout="vertical" onFinish={handleSave}>
        <div className="flex justify-between items-center mb-2">
          <p className="flex items-center gap-1.5">
            <InfoCircleFilled />
            Please save your changes before clicking &quot;Preview Changes&quot;
          </p>
          <Button type="default" htmlType="submit">
            Save
          </Button>
        </div>
        <Space direction="vertical" size={20} className="w-full">
          <Form.Item name="encryption" label="Encryption">
            <Select placeholder="Select Encryption">
              <Select.Option value="aes256">AES-256</Select.Option>
              <Select.Option value="aes128">AES-128</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="authentication" label="Authentication" valuePropName="checked">
            <Checkbox>Enable Two-Factor Authentication</Checkbox>
          </Form.Item>
          <Form.Item name="accessLevel" label="Access Level">
            <Select placeholder="Select Access Level">
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
}
