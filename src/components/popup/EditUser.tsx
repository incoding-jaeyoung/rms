'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Radio, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

interface EditUserProps {
  open: boolean;
  onClose: () => void;
}

export default function EditUser({ open, onClose }: EditUserProps) {
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
      title="Edit User Information"
      size="small"
      confirmText="Save Changes"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <div className="w-full flex justify-between gap-4">
            <Form.Item name="group" label="Group" className="w-full">
              <Select placeholder="">
                <Select.Option value="">select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="branch" label="Branch" className="w-full">
              <Select placeholder="">
                <Select.Option value="">select1</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item name="userName" label="User Name">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="userStatus" label="User Status">
            <Radio.Group>
              <Radio value="enable">Enable</Radio>
              <Radio value="disable">Disable</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="w-full flex justify-between gap-4">
            <Form.Item name="firstName" label="First Name" className="w-full">
              <Select placeholder="">
                <Select.Option value="">select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" className="w-full">
              <Select placeholder="">
                <Select.Option value="">select1</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full flex justify-between gap-4">
            <Form.Item name="phoneNumber" label="Phone Number" className="w-full">
              <Select placeholder="">
                <Select.Option value="">select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="email" label="Email" className="w-full">
              <Select placeholder="">
                <Select.Option value="">select1</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </Space>
      </Form>
    </Modal>
  );
}
