'use client';

import { Button, Space, Select, Form } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 그룹 데이터 타입
interface BranchData extends TabulatorData {
  checkbox: boolean;
  no: number;
  group: string;
  branch: string;
  contactPerson: string;
  phoneNumber: string;
  status: string;
}

export default function BranchesPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // 그룹 데이터 생성 (1줄 예시)
  const generateBranchData = (): BranchData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        group: 'Group A',
        branch: 'Branch A',
        contactPerson: 'John Smith',
        phoneNumber: '+1 (555) 123-4567',
        status: 'Active',
      },
    ];
  };

  const branchData = generateBranchData();

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
      minWidth: 100,
    },
    {
      title: 'Branch',
      field: 'branch',
      minWidth: 200,
    },
    {
      title: 'Contact Person',
      field: 'contactPerson',
      width: 320,
    },
    {
      title: 'Phone Number',
      field: 'phoneNumber',
      width: 240,
    },
    {
      title: 'Status',
      field: 'status',
      width: 100,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>Branches</h2>
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
                <Select.Option value="Select">Select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="branch" label="Branches" className="w-[190px]">
              <Select placeholder="Select Branch">
                <Select.Option value="Select">Select</Select.Option>
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
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={branchData}
        columns={columns}
        config={{
          layout: 'fitDataFill',
          showFooter: true,
        }}
      />
    </div>
  );
}
