'use client';

import { Layout } from 'antd';
import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import FooterMobile from './FooterMobile';
import dynamic from 'next/dynamic';

const GlobalTabs = dynamic(() => import('./GlobalTabs'), { ssr: false });

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Layout className="wrapper">
      {/* 상단 헤더 - 전체 너비 */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* 헤더 아래로 좌측 사이드바 + 우측 컨텐츠 영역 */}
      <Layout>
        <Sidebar
          onMenuClick={() => {}}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Layout>
          <GlobalTabs />
          <Content>
            {children}
            <FooterMobile />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
