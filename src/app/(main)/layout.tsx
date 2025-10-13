'use client';

import { TabProvider } from '@/contexts/TabContext';
import AppLayout from '@/components/layout/AppLayout';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <TabProvider>
      <AppLayout>{children}</AppLayout>
    </TabProvider>
  );
}
