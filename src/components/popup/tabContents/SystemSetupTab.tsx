'use client';

import { Form, Input, Select, Space, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
export default function SystemSetupTab() {
  const [form] = Form.useForm();

  const handleSave = (values: unknown) => {
    console.log('System Setup saved:', values);
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
          <Form.Item name="systemVersion" label="System Version">
            <Input placeholder="Enter System Version" />
          </Form.Item>
          <Form.Item name="maintenanceMode" label="Maintenance Mode">
            <Select placeholder="Select Maintenance Mode">
              <Select.Option value="enabled">Enabled</Select.Option>
              <Select.Option value="disabled">Disabled</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="backupSchedule" label="Backup Schedule">
            <Input placeholder="Enter Backup Schedule" />
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
}
