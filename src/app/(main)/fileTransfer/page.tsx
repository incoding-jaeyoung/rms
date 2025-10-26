'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
  ReloadOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

// ATM 데이터 타입
interface FileTransferData extends TabulatorData {
  checkbox: boolean;
  no: number;
  group: string;
  branch: string;
  model: string;
  terminalId: string;
  status: string;
  ip: string;
  apVer: string;
  bvVer: string;
  fwVer: string;
  downloadUpload: string;
  transferResult: string;
}

export default function FileTransferPage() {
  const [form] = Form.useForm();
  const { showFilter, setShowFilter } = useFilter();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateFileTransferData = (): FileTransferData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        status: 'Applied',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        downloadUpload: '07-29-2025 3:15:47 PM',
        transferResult: '',
      },
    ];
  };

  const fileTransferData = generateFileTransferData();

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: '',
      field: 'checkbox',
      minWidth: 60,
    },
    {
      title: 'NO',
      field: 'no',
      minWidth: 60,
    },
    {
      title: 'Group',
      field: 'group',
      minWidth: 100,
    },
    {
      title: 'Branch',
      field: 'branch',
      minWidth: 120,
    },
    {
      title: 'Model',
      field: 'model',
      minWidth: 120,
    },
    {
      title: 'Terminal ID',
      field: 'terminalId',
      minWidth: 100,
    },
    {
      title: 'Model',
      field: 'model',
      minWidth: 120,
    },
    {
      title: 'Status',
      field: 'status',
      minWidth: 140,
    },
    {
      title: 'IP',
      field: 'ip',
      minWidth: 140,
    },
    {
      title: 'AP Ver.',
      field: 'apVer',
      minWidth: 100,
    },
    {
      title: 'BV Ver.',
      field: 'bvVer',
      minWidth: 100,
    },
    {
      title: 'FW Ver.',
      field: 'fwVer',
      minWidth: 100,
    },
    {
      title: 'Download / Upload',
      field: 'downloadUpload',
      minWidth: 180,
    },
    {
      title: 'Transfer Result',
      field: 'transferResult',
      minWidth: 140,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>File Transfer</h2>
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
          <Button className="w-[120px]">
            <img src="/icons/ico-download.svg" alt="download" className="w-4 h-4" />
            Download
          </Button>
          <Button className="w-[120px]">
            <img src="/icons/ico-upload.svg" alt="upload" className="w-4 h-4" />
            Upload
          </Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={fileTransferData}
        columns={columns}
        config={{
          showFooter: true,
        }}
      />
    </div>
  );
}
