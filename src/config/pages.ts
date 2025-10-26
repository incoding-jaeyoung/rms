// 페이지 목록 설정

export interface PageInfo {
  key: string;
  no: number;
  title: string;
  description: string;
  path: string;
  status: 'completed' | 'in-progress' | 'planned';
  screenId: string;
  message: string;
}

// 페이지 데이터 (키와 넘버 제외)
const PAGE_DATA = [
  {
    title: 'Layout Template',
    description: '빈 템플릿 페이지',
    path: '/layout',
    status: 'completed' as const,
    screenId: '-',
    message: '',
  },
  {
    title: 'Components Demo',
    description: '',
    path: '/components-demo',
    status: 'completed' as const,
    screenId: '-',
    message: '버튼과 폼의 상태(disable, error 등) 예제 페이지',
  },
  {
    title: 'Table Examples',
    description: 'Tabulator 테이블 예제',
    path: '/table-examples',
    status: 'completed' as const,
    screenId: '-',
    message: '',
  },
  {
    title: 'Modals',
    description: '모달 컴포넌트',
    path: '/modal-basic',
    status: 'completed' as const,
    screenId: '-',
    message: '',
  },
  {
    title: 'Dashboard',
    description: '',
    path: '/dashboard',
    status: 'completed' as const,
    screenId: 'RMS1200',
    message: '타블레이터 레이아웃 및 푸터 테스트용 더미 데이터 포함',
  },
  {
    title: 'Log In',
    description: '',
    path: '/log-in',
    status: 'completed' as const,
    screenId: 'RMS1000',
    message: '',
  },
  {
    title: 'Information',
    description: '',
    path: '/information',
    status: 'completed' as const,
    screenId: 'RMS2100',
    message: '타블레이터 체크박스 및 mode 컬럼 formatter 삽입',
  },
  {
    title: 'Groups',
    description: '',
    path: '/groups',
    status: 'completed' as const,
    screenId: 'RMS5100',
    message: '',
  },
  {
    title: 'Branches',
    description: '',
    path: '/branches',
    status: 'completed' as const,
    screenId: 'RMS5200',
    message: '',
  },
  {
    title: 'Models',
    description: '',
    path: '/models',
    status: 'completed' as const,
    screenId: 'RMS5300',
    message: '',
  },
  {
    title: 'Error Codes',
    description: '',
    path: '/error-codes',
    status: 'completed' as const,
    screenId: 'RMS5400',
    message: '',
  },
  {
    title: 'Role Management',
    description: '',
    path: '/role-management',
    status: 'completed' as const,
    screenId: 'RMS5500',
    message: '',
  },
  {
    title: 'User Management',
    description: '',
    path: '/user-management',
    status: 'completed' as const,
    screenId: 'RMS5600',
    message: '',
  },
  {
    title: 'Notice',
    description: '',
    path: '/notice',
    status: 'completed' as const,
    screenId: 'RMS1300',
    message: '',
  },
  {
    title: 'License',
    description: '',
    path: '/license',
    status: 'completed' as const,
    screenId: 'RMS1400',
    message: '',
  },
  {
    title: 'Remote Commands',
    description: '',
    path: '/remoteCommands',
    status: 'completed' as const,
    screenId: 'RMS2200',
    message: '',
  },
  {
    title: 'File Transfer',
    description: '',
    path: '/fileTransfer',
    status: 'completed' as const,
    screenId: 'RMS2300',
    message: '',
  },
  {
    title: 'Inventory',
    description: '',
    path: '/inventory',
    status: 'completed' as const,
    screenId: 'RMS3100',
    message: '',
  },
  {
    title: 'Refill History',
    description: '',
    path: '/refillHistory',
    status: 'completed' as const,
    screenId: 'RMS3200',
    message: '',
  },
  {
    title: 'EJ Management',
    description: '',
    path: '/EJManagement',
    status: 'completed' as const,
    screenId: 'RMS4100',
    message: '',
  },
];

// 자동으로 키와 넘버를 매기는 함수
export const PAGES: PageInfo[] = PAGE_DATA.map((page, index) => ({
  key: String(index + 1),
  no: index + 1,
  ...page,
}));
