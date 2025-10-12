'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export interface Tab {
  id: string;
  label: string;
  path: string;
  closable: boolean;
}

interface TabContextType {
  tabs: Tab[];
  activeTabId: string;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  reorderTabs: (tabs: Tab[]) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 'home', label: 'Page List', path: '/', closable: true },
  ]);
  const [activeTabId, setActiveTabId] = useState('home');

  const addTab = (newTab: Tab) => {
    // 이미 열린 탭이 있으면 활성화만
    const existingTab = tabs.find((tab) => tab.id === newTab.id);
    if (existingTab) {
      setActiveTabId(newTab.id);
      router.push(newTab.path);
      return;
    }

    // 새 탭을 맨 앞에 추가
    setTabs((prev) => [newTab, ...prev]);
    setActiveTabId(newTab.id);
    router.push(newTab.path);
  };

  const removeTab = (id: string) => {
    const tabIndex = tabs.findIndex((tab) => tab.id === id);
    const newTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(newTabs);

    // 닫은 탭이 활성 탭이었다면
    if (activeTabId === id) {
      if (newTabs.length > 0) {
        // 다른 탭으로 이동
        const newActiveTab = newTabs[tabIndex - 1] || newTabs[0];
        setActiveTabId(newActiveTab.id);
        router.push(newActiveTab.path);
      } else {
        // 마지막 탭을 닫았을 때 메인 페이지로 이동
        setActiveTabId('');
        router.push('/empty');
      }
    }
  };

  const setActiveTab = (id: string) => {
    setActiveTabId(id);
    const tab = tabs.find((t) => t.id === id);
    if (tab) {
      router.push(tab.path);
    }
  };

  const reorderTabs = (newTabs: Tab[]) => {
    setTabs(newTabs);
  };

  return (
    <TabContext.Provider
      value={{ tabs, activeTabId, addTab, removeTab, setActiveTab, reorderTabs }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs must be used within TabProvider');
  }
  return context;
}
