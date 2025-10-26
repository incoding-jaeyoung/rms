'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Radio, Upload, Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { useState } from 'react';
const { TextArea } = Input;
interface CollectLogFileProps {
  open: boolean;
  onClose: () => void;
}

export default function CollectLogFile({ open, onClose }: CollectLogFileProps) {
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState('');

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  const handleFileChange = (info: { file: { name: string } }) => {
    if (info.file) {
      setFileName(info.file.name);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title="Collect Log File"
      size="small"
      confirmText="Upload"
      cancelText="Cancel"
      confirmIcon={<img src="/icons/ico-upload-w.svg" alt="upload" className="w-5 h-5" />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <div className="flex items-center gap-4">
            <Form.Item name="group" label="Group" className="w-full" initialValue="ATEC">
              <Input placeholder="" disabled />
            </Form.Item>
            <Form.Item name="model" label="Model" className="w-full" initialValue="LC71">
              <Input placeholder="" disabled />
            </Form.Item>
          </div>
          <Form.Item
            name="terminalId"
            label="Terminal ID"
            className="w-[190px]"
            initialValue="192. 168. 1. 10"
          >
            <Input placeholder="" disabled />
          </Form.Item>
          <Form.Item name="logFilePath" label="Log File Path">
            <Input placeholder="" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
