'use client';

import { Layout, Dropdown } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
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
    <AntHeader>
      <h1>
        <Link href="/">
          <img src="/images/logo.svg" alt="ATEC" className="h-5" />
        </Link>
      </h1>

      {/* 데스크톱: 사용자 메뉴 */}
      <Dropdown
        menu={{ items: userMenuItems }}
        overlayClassName="rms-dropdown"
        placement="bottomRight"
        open={userMenuOpen}
        onOpenChange={setUserMenuOpen}
      >
        <div className="user-menu">
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

      {/* 모바일: 햄버거 메뉴 버튼 */}
      <div className="mobile-menu">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn-menu-open flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 transition-colors md:hidden"
          aria-label="메뉴"
        >
          <img src="/icons/ico-menu.svg" alt="close menu" />
        </button>
      </div>
    </AntHeader>
  );
};

export default Header;
