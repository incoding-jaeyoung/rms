// 페이지 목록 설정

export interface PageInfo {
  key: string;
  no: number;
  title: string;
  description: string;
  path: string;
  status: 'completed' | 'in-progress' | 'planned';
  lastModified: string;
  screenId: string;
}

export const PAGES: PageInfo[] = [
  {
    key: '1',
    no: 1,
    title: 'Layout Template',
    description: '빈 템플릿 페이지',
    path: '/layout',
    status: 'completed',
    lastModified: '2025-10-13',
    screenId: '-',
  },
  {
    key: '2',
    no: 2,
    title: 'Table Examples',
    description: 'Tabulator 테이블 예제',
    path: '/table-examples',
    status: 'completed',
    lastModified: '2025-10-13',
    screenId: '-',
  },
  {
    key: '3',
    no: 3,
    title: 'Modals',
    description: '모달 컴포넌트',
    path: '/modal-basic',
    status: 'completed',
    lastModified: '2025-10-13',
    screenId: '-',
  },
  {
    key: '4',
    no: 4,
    title: 'Dashboard',
    description: '대시보드',
    path: '/dashboard',
    status: 'completed',
    lastModified: '2025-10-13',
    screenId: 'RMS1200',
  },
  {
    key: '5',
    no: 5,
    title: 'Log In',
    description: '로그인 페이지',
    path: '/log-in',
    status: 'completed',
    lastModified: '2025-10-13',
    screenId: 'RMS1000',
  },
  // {
  //   key: '5',
  //   no: 5,
  //   title: 'User Management',
  //   description: '사용자 관리 페이지',
  //   path: '/user-management',
  //   status: 'completed',
  //   lastModified: '2025-01-07',
  //   screenId: 'SCR-USER-001',
  // },
];
