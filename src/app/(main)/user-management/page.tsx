'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
  LockFilled,
  CloseOutlined,
} from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

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
  const { showFilter, setShowFilter } = useFilter();

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
      <div className="m-filter-container">
        <div className="filter-btn">
          <Button
            type="primary"
            onClick={() => setShowFilter(true)}
            icon={<img src="/icons/ico-filter.svg" alt="filter" />}
            iconPosition="end"
          >
            Filter
          </Button>
          <Button type="text">Clear all filters</Button>
        </div>
        <div className="filter-list">
          <Button type="default" icon={<CloseOutlined />} iconPosition="end" className="">
            Group: ATEC
          </Button>
          <Button type="default" icon={<CloseOutlined />} iconPosition="end" className="">
            Status: Active
          </Button>
        </div>
      </div>

      {showFilter && (
        <div className={`filter-wrap ${showFilter ? 'show' : ''}`}>
          <div className="filter-block">
            <div className="filter-header">
              <h3>Filter</h3>
              <button type="button" className="btn-close" onClick={() => setShowFilter(false)}>
                <img src="/icons/ico-menu-close.svg" alt="close" />
              </button>
            </div>
            <Form form={form} layout="vertical" onFinish={handleSubmit} className="filter-form ">
              <Space size={16} className="filter-form-items">
                <Form.Item name="group" label="Group" className="w-[190px] max-md:w-full">
                  <Select placeholder="Select Group">
                    <Select.Option value="">Select</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="status" label="Status" className="w-[190px] max-md:w-full">
                  <Select placeholder="Select Status">
                    <Select.Option value="">Select</Select.Option>
                  </Select>
                </Form.Item>
              </Space>
              <div className="filter-submit">
                <Button className="btn-reset">
                  <img src="/icons/ico-reset.svg" alt="reset" />
                </Button>
                <Button size="large" type="primary" className="btn-apply">
                  Apply filters
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
      <div className="menu-line">
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
