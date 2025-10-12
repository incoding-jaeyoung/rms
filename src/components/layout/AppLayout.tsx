'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import GlobalTabs from './GlobalTabs';

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Layout className="wrapper">
      {/* 상단 헤더 - 전체 너비 */}
      <Header />

      {/* 헤더 아래로 좌측 사이드바 + 우측 컨텐츠 영역 */}
      <Layout>
        <Sidebar onMenuClick={() => {}} />
        <Layout>
          <GlobalTabs />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
