'use client';

import { Modal } from '@/components/ui';
import { Form, Select, Space } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';
interface ConfigurationProps {
  open: boolean;
  onClose: () => void;
}

// 그룹 데이터 타입
interface ConfigurationData extends TabulatorData {
  no: number;
  settingName: string;
  current: string;
  new: string;
}

export default function Configuration({ open, onClose }: ConfigurationProps) {
  // Host Setup 데이터 생성
  const generateHostSetupData = (): ConfigurationData[] => {
    return [
      {
        no: 1,
        settingName: 'Customer Setup / Language',
        current: 'English',
        new: 'Korean',
      },
      {
        no: 2,
        settingName: 'key Management / Key Block Format',
        current: 'TR31',
        new: 'Triple DES',
      },
      {
        no: 3,
        settingName: 'STD3 Option / Communication ID',
        current: 'None',
        new: 'ATM00123',
      },
    ];
  };

  // Customer Setup 데이터 생성
  const generateCustomerSetupData = (): ConfigurationData[] => {
    return [];
  };

  // Transaction Setup 데이터 생성
  const generateTransactionSetupData = (): ConfigurationData[] => {
    return [
      {
        no: 1,
        settingName: 'Transaction Option / Balance Inquiry',
        current: 'Disable',
        new: 'Enable',
      },
      {
        no: 2,
        settingName: 'Transaction Option / pre-check transaction',
        current: 'Disable',
        new: 'Enable',
      },
    ];
  };

  const hostSetupData = generateHostSetupData();
  const customerSetupData = generateCustomerSetupData();
  const transactionSetupData = generateTransactionSetupData();
  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: 'NO',
      field: 'no',
      width: 60,
    },
    {
      title: 'Setting Name',
      field: 'settingName',
      width: 300,
      hozAlign: 'left',
    },
    {
      title: 'Current (As-Is)',
      field: 'current',
      width: 190,
    },
    {
      title: '',
      field: '',
      width: 50,
      formatter: () => {
        return `<img src="/icons/ico-now.svg" alt="now" />`;
      },
    },
    {
      title: 'New (To-Be)',
      field: 'new',
      formatter: (cell: { getValue: () => unknown }) => {
        const value = cell.getValue() as string;
        return `<span class="text-gray-900 font-bold">${value}</span>`;
      },
    },
  ];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="Confirm Configuration Changes"
      size="default"
      confirmText="Apply"
      cancelText="Back"
      confirmIcon={<CheckCircleFilled />}
    >
      <div className="changes-wrap">
        <div className="changes-content">
          <div className="changes-header">
            <h3>Host Setup</h3>
            <p>3 Changes</p>
          </div>
          <div className="changes-table">
            <TabulatorTable
              data={hostSetupData}
              columns={columns}
              config={{
                layout: 'fitColumns',
                height: '150px',
                showFooter: false,
                placeholder: 'No changes',
              }}
            />
          </div>
        </div>
        <div className="changes-content">
          <div className="changes-header">
            <h3>Customer Setup</h3>
            <p></p>
          </div>
          <div className="changes-table">
            <TabulatorTable
              data={customerSetupData}
              columns={columns}
              config={{
                layout: 'fitColumns',
                height: '150px',
                showFooter: false,
                placeholder: 'No changes',
              }}
            />
          </div>
        </div>
        <div className="changes-content">
          <div className="changes-header">
            <h3>Transaction Setup</h3>
            <p>2 Changes</p>
          </div>
          <div className="changes-table">
            <TabulatorTable
              data={transactionSetupData}
              columns={columns}
              config={{
                layout: 'fitColumns',
                height: '150px',
                showFooter: false,
                placeholder: 'No changes',
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
