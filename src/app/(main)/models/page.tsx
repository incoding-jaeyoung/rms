'use client';

import { Button, Space, Select, Form } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 그룹 데이터 타입
interface ModelData extends TabulatorData {
  checkbox: boolean;
  no: number;
  model: string;
  type: string;
  manufacturer: string;
}

export default function ModelsPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // 그룹 데이터 생성 (1줄 예시)
  const generateModelData = (): ModelData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        model: 'Model A',
        type: 'Type A',
        manufacturer: 'Manufacturer A',
      },
    ];
  };

  const modelData = generateModelData();

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
      title: 'Model',
      field: 'model',
      minWidth: 200,
    },
    {
      title: 'Type',
      field: 'type',
      width: 100,
      headerSort: true,
    },
    {
      title: 'Manufacturer',
      field: 'manufacturer',
      width: 140,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>Models</h2>
      </div>
      <div className="filter-block">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="justify-between flex"
        >
          <Space size={16}>
            <Form.Item name="model" label="Model" className="w-[190px]">
              <Select placeholder="Select Model">
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
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={modelData}
        columns={columns}
        config={{
          layout: 'fitDataFill',
          showFooter: true,
        }}
      />
    </div>
  );
}
