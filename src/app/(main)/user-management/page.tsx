'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
  LockFilled,
} from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 에러 코드 데이터 타입
interface UserManagementData extends TabulatorData {
  checkbox: boolean;
  no: number;
  group: string;
  role: string;
  status: string;
  username: string;
  name: string;
  phoneNumber: string;
  email: string;
}

export default function UserManagementPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateUserManagementData = (): UserManagementData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        group: '',
        role: '',
        status: '',
        username: '',
        name: '',
        phoneNumber: '',
        email: '',
      },
    ];
  };

  const userManagementData = generateUserManagementData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: '',
      field: 'checkbox',
      width: 60,
    },
    {
      title: 'NO',
      field: 'no',
      width: 60,
    },
    {
      title: 'Group',
      field: 'group',
      width: 180,
    },
    {
      title: 'Role',
      field: 'role',
      width: 180,
    },
    {
      title: 'Status',
      field: 'status',
      width: 180,
    },
    {
      title: 'Username',
      field: 'username',
      width: 180,
    },
    {
      title: 'Name',
      field: 'name',
      width: 180,
    },
    {
      title: 'Phone Number',
      field: 'phoneNumber',
      width: 180,
    },
    {
      title: 'Email',
      field: 'email',
      width: 180,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>User Management</h2>
      </div>
      <div className="filter-block">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="justify-between flex"
        >
          <Space size={16}>
            <Form.Item name="group" label="Group" className="w-[190px]">
              <Select placeholder="Select Group">
                <Select.Option value="">Select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="status" label="Status" className="w-[190px]">
              <Select placeholder="Select Status">
                <Select.Option value="">Select</Select.Option>
              </Select>
            </Form.Item>
          </Space>
          <Button size="large" type="primary">
            Apply filters
          </Button>
        </Form>
      </div>
      <div className="mt-7.5 mb-4 flex justify-between items-center">
        <Space>
          <Button icon={<PlusOutlined />}>Add new</Button>
          <Button icon={<EditOutlined />}>Edit</Button>
          <Button icon={<LockFilled />}>Reset Password</Button>
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={userManagementData}
        columns={columns}
        config={{
          showFooter: true,
          layout: 'fitDataFill',
        }}
      />
    </div>
  );
}
