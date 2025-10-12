import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConfigProvider, antdConfig } from '@/lib/antd';
import AntdWarningFilter from '@/components/AntdWarningFilter';
import { TabProvider } from '@/contexts/TabContext';
import AppLayout from '@/components/layout/AppLayout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ATEC RMS',
  description: 'ATEC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AntdWarningFilter />
        <ConfigProvider {...antdConfig}>
          <TabProvider>
            <AppLayout>{children}</AppLayout>
          </TabProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
