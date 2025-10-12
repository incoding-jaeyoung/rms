'use client';

import { Button, Space, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// ATM 데이터 타입
interface ATMData extends TabulatorData {
  no: number;
  dateTime: string;
  group: string;
  branch: string;
  model: string;
  terminalId: string;
  ip: string;
  module: string;
  errorCode: string;
  cassetteA: number;
  cassetteB: number;
  cassetteC: number;
  cassetteD: number;
  overflow: number;
  cassetteRjt: number;
}

export default function DashboardPage() {
  // ATM 더미 데이터 생성
  const generateATMData = (): ATMData[] => {
    const groups = ['Group A', 'Group B', 'Group C'];
    const branches = ['Main Branch', 'Downtown Branch', 'Subway Branch', 'Airport Branch'];
    const models = ['NCR 5878', 'Diebold 2020ix', 'Hyosung 7600i', 'Nautilus 22'];
    const modules = ['Cash Dispenser', 'Cash Recycler', 'Card Reader', 'Receipt Printer'];
    const errorCodes = ['E001', 'E002', 'E003', 'E004', 'E005', '-'];

    return Array.from({ length: 51 }, (_, index) => ({
      no: index + 1,
      dateTime: `2025-01-${String((index % 30) + 1).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
      group: groups[index % groups.length],
      branch: branches[index % branches.length],
      model: models[index % models.length],
      terminalId: `ATM${String(index + 1).padStart(4, '0')}`,
      ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      module: modules[index % modules.length],
      errorCode: errorCodes[index % errorCodes.length],
      cassetteA: Math.floor(Math.random() * 1000),
      cassetteB: Math.floor(Math.random() * 1000),
      cassetteC: Math.floor(Math.random() * 1000),
      cassetteD: Math.floor(Math.random() * 1000),
      overflow: Math.floor(Math.random() * 500),
      cassetteRjt: Math.floor(Math.random() * 100),
    }));
  };

  const atmData = generateATMData();

      // 테이블 컬럼 정의
      const columns: TabulatorColumn[] = [
        {
          title: 'NO',
          field: 'no',
          minWidth: 60,
          hozAlign: 'center',
        },
        {
          title: 'Date & Time',
          field: 'dateTime',
          minWidth: 150,
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
          title: 'IP',
          field: 'ip',
          minWidth: 130,
        },
        {
          title: 'Module',
          field: 'module',
          minWidth: 120,
        },
        {
          title: 'Error Code',
          field: 'errorCode',
          minWidth: 100,
          hozAlign: 'center',
        },
        {
          title: 'Cassette-A',
          field: 'cassetteA',
          minWidth: 100,
          hozAlign: 'right',
        },
        {
          title: 'Cassette-B',
          field: 'cassetteB',
          minWidth: 100,
          hozAlign: 'right',
        },
        {
          title: 'Cassette-C',
          field: 'cassetteC',
          minWidth: 100,
          hozAlign: 'right',
        },
        {
          title: 'Cassette-D',
          field: 'cassetteD',
          minWidth: 100,
          hozAlign: 'right',
        },
        {
          title: 'Overflow',
          field: 'overflow',
          minWidth: 100,
          hozAlign: 'right',
        },
        {
          title: 'Cassette-RJT',
          field: 'cassetteRjt',
          minWidth: 100,
          hozAlign: 'right',
        },
      ];

  return (
    <div className="contents">
      <div className="contents-header">
        <h2>ATM Overview</h2>
        <div className='flex items-center gap-2.5'>
          <label className='text-sm font-semibold'>Group</label>
          <Select 
            placeholder="" 
            className="w-50"
            defaultValue="All"
            label="Group"
            options={[
              { label: 'All', value: 'All' },
              { label: 'select one', value: 'select one' },
            ]}
          />
        </div>
      </div>
      <div className="overview-card">
        <ul className="services">
          <li>
            <dl>
              <dt>TOTAL</dt>
              <dd>128</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>IN-SERVICE</dt>
              <dd>104</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>OUT OF SERVICE</dt>
              <dd>16</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>POWER OFF</dt>
              <dd>8</dd>
            </dl>
          </li>
        </ul>
        <dl className="cash">
          <dt>LOW CASH</dt>
          <dd>7</dd>
        </dl>
      </div>
      <div className='mt-7 flex justify-between items-center'>
        <Space>
          <Button icon={<PlusOutlined />}>
            Add new
          </Button>
          <Button icon={<EditOutlined />}>
            Edit
          </Button>
          <Button icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Space>
        <Button icon={<ExportOutlined />}>
          Export
        </Button>
      </div>
        <TabulatorTable
          data={atmData}
          columns={columns}
          config={{
            showFooter: true,
            layout: 'fitData',
          }}
        />
    </div>
  );
}
