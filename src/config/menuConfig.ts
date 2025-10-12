export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  closable?: boolean;
}

export const menuLabels: { [key: string]: string } = {
  'dashboard': 'Dashboard',
  'atm-info': 'ATM Information',
  'remote-commands': 'Remote Commands',
  'file-transfer': 'File Transfer',
  'cash': 'Cash Management',
  'journal': 'Journal',
  'setup': 'Setup',
  'notice': 'Notice',
};

export const getMenuLabel = (menuKey: string): string => {
  return menuLabels[menuKey] || menuKey;
};
