'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const { TextArea } = Input;

interface NewErrorCodeProps {
  open: boolean;
  onClose: () => void;
}

export default function NewErrorCode({ open, onClose }: NewErrorCodeProps) {
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
      title="Add New Error Code"
      size="small"
      confirmText="Register"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <Form.Item name="moduleName" label="Module" className="w-[190px]">
            <Select placeholder="">
              <Select.Option value="01 Card">01 Card</Select.Option>
              <Select.Option value="02 Receipt">02 Receipt</Select.Option>
              <Select.Option value="03 Network">03 Network</Select.Option>
              <Select.Option value="33 Cash Recycle">33 Cash Recycle</Select.Option>
              <Select.Option value="51 Camera">51 Camera</Select.Option>
              <Select.Option value="99 Software">99 Software</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="errorCode" label="Error Code" className="w-[190px]">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea rows={3} placeholder="" />
          </Form.Item>
          <Form.Item name="resolutionMethod" label="Resolution Method">
            <TextArea rows={3} placeholder="" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
