'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

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
      <div className="filter-block">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="justify-between flex"
        >
          <Space size={16}>
            <Form.Item name="errorModule" label="Module" className="w-[190px]">
              <Select placeholder="Select Module">
                <Select.Option value="">Select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="errorCode" label="Error Code" className="w-[190px]">
              <Input placeholder="" />
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
