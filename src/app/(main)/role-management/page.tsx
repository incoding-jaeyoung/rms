'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

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
  const { showFilter, setShowFilter } = useFilter();

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
            Role Category: Admin
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
                <Form.Item
                  name="roleCategory"
                  label="Role Category"
                  className="w-[190px] max-md:w-full"
                >
                  <Select placeholder="Select Role Category">
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
