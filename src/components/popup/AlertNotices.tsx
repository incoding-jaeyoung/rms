'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space } from 'antd';
import { CloseCircleFilled, CheckCircleFilled, NotificationFilled } from '@ant-design/icons';
const { TextArea } = Input;

interface AlertNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function AlertNotices({ open, onClose }: AlertNoticesProps) {
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
      title="New Notice"
      size="default"
      confirmText="OK"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
      titleIcon={<NotificationFilled className="!w-5 !h-5" />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full">
          <Form.Item name="name" label="Title">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="notes" label="content">
            <TextArea rows={15} placeholder="new contets" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
