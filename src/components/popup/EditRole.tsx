'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const { TextArea } = Input;

interface EditRoleProps {
  open: boolean;
  onClose: () => void;
}

export default function EditRole({ open, onClose }: EditRoleProps) {
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
      title="Edit Role"
      size="small"
      confirmText="Save Changes"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <Form.Item name="roleName" label="Role Name" className="w-[190px]">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="roleCategory" label="Role Category" className="w-[190px]">
            <Select placeholder="">
              <Select.Option value="Category">Category</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea rows={3} placeholder="" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
