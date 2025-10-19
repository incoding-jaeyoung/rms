'use client';

import { Button, Space, Select, Form } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

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
  const { showFilter, setShowFilter } = useFilter();

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
            Model: Model A
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
                <Form.Item name="model" label="Model" className="w-[190px] max-md:w-full">
                  <Select placeholder="Select Model">
                    <Select.Option value="Select">Select</Select.Option>
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
