'use client';

import { Layout, Dropdown } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const userMenuItems = [
    {
      key: 'change-password',
      label: 'Change Password',
    },
    {
      key: 'logout',
      icon: <img src="/icons/ico-logout.svg" alt="logout" className="w-5 h-5" />,
      label: 'Log out',
    },
  ];

  return (
    <AntHeader className="flex items-center justify-between px-6 bg-white border-b border-gray-200">
      <Link href="/">
        <img src="/images/logo.svg" alt="ATEC" className="h-5" />
      </Link>

      <Dropdown
        menu={{ items: userMenuItems }}
        overlayClassName="rms-dropdown"
        placement="bottomRight"
        open={userMenuOpen}
        onOpenChange={setUserMenuOpen}
      >
        <div className="user-menu ">
          <img src="/icons/ico-user.svg" alt="user" className="w-6 h-6 mr-3" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 leading-tight">John Doe</span>
            <span className="text-xs text-gray-500 leading-none">Super Admin</span>
          </div>
          <img
            src="/icons/ico-user-dropdown.svg"
            alt="arrow"
            className={`ml-auto text-gray-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </Dropdown>
    </AntHeader>
  );
};

export default Header;
