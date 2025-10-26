'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Select, Space, Radio, TimePicker, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CheckCircleFilled } from '@ant-design/icons';
import { useState } from 'react';
import SelectPerson from './SelectPerson';

interface NewTerminalProps {
  open: boolean;
  onClose: () => void;
}

export default function NewTerminal({ open, onClose }: NewTerminalProps) {
  const [form] = Form.useForm();
  const [selectPersonOpen, setSelectPersonOpen] = useState(false);

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title="Add New Terminal"
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
            <Form.Item name="model" label="Model" className="w-[190px]">
              <Select placeholder="">
                <Select.Option value="">select1</Select.Option>
              </Select>
            </Form.Item>
          </Space>
          <Space size={20}>
            <Form.Item name="terminalId" label="Terminal ID" className="w-[190px]">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item name="serialNumber" label="Serial Number" className="w-[190px]">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item name="terminalIp" label="Terminal IP" className="w-[190px]">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item name="status" label="Terminal Status">
              <Radio.Group className="h-[34px] !flex items-center">
                <Radio value="active">Enable</Radio>
                <Radio value="inactive" className="!mr-0">
                  Disable
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Space>

          <div className="form-row">
            <Form.Item name="addressLine" label="Address" className="w-[190px]">
              <Input placeholder="Address Line" />
            </Form.Item>
            <Form.Item name="city" label=" " className="w-[190px]">
              <Select placeholder="City">
                <Select.Option value="">select2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="state" label=" " className="w-[190px]">
              <Select placeholder="State">
                <Select.Option value="">select3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="zipCode" label=" " className="w-[190px]">
              <Input placeholder="ZIP code" />
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item name="startTime" label="Operating Hours" className="w-[190px]">
              <TimePicker placeholder="Start time" format="HH:mm" className="w-full" />
            </Form.Item>
            <Form.Item name="endTime" label=" " className="w-[190px]">
              <TimePicker placeholder="End time" format="HH:mm" className="w-full" />
            </Form.Item>
            <Form.Item name="contactPerson" label="Contact Person" className="w-[190px] ">
              <Input
                placeholder=""
                className="!pr-1"
                suffix={
                  <Button
                    type="text"
                    icon={<SearchOutlined />}
                    onClick={() => {
                      setSelectPersonOpen(true);
                    }}
                  />
                }
              />
            </Form.Item>
          </div>
        </Space>
      </Form>

      {/* SelectPerson 모달 */}
      <SelectPerson open={selectPersonOpen} onClose={() => setSelectPersonOpen(false)} />
    </Modal>
  );
}
