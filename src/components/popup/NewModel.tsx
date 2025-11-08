'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Radio, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

interface NewModelProps {
  open: boolean;
  onClose: () => void;
}

export default function NewModel({ open, onClose }: NewModelProps) {
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
      title="Add New Model"
      size="small"
      confirmText="Register"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <Form.Item name="modelName" label="Model Name">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="manufacturer" label="Manufacturer">
            <Input placeholder="" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
