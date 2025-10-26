'use client';

import { Modal } from '@/components/ui';
import { Button } from 'antd';
import HostSetupTab from './tabContents/HostSetupTab';
import CustomerSetupTab from './tabContents/CustomerSetupTab';
import TransactionSetupTab from './tabContents/TransactionSetupTab';
import SystemSetupTab from './tabContents/SystemSetupTab';
import { useState } from 'react';

interface ATMConfigurationProps {
  open: boolean;
  onClose: () => void;
}

export default function ATMConfiguration({ open, onClose }: ATMConfigurationProps) {
  const [activeTab, setActiveTab] = useState('general');

  const handlePreviewChanges = () => {
    console.log('Preview all changes');
    // 모든 탭의 저장된 데이터를 미리보기
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={handlePreviewChanges}
      title="ATM Configuration"
      size="default"
      confirmText="Preview Changes"
      cancelText="Cancel"
    >
      <div className="custom-tab-container">
        <div className="grid grid-cols-4 gap-1.5 mb-6">
          <Button
            type={activeTab === 'general' ? 'primary' : 'default'}
            onClick={() => setActiveTab('general')}
            className="custom-tab-btn"
          >
            Host Setup
          </Button>
          <Button
            type={activeTab === 'network' ? 'primary' : 'default'}
            onClick={() => setActiveTab('network')}
            className="custom-tab-btn"
          >
            Customer Setup
          </Button>
          <Button
            type={activeTab === 'security' ? 'primary' : 'default'}
            onClick={() => setActiveTab('security')}
            className="custom-tab-btn"
          >
            Transaction Setup
          </Button>
          <Button
            type={activeTab === 'system' ? 'primary' : 'default'}
            onClick={() => setActiveTab('system')}
            className="custom-tab-btn"
          >
            System Setup
          </Button>
        </div>

        <div className="tab-content">
          {activeTab === 'general' && <HostSetupTab />}
          {activeTab === 'network' && <CustomerSetupTab />}
          {activeTab === 'security' && <TransactionSetupTab />}
          {activeTab === 'system' && <SystemSetupTab />}
        </div>
      </div>
    </Modal>
  );
}
