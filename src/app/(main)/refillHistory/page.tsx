'use client';

import { Button, Space, Select, Form, Input, DatePicker } from 'antd';
import { ExportOutlined, CloseOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

// ATM 데이터 타입
interface RefillHistoryData extends TabulatorData {
  no: number;
  dateTime: string;
  group: string;
  branch: string;
  model: string;
  terminalId: string;
  a: string;
  b: string;
  c: string;
  d: string;
  rjt: string;
  ip: string;
}

export default function RefillHistoryPage() {
  const [form] = Form.useForm();
  const { showFilter, setShowFilter } = useFilter();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateRefillHistoryData = (): RefillHistoryData[] => {
    return [
      {
        no: 1,
        dateTime: '07-29-2025 3:15:47 PM',
        group: 'ATEC',
        branch: 'Convergence',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        a: '100',
        b: '100',
        c: '100',
        d: '100',
        rjt: '100',
        ip: '192. 168. 1. 10',
      },
      {
        no: 2,
        dateTime: '07-29-2025 3:15:47 PM',
        group: 'ATEC',
        branch: 'Convergence',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        a: '100',
        b: '100',
        c: '100',
        d: '100',
        rjt: '100',
        ip: '192. 168. 1. 10',
      },
    ];
  };

  const refillHistoryData = generateRefillHistoryData();

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
      title: 'Model',
      field: 'model',
      minWidth: 120,
    },
    {
      title: 'Terminal ID',
      field: 'terminalId',
      minWidth: 140,
    },
    {
      title: 'A',
      field: 'a',
      minWidth: 60,
    },
    {
      title: 'B',
      field: 'b',
      minWidth: 60,
    },
    {
      title: 'C',
      field: 'c',
      minWidth: 60,
    },
    {
      title: 'D',
      field: 'd',
      minWidth: 60,
    },
    {
      title: 'RJT',
      field: 'rjt',
      minWidth: 60,
    },
    {
      title: 'IP',
      field: 'ip',
      minWidth: 140,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>Refill History</h2>
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
        <Button icon={<ExportOutlined />} className="ml-auto">
          Export
        </Button>
      </div>
      <TabulatorTable
        data={refillHistoryData}
        columns={columns}
        config={{
          showFooter: true,
        }}
      />
    </div>
  );
}
