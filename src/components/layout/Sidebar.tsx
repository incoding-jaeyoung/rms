'use client';

import { Layout, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { useTabs } from '@/contexts/TabContext';

const { Sider } = Layout;

interface SidebarProps {
  onMenuClick?: (menuKey: string) => void;
}

// 메뉴 키와 페이지 정보 매핑 (서브메뉴 포함)
const menuPageMap: Record<string, { label: string; path: string }> = {
  // Dashboard
  dashboard: { label: 'Dashboard', path: '/dashboard' },

  // Terminals
  'atm-info': { label: 'ATM Information', path: '/example' },
  'remote-commands': { label: 'Remote Commands', path: '/layout' },
  'file-transfer': { label: 'File Transfer', path: '/layout' },

  // Cash
  'cash-inventory': { label: 'Inventory', path: '/layout' },
  'cash-refill-history': { label: 'Refill History', path: '/layout' },
  'cash-settlement-history': { label: 'Settlement History', path: '/layout' },

  // Journal
  'journal-ej': { label: 'EJ Management', path: '/layout' },

  // Set up
  'setup-groups': { label: 'Groups', path: '/layout' },
  'setup-branches': { label: 'Branches', path: '/layout' },
  'setup-models': { label: 'Models', path: '/layout' },
  'setup-error-codes': { label: 'Error Codes', path: '/layout' },
  'setup-role-management': { label: 'Role Management', path: '/layout' },
  'setup-user-management': { label: 'User Management', path: '/user-management' },

  // Notice
  notice: { label: 'Notice', path: '/layout' },

  // Etc
  modals: { label: 'Modals', path: '/modal-basic' },
};

const Sidebar: React.FC<SidebarProps> = () => {
  const [mounted, setMounted] = useState(false);
  // const [openKeys, setOpenKeys] = useState<string[]>(['terminals']);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const rootSubmenuKeys = ['terminals', 'cash', 'journal', 'setup'];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenChange = (keys: string[]) => {
    const latest = keys.find((key) => !openKeys.includes(key));
    if (latest && rootSubmenuKeys.includes(latest)) {
      setOpenKeys([latest]);
    } else {
      setOpenKeys([]);
    }
  };
  const { addTab } = useTabs();

  const handleMenuClick = (key: string) => {
    const pageInfo = menuPageMap[key];
    if (pageInfo) {
      addTab({
        id: key,
        label: pageInfo.label,
        path: pageInfo.path,
        closable: true,
      });
    }
  };

  const menuItems = [
    {
      key: 'dashboard',
      icon: <img src="/icons/ico-menu-01.svg" alt="dashboard" />,
      label: 'Dashboard',
    },
    {
      key: 'terminals',
      icon: <img src="/icons/ico-menu-02.svg" alt="terminals" />,
      label: 'Terminals',
      children: [
        { key: 'atm-info', label: 'ATM Information' },
        { key: 'remote-commands', label: 'Remote Commands' },
        { key: 'file-transfer', label: 'File Transfer' },
      ],
    },
    {
      key: 'cash',
      icon: <img src="/icons/ico-menu-03.svg" alt="cash" />,
      label: 'Cash',
      children: [
        { key: 'cash-inventory', label: 'Inventory' },
        { key: 'cash-refill-history', label: 'Refill History' },
        { key: 'cash-settlement-history', label: 'Settlement History' },
      ],
    },
    {
      key: 'journal',
      icon: <img src="/icons/ico-menu-04.svg" alt="journal" />,
      label: 'Journal',
      children: [{ key: 'journal-ej', label: 'EJ Management' }],
    },
    {
      key: 'setup',
      icon: <img src="/icons/ico-menu-05.svg" alt="setup" />,
      label: 'Set up',
      children: [
        { key: 'setup-groups', label: 'Groups' },
        { key: 'setup-branches', label: 'Branches' },
        { key: 'setup-models', label: 'Models' },
        { key: 'setup-error-codes', label: 'Error Codes' },
        { key: 'setup-role-management', label: 'Role Management' },
        { key: 'setup-user-management', label: 'User Management' },
      ],
    },
    {
      key: 'notice',
      icon: <img src="/icons/ico-menu-06.svg" alt="notice" />,
      label: 'Notice',
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <Sider
      trigger={null}
      width={260}
      theme="light"
      className="bg-white"
      style={{
        boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.10)',
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        onClick={({ key }) => handleMenuClick(key)}
        items={menuItems}
        className="sidebar-menu"
        inlineIndent={16}
      />
      <div className="sidebar-footer ">Open-source Licenses</div>
    </Sider>
  );
};

export default Sidebar;
