'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 에러 코드 데이터 타입
interface RoleManagementData extends TabulatorData {
  checkbox: boolean;
  no: number;
  errorModule: string;
  errorDetailCode: string;
  errorCode: string;
  description: string;
  resolutionMethod: string;
}

export default function RoleManagementPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateRoleManagementData = (): RoleManagementData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        errorModule: '01 Card',
        errorDetailCode: '',
        errorCode: '',
        description: '',
        resolutionMethod: '',
      },
    ];
  };

  const roleManagementData = generateRoleManagementData();

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
      title: 'Role Name',
      field: 'roleName',
      minWidth: 240,
    },
    {
      title: 'Role Category',
      field: 'roleCategory',
      width: 240,
    },
    {
      title: 'Description',
      field: 'description',
      width: 160,
    },
    {
      title: 'Created By',
      field: 'createdBy',
      width: 240,
    },
    {
      title: 'Created Date',
      field: 'createdDate',
      width: 240,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>Role Management</h2>
      </div>
      <div className="filter-block">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="justify-between flex"
        >
          <Space size={16}>
            <Form.Item name="roleCategory" label="Role Category" className="w-[190px]">
              <Select placeholder="Select Role Category">
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
          <Button>Set Permissions</Button>
          <span className="space-line">|</span>
          <Button icon={<PlusOutlined />}>Add new</Button>
          <Button icon={<EditOutlined />}>Edit</Button>
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={roleManagementData}
        columns={columns}
        config={{
          showFooter: true,
          layout: 'fitDataFill',
        }}
      />
    </div>
  );
}
