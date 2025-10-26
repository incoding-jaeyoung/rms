'use client';

import { Form, Input, Space, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
export default function CustomerSetupTab() {
  const [form] = Form.useForm();

  const handleSave = (values: unknown) => {
    console.log('Customer Setup saved:', values);
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
          <Form.Item name="ipAddress" label="IP Address">
            <Input placeholder="Enter IP Address" />
          </Form.Item>
          <Form.Item name="subnet" label="Subnet">
            <Input placeholder="Enter Subnet" />
          </Form.Item>
          <Form.Item name="gateway" label="Gateway">
            <Input placeholder="Enter Gateway" />
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
}
