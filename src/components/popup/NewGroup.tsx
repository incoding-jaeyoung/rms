'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Radio } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

interface NewGroupProps {
  open: boolean;
  onClose: () => void;
}

export default function NewGroup({ open, onClose }: NewGroupProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title="Add New Group"
      size="small"
      confirmText="Register"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <Form.Item name="groupName" label="Group Name">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="groupStatus" label="Group Status">
            <Radio.Group>
              <Radio value="enable">Enable</Radio>
              <Radio value="disable">Disable</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="contactPerson" label="Contact Person">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Phone Number">
            <Input placeholder="" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
