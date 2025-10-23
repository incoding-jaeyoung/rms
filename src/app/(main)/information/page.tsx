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
interface ATMData extends TabulatorData {
  checkbox: boolean;
  no: number;
  group: string;
  branch: string;
  model: string;
  terminalId: string;
  mode: string;
  status: string;
  address: string;
  ip: string;
  apVer: string;
  bvVer: string;
  fwVer: string;
  serialNumber: string;
  installationDate: string;
}

export default function InformationPage() {
  const [form] = Form.useForm();
  const { showFilter, setShowFilter } = useFilter();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateATMData = (): ATMData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'IN-SERVICE',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 2,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'OUT OF SERVICE',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 3,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'POWER-UP',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 4,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'SUSPEND',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 5,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'SUPERVISOR',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 6,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'ENABLE',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 7,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'DISABLE',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
      {
        checkbox: false,
        no: 8,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'NOT OPEN',
        status: 'Enable',
        address: '123 Main St, Dallas, TX',
        ip: '192.168.1.10',
        apVer: '01.00.07',
        bvVer: '01.00.07',
        fwVer: 'Standard1',
        serialNumber: 'SN-ATMC-9321',
        installationDate: '2025-07-29',
      },
    ];
  };

  const atmData = generateATMData();

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
      title: 'Mode',
      field: 'mode',
      headerSort: true,
      minWidth: 150,
      formatter: (cell: { getValue: () => unknown }) => {
        const value = cell.getValue();
        const getModeStyle = (mode: string) => {
          switch (mode) {
            case 'IN-SERVICE':
              return { color: '#52c41a', bullet: '#52c41a' };
            case 'OUT OF SERVICE':
              return { color: '#ff4d4f', bullet: '#ff4d4f' };
            case 'POWER-UP':
              return { color: '#353C40', bullet: '#FACC15' };
            case 'SUSPEND':
              return { color: '#353C40', bullet: '#2F84FC' };
            case 'SUPERVISOR':
              return { color: '#353C40', bullet: '#7F54FF' };
            case 'ENABLE':
              return { color: '#353C40', bullet: '#00BD24' };
            case 'DISABLE':
              return { color: '#353C40', bullet: '#666666' };
            case 'NOT OPEN':
              return { color: '#bfbfbf', bullet: '#C7CDD1' };
            default:
              return { color: '#353C40', bullet: '#C7CDD1' };
          }
        };

        const style = getModeStyle(value as string);
        return `<span style="display: flex; align-items: center; gap: 5px; line-height:100%;">
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: ${style.bullet};"></span>
            <span style="color: ${style.color};">${value}</span>
          </span>`;
      },
    },
    {
      title: 'Status',
      field: 'status',
      minWidth: 100,
    },
    {
      title: 'Address',
      field: 'address',
      minWidth: 150,
    },
    {
      title: 'IP',
      field: 'ip',
      minWidth: 120,
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
      title: 'Serial Number',
      field: 'serialNumber',
      minWidth: 160,
    },
    {
      title: 'Installation Date',
      field: 'installationDate',
      minWidth: 140,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>ATM Information</h2>
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
          <Button>ATM Configuration</Button>
          <span className="space-line">|</span>
          <Button icon={<PlusOutlined />}>Add new</Button>

          <Button icon={<EditOutlined />}>Edit</Button>
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={atmData}
        columns={columns}
        config={{
          showFooter: true,
        }}
      />
    </div>
  );
}
