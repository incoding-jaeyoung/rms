'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Radio, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

interface EditBranchProps {
  open: boolean;
  onClose: () => void;
}

export default function EditBranch({ open, onClose }: EditBranchProps) {
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
      title="Edit Branch Information"
      size="small"
      confirmText="Save Changes"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <Form.Item name="groupName" label="Group">
            <Select placeholder="">
              <Select.Option value="">Name</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="branchName" label="Branch Name">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="branchStatus" label="Branch Status">
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
