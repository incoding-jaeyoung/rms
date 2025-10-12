'use client';

import { useState } from 'react';
import { Table, Tag, Space, Input, Select, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

// 사용자 데이터 타입
interface UserData {
  key: string;
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

export default function UserManagementPage() {
  const [searchText, setSearchText] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  // 더미 데이터 (50개)
  const generateUserData = (): UserData[] => {
    const roles = ['Admin', 'Manager', 'User', 'Guest'];
    const departments = ['IT', 'Sales', 'Marketing', 'HR', 'Finance'];
    const statuses: ('active' | 'inactive' | 'pending')[] = ['active', 'inactive', 'pending'];
    const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Tom Brown'];

    return Array.from({ length: 50 }, (_, index) => ({
      key: `user-${index + 1}`,
      id: `U${String(index + 1).padStart(4, '0')}`,
      name: names[index % names.length] + ` ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: roles[index % roles.length],
      department: departments[index % departments.length],
      status: statuses[index % statuses.length],
      lastLogin: `2025-01-${String((index % 30) + 1).padStart(2, '0')}`,
    }));
  };

  const [userData] = useState<UserData[]>(generateUserData());

  // 테이블 컬럼 정의
  const columns: ColumnsType<UserData> = [
    {
      title: 'User ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      fixed: 'left',
      filteredValue: null,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(String(value).toLowerCase()) ||
        record.email.toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      filteredValue: null,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 120,
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Manager', value: 'Manager' },
        { text: 'User', value: 'User' },
        { text: 'Guest', value: 'Guest' },
      ],
      filteredValue: roleFilter !== 'all' ? [roleFilter] : null,
      onFilter: (value, record) => record.role === value,
      render: (role: string) => {
        let color = 'blue';
        if (role === 'Admin') color = 'red';
        else if (role === 'Manager') color = 'orange';
        else if (role === 'User') color = 'green';
        else if (role === 'Guest') color = 'default';
        return <Tag color={color}>{role}</Tag>;
      },
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: 120,
      filteredValue: null,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Pending', value: 'pending' },
      ],
      filteredValue: null,
      onFilter: (value, record) => record.status === value,
      render: (status: string) => {
        let color = 'default';
        if (status === 'active') color = 'green';
        else if (status === 'inactive') color = 'red';
        else if (status === 'pending') color = 'orange';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      width: 120,
      sorter: (a, b) => new Date(a.lastLogin).getTime() - new Date(b.lastLogin).getTime(),
      filteredValue: null,
    },
    {
      title: 'Action',
      key: 'action',
      width: 200,
      fixed: 'right',
      filteredValue: null,
      render: () => (
        <Space size="small">
          <Button type="primary" size="small">
            Edit
          </Button>
          <Button size="small">View</Button>
          <Button danger size="small">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-4 p-6">
      {/* 필터 및 검색 영역 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <Input.Search
              placeholder="Search by name or email"
              allowClear
              size="large"
              onSearch={(value) => setSearchText(value)}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <Select
            placeholder="Filter by role"
            size="large"
            style={{ width: 200 }}
            value={roleFilter}
            onChange={(value) => setRoleFilter(value)}
            options={[
              { label: 'All Roles', value: 'all' },
              { label: 'Admin', value: 'Admin' },
              { label: 'Manager', value: 'Manager' },
              { label: 'User', value: 'User' },
              { label: 'Guest', value: 'Guest' },
            ]}
          />
          <Button type="primary" size="large">
            Add User
          </Button>
        </div>
      </div>

      {/* 테이블 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <Table
          columns={columns}
          dataSource={userData}
          scroll={{ x: 1200, y: 400 }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} users`,
          }}
          className="sticky-header-table"
          bordered
        />
      </div>
    </div>
  );
}
