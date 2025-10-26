'use client';

import { Button, Space, Select, Form, Input } from 'antd';
import { ExportOutlined, InfoCircleFilled, CloseOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
import { useFilter } from '@/hooks/useFilter';

// ATM 데이터 타입
interface RemoteCommandsData extends TabulatorData {
  checkbox: boolean;
  no: number;
  group: string;
  branch: string;
  model: string;
  terminalId: string;
  mode: string;
  ip: string;
  commands: string;
  remoteControl: string;
  remoteDate: string;
}

export default function RemoteCommandsPage() {
  const [form] = Form.useForm();
  const { showFilter, setShowFilter } = useFilter();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  // ATM 더미 데이터 생성
  const generateRemoteCommandsData = (): RemoteCommandsData[] => {
    return [
      {
        checkbox: false,
        no: 1,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'IN-SERVICE',
        ip: '192.168.1.10',
        commands: '',
        remoteControl: 'Execute',
        remoteDate: '07-29-2025 3:15:47 PM',
      },
      {
        checkbox: false,
        no: 2,
        group: 'East Region',
        branch: 'Downtown Branch',
        model: 'ezATM6000',
        terminalId: 'ATEC-NY-ATM202',
        mode: 'POWER-UP',
        ip: '192.168.1.10',
        commands: '',
        remoteControl: '',
        remoteDate: '07-29-2025 3:15:47 PM',
      },
    ];
  };

  const remoteCommandsData = generateRemoteCommandsData();

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
      title: 'IP',
      field: 'ip',
      minWidth: 120,
    },
    {
      title: 'Commands',
      field: 'commands',
      minWidth: 160,
      formatter: (cell: { getValue: () => unknown }) => {
        return `
        <select class="tabulator-select">
          <option value="RESET">RESET</option>
          <option value="SHUTDOWN">SHUTDOWN</option>
          <option value="REBOOT">REBOOT</option>
        </select>
        `;
      },
    },
    {
      title: 'Remote Control',
      field: 'remoteControl',
      minWidth: 160,
      formatter: (cell: { getValue: () => unknown }) => {
        const value = cell.getValue() as string;
        if (value === 'Execute') {
          return `
          <button type="button" class="ant-btn ant-btn-default" onclick="alert('clicked')">
            ${value}
          </button>
          `;
        }
        return value; // execute가 아니면 그냥 텍스트로 표시
      },
    },
    {
      title: 'Remote Date',
      field: 'remoteDate',
      minWidth: 160,
    },
  ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>Remote Commands</h2>
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
        <p className="flex items-center gap-1.5">
          <InfoCircleFilled />
          Select a command and click Execute
        </p>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>
      <TabulatorTable
        data={remoteCommandsData}
        columns={columns}
        config={{
          showFooter: true,
        }}
      />
    </div>
  );
}
