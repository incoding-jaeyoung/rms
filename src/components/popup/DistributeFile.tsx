'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Radio, Upload, Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { useState } from 'react';
const { TextArea } = Input;
interface DistributeFileProps {
  open: boolean;
  onClose: () => void;
}

export default function DistributeFile({ open, onClose }: DistributeFileProps) {
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState('');

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    console.log('파일 다운로드 시작');
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
      title="Distribute File"
      size="small"
      confirmText="Download"
      cancelText="Cancel"
      confirmIcon={<img src="/icons/ico-download-w.svg" alt="download" className="w-5 h-5" />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={20} className="w-full modal-form-small">
          <Form.Item name="fileType" label="File Type">
            <Radio.Group>
              <Radio value="advertisement">Advertisement</Radio>
              <Radio value="software">Software</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="flex items-center gap-4">
            <Form.Item name="group" label="Group" className="w-full" initialValue="ATEC">
              <Input placeholder="" disabled />
            </Form.Item>
            <Form.Item name="model" label="Model" className="w-full" initialValue="LC71">
              <Input placeholder="" disabled />
            </Form.Item>
          </div>
          <Form.Item name="fileVersion" label="File Version" className="w-[190px]">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item name="file" label="Select Distribution File">
            <div className="flex gap-2">
              <Input value={fileName} placeholder="No file chosen" readOnly className="flex-1" />
              <Upload beforeUpload={() => false} showUploadList={false} onChange={handleFileChange}>
                <Button type="primary" size="middle" className="!bg-[#5A6670]">
                  Choose File
                </Button>
              </Upload>
            </div>
          </Form.Item>
          <Form.Item name="distribution" label="Reason for distribution">
            <TextArea rows={3} placeholder="" />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}
