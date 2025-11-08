import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ConfigProvider, antdConfig } from '@/lib/antd';
import AntdWarningFilter from '@/components/AntdWarningFilter';
import { LoadingProvider } from '@/contexts/LoadingContext';

export const metadata: Metadata = {
  title: 'ATEC RMS',
  description: 'ATEC',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AntdWarningFilter />
        <LoadingProvider>
          <ConfigProvider {...antdConfig}>{children}</ConfigProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
