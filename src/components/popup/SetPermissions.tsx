'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Space, Switch, Checkbox, Radio, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { useState } from 'react';

interface EditNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function EditNotices({ open, onClose }: EditNoticesProps) {
  const [form] = Form.useForm();
  const [activeBlocks, setActiveBlocks] = useState({
    terminals: true,
    cash: true,
    journal: true,
    setup: true,
  });

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  const handleSwitchChange = (blockName: string, checked: boolean) => {
    setActiveBlocks((prev) => ({
      ...prev,
      [blockName]: checked,
    }));
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title="Set Permissions"
      size="large"
      confirmText="Save"
      cancelText="Cancel"
      confirmIcon={<CheckCircleFilled />}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="roleName"
          label="Role Name"
          className="w-[190px]"
          initialValue="Administrator"
        >
          <Input placeholder="" disabled />
        </Form.Item>
        <div className="form-block-container mt-5">
          <div className={`form-block ${activeBlocks.terminals ? 'active' : ''}`}>
            <div className="form-block-title">
              <span>Terminals</span>
              <Form.Item name="terminals" valuePropName="checked" initialValue={true}>
                <Switch onChange={(checked) => handleSwitchChange('terminals', checked)} />
              </Form.Item>
            </div>
            <div className="form-block-content">
              <Form.Item
                name="atmInformation"
                label="ATM Information"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="remoteCommands"
                label="Remote Commands"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="fileTransfer"
                label="File Transfer"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className={`form-block ${activeBlocks.cash ? 'active' : ''}`}>
            <div className="form-block-title">
              <span>Cash</span>
              <Form.Item name="cash" valuePropName="checked" initialValue={true}>
                <Switch onChange={(checked) => handleSwitchChange('cash', checked)} />
              </Form.Item>
            </div>
            <div className="form-block-content">
              <Form.Item
                name="cashAtmInformation"
                label="ATM Information"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="cashRemoteCommands"
                label="Remote Commands"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="cashFileTransfer"
                label="File Transfer"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className={`form-block ${activeBlocks.journal ? 'active' : ''}`}>
            <div className="form-block-title">
              <span>Journal</span>
              <Form.Item name="journal" valuePropName="checked" initialValue={true}>
                <Switch onChange={(checked) => handleSwitchChange('journal', checked)} />
              </Form.Item>
            </div>
            <div className="form-block-content">
              <Form.Item
                name="ejManagement"
                label="EJ Management"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className={`form-block ${activeBlocks.setup ? 'active' : ''}`}>
            <div className="form-block-title">
              <span>Setup</span>
              <Form.Item name="setup" valuePropName="checked" initialValue={true}>
                <Switch onChange={(checked) => handleSwitchChange('setup', checked)} />
              </Form.Item>
            </div>
            <div className="form-block-content">
              <Form.Item name="groups" label="Groups" layout="horizontal" initialValue="View">
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="branches" label="Branches" layout="horizontal" initialValue="View">
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="models" label="Models" layout="horizontal" initialValue="View">
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="errorCodes"
                label="Error Codes"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="roleManagement"
                label="Role Management"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="userManagement"
                label="User Management"
                layout="horizontal"
                initialValue="View"
              >
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="notice" label="Notice" layout="horizontal" initialValue="View">
                <Select placeholder="">
                  <Select.Option value="View">View</Select.Option>
                  <Select.Option value="Edit">Edit</Select.Option>
                  <Select.Option value="Delete">No Access</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
