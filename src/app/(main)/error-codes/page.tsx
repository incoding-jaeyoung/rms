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
interface ErrorCodeData extends TabulatorData {
  checkbox: boolean;
  no: number;
  errorModule: string;
  errorDetailCode: string;
  errorCode: string;
  description: string;
  resolutionMethod: string;
}

export default function ErrorCodesPage() {
  const [form] = Form.useForm();
  const { showFilter, setShowFilter } = useFilter();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateErrorCodeData = (): ErrorCodeData[] => {
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

  const errorCodeData = generateErrorCodeData();

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
      title: 'Error Module',
      field: 'errorModule',
      minWidth: 240,
    },
    {
      title: 'Error Detail Code',
      field: 'errorDetailCode',
      width: 240,
    },
    {
      title: 'Error Code',
      field: 'errorCode',
      width: 160,
    },
    {
      title: 'Description',
      field: 'description',
      width: 240,
    },
    {
      title: 'Resolution Method',
      field: 'resolutionMethod',
      width: 240,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>Error Codes</h2>
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
            Module: 01 Card
          </Button>
          <Button type="default" icon={<CloseOutlined />} iconPosition="end" className="">
            Error Code: E001
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
                <Form.Item name="errorModule" label="Module" className="w-[190px] max-md:w-full">
                  <Select placeholder="Select Module">
                    <Select.Option value="">Select</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="errorCode" label="Error Code" className="w-[190px] max-md:w-full">
                  <Input placeholder="" />
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
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={errorCodeData}
        columns={columns}
        config={{
          showFooter: true,
          layout: 'fitDataFill',
        }}
      />
    </div>
  );
}
