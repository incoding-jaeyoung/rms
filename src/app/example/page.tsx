'use client';

import { useState } from 'react';
import { Table, Button, Input, Select, DatePicker, Space, Tag } from 'antd';
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface ATMData {
  key: string;
  no: number;
  dateTime: string;
  group: string;
  branch: string;
  terminalId: string;
  model: string;
  status: 'IN-SERVICE' | 'OFFLINE' | 'MAINTENANCE';
  address: string;
  ip: string;
  apVer: string;
  bvVer: string;
  fwVer: string;
}

export default function ExamplePage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // 더미 데이터 (스크롤 테스트를 위해 50개 생성)
  const data: ATMData[] = Array.from({ length: 50 }, (_, index) => ({
    key: `${index + 1}`,
    no: index + 1,
    dateTime: '07-29-2025 3:15:47 PM',
    group: index % 3 === 0 ? 'East Region' : index % 3 === 1 ? 'West Region' : 'North Region',
    branch:
      index % 4 === 0
        ? 'Downtown Branch'
        : index % 4 === 1
          ? 'Uptown Branch'
          : index % 4 === 2
            ? 'Central Branch'
            : 'Main Branch',
    terminalId: `ATEC-NY-ATM${String(index + 1).padStart(3, '0')}`,
    model: index % 2 === 0 ? 'ezATM6000' : 'ezATM5000',
    status: index % 5 === 0 ? 'OFFLINE' : index % 7 === 0 ? 'MAINTENANCE' : ('IN-SERVICE' as const),
    address: `${100 + index} Main St, Dallas, TX`,
    ip: `192.168.1.${10 + index}`,
    apVer: '01.00.07',
    bvVer: '01.00.07',
    fwVer: 'Standard 1',
  }));

  const columns = [
    {
      title: 'NO',
      dataIndex: 'no',
      key: 'no',
      width: 60,
    },
    {
      title: 'Date & Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
      width: 150,
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
      width: 120,
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
      width: 150,
    },
    {
      title: 'Terminal ID',
      dataIndex: 'terminalId',
      key: 'terminalId',
      width: 150,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      width: 120,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: string) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case 'IN-SERVICE':
              return 'green';
            case 'OFFLINE':
              return 'red';
            case 'MAINTENANCE':
              return 'orange';
            default:
              return 'default';
          }
        };

        const getStatusDotClass = (status: string) => {
          switch (status) {
            case 'IN-SERVICE':
              return 'status-dot status-in-service';
            case 'OFFLINE':
              return 'status-dot status-offline';
            case 'MAINTENANCE':
              return 'status-dot status-maintenance';
            default:
              return 'status-dot';
          }
        };

        return (
          <Tag color={getStatusColor(status)} icon={<span className={getStatusDotClass(status)} />}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
      width: 120,
    },
    {
      title: 'AP Ver.',
      dataIndex: 'apVer',
      key: 'apVer',
      width: 100,
    },
    {
      title: 'BV Ver.',
      dataIndex: 'bvVer',
      key: 'bvVer',
      width: 100,
    },
    {
      title: 'FW Ver.',
      dataIndex: 'fwVer',
      key: 'fwVer',
      width: 120,
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <div className="p-6">
      {/* 필터 섹션 */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Group</label>
            <Select placeholder="Select Group" className="w-full">
              <Option value="east">East Region</Option>
              <Option value="west">West Region</Option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <Select placeholder="Select Branch" className="w-full">
              <Option value="downtown">Downtown Branch</Option>
              <Option value="uptown">Uptown Branch</Option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Terminal ID</label>
            <Input placeholder="Enter Terminal ID" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">EJ Index</label>
            <Input placeholder="Enter EJ Index" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <Select placeholder="Select Type" className="w-full">
              <Option value="atm">ATM</Option>
              <Option value="pos">POS</Option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date Range</label>
            <RangePicker
              defaultValue={[dayjs('2025-09-08'), dayjs('2025-09-08')]}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="primary" icon={<SearchOutlined />}>
            Apply filters
          </Button>
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex justify-between items-center mb-4">
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>
            Add new
          </Button>
          <Button icon={<EditOutlined />} disabled={selectedRowKeys.length === 0}>
            Edit
          </Button>
          <Button danger icon={<DeleteOutlined />} disabled={selectedRowKeys.length === 0}>
            Delete
          </Button>
        </Space>
        <Button icon={<ExportOutlined />}>Export</Button>
      </div>

      {/* 테이블 */}
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        pagination={{
          current: 1,
          pageSize: 50,
          total: 1228,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        scroll={{
          x: 1200,
          y: 400,
        }}
        className="table-static table-fixed sticky-header-table"
      />
    </div>
  );
}
