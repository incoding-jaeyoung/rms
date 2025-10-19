'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Select, Checkbox, Space } from 'antd';
import { CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';

interface NewNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function NewNotices({ open, onClose }: NewNoticesProps) {
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
      title="Add New Notice"
      size="default"
      confirmText="Register"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full">
          <Space size={20}>
            <Form.Item name="group" label="Group" className="w-[190px]">
              <Select placeholder="">
                <Select.Option value="">select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="branch" label="Branch" className="w-[190px]">
              <Select placeholder="">
                <Select.Option value="">select1</Select.Option>
              </Select>
            </Form.Item>
          </Space>
          <Form.Item name="name" label="Title">
            <Input placeholder="" />
          </Form.Item>
          {/* 텍스트 영역 */}
          <Form.Item label="Content">
            <div className="rounded-lg border border-gray-200 h-[350px] overflow-hidden">
              WYSIWYG Editor 영역
            </div>
          </Form.Item>
          <div className="flex flex-col gap-3">
            <Form.Item name="showAsPopup" valuePropName="checked">
              <Checkbox>Show as popup on login</Checkbox>
            </Form.Item>
            <Form.Item name="pinAsImportant" valuePropName="checked">
              <Checkbox>Pin as Important Notice</Checkbox>
            </Form.Item>
          </div>
        </Space>
      </Form>
    </Modal>
  );
}
