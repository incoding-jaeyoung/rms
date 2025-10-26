'use client';

import { Button, Space, Select, Form, Input, DatePicker } from 'antd';
import { ExportOutlined, CloseOutlined, InfoCircleFilled } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

// ATM 데이터 타입
interface EJManagementData extends TabulatorData {
  no: number;
  dateTime: string;
  group: string;
  branch: string;
  terminalId: string;
  ejIndex: string;
  type: string;
  result: string;
  account: string;
  amount: string;
  fee: string;
  error: string;
  ip: string;
  viewDetails: string;
}

export default function EJManagementPage() {
  const [form] = Form.useForm();
  const { showFilter, setShowFilter } = useFilter();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateEJManagementData = (): EJManagementData[] => {
    return [
      {
        no: 1,
        dateTime: '07-29-2025 3:15:47 PM',
        group: 'ATEC',
        branch: 'Convergence',
        terminalId: 'ATEC-NY-ATM202',
        ejIndex: '',
        type: '',
        result: '',
        account: '',
        amount: '',
        fee: '',
        error: '',
        ip: '192.168.1.10',
        viewDetails: 'view',
      },
    ];
  };

  const ejManagementData = generateEJManagementData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: 'NO',
      field: 'no',
      minWidth: 60,
    },
    {
      title: 'Date & Time',
      field: 'dateTime',
      minWidth: 180,
    },
    {
      title: 'Group',
      field: 'group',
      minWidth: 120,
    },
    {
      title: 'Branch',
      field: 'branch',
      minWidth: 160,
    },
    {
      title: 'Terminal ID',
      field: 'terminalId',
      minWidth: 140,
    },
    {
      title: 'EJ Index',
      field: 'ejIndex',
      minWidth: 120,
    },
    {
      title: 'Type',
      field: 'type',
      minWidth: 120,
      headerSort: true,
    },
    {
      title: 'Result',
      field: 'result',
      minWidth: 100,
    },
    {
      title: 'Account',
      field: 'account',
      minWidth: 100,
    },
    {
      title: 'Amount',
      field: 'amount',
      minWidth: 100,
    },
    {
      title: 'Fee',
      field: 'fee',
      minWidth: 100,
    },
    {
      title: 'Error',
      field: 'error',
      minWidth: 100,
    },
    {
      title: 'IP',
      field: 'ip',
      minWidth: 120,
    },
    {
      title: 'View details',
      field: 'viewDetails',
      minWidth: 120,
      formatter: (cell: { getValue: () => unknown }) => {
        const value = cell.getValue() as string;
        if (value === 'view') {
          return `
          <button type="button" class="ant-btn ant-btn-default" onclick="alert('clicked')">
            View details
          </button>
          `;
        }
        return '';
      },
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>EJ Management</h2>
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
            Model: ezCAMS
          </Button>
          <Button type="default" icon={<CloseOutlined />} iconPosition="end" className="">
            Branch: Downtown
          </Button>
          <Button type="default" icon={<CloseOutlined />} iconPosition="end" className="">
            Terminal ID: ATEC-NY-ATM202
          </Button>
          <Button type="default" icon={<CloseOutlined />} iconPosition="end" className="">
            date: 08/09/2025 - 08/09/2025
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
                    <Select.Option value="Select">Select</Select.Option>
                    <Select.Option value="Select1">Select1</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="branch" label="Branch" className="w-[190px] max-md:w-full">
                  <Select placeholder="Select Branch">
                    <Select.Option value="">Select</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="model" label="Model" className="w-[190px] max-md:w-full">
                  <Select placeholder="Select Model">
                    <Select.Option value="">Select</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="terminalId"
                  label="Terminal ID"
                  className="w-[190px] max-md:w-full"
                >
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item name="date" label="Date Range" className="w-[250px] max-md:w-full">
                  <DatePicker.RangePicker className="w-full" />
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
        <p className="flex items-center gap-1.5">
          <InfoCircleFilled />
          Enter EJ Index and date range, then click Apply filters to refine results
        </p>
        <Button icon={<ExportOutlined />} className="ml-auto">
          Export
        </Button>
      </div>
      <TabulatorTable
        data={ejManagementData}
        columns={columns}
        config={{
          showFooter: true,
        }}
      />
    </div>
  );
}
