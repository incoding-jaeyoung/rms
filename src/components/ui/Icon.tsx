import Image from 'next/image';

// 아이콘 컴포넌트의 props 타입 정의
interface IconProps {
  src: string; // 아이콘 파일 경로
  alt: string; // 접근성을 위한 대체 텍스트
  width?: number; // 아이콘 너비 (기본값: 24)
  height?: number; // 아이콘 높이 (기본값: 24)
  className?: string; // 추가 CSS 클래스
  onClick?: () => void; // 클릭 이벤트 핸들러
}

// 기본 아이콘 컴포넌트
export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  width = 24,
  height = 24,
  className = '',
  onClick,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`inline-block ${className}`}
      onClick={onClick}
    />
  );
};

// 자주 사용하는 아이콘들을 위한 프리셋 컴포넌트들
export const Icons = {
  // 네비게이션 아이콘들
  dashboard: (props?: Partial<IconProps>) => (
    <Icon src="/icons/dashboard.svg" alt="Dashboard" {...props} />
  ),
  terminals: (props?: Partial<IconProps>) => (
    <Icon src="/icons/terminals.svg" alt="Terminals" {...props} />
  ),
  cash: (props?: Partial<IconProps>) => <Icon src="/icons/cash.svg" alt="Cash" {...props} />,
  journal: (props?: Partial<IconProps>) => (
    <Icon src="/icons/journal.svg" alt="Journal" {...props} />
  ),
  setup: (props?: Partial<IconProps>) => <Icon src="/icons/setup.svg" alt="Setup" {...props} />,
  notice: (props?: Partial<IconProps>) => <Icon src="/icons/notice.svg" alt="Notice" {...props} />,

  // 액션 아이콘들
  add: (props?: Partial<IconProps>) => <Icon src="/icons/add.svg" alt="Add" {...props} />,
  edit: (props?: Partial<IconProps>) => <Icon src="/icons/edit.svg" alt="Edit" {...props} />,
  delete: (props?: Partial<IconProps>) => <Icon src="/icons/delete.svg" alt="Delete" {...props} />,
  export: (props?: Partial<IconProps>) => <Icon src="/icons/export.svg" alt="Export" {...props} />,
  search: (props?: Partial<IconProps>) => <Icon src="/icons/search.svg" alt="Search" {...props} />,

  // 상태 아이콘들
  online: (props?: Partial<IconProps>) => <Icon src="/icons/online.svg" alt="Online" {...props} />,
  offline: (props?: Partial<IconProps>) => (
    <Icon src="/icons/offline.svg" alt="Offline" {...props} />
  ),
  maintenance: (props?: Partial<IconProps>) => (
    <Icon src="/icons/maintenance.svg" alt="Maintenance" {...props} />
  ),

  // UI 아이콘들
  close: (props?: Partial<IconProps>) => <Icon src="/icons/close.svg" alt="Close" {...props} />,
  menu: (props?: Partial<IconProps>) => <Icon src="/icons/menu.svg" alt="Menu" {...props} />,
  arrowRight: (props?: Partial<IconProps>) => (
    <Icon src="/icons/arrow-right.svg" alt="Arrow Right" {...props} />
  ),
  arrowLeft: (props?: Partial<IconProps>) => (
    <Icon src="/icons/arrow-left.svg" alt="Arrow Left" {...props} />
  ),

  // 브랜드 아이콘들
  logo: (props?: Partial<IconProps>) => <Icon src="/icons/logo.svg" alt="ATEC Logo" {...props} />,
};

export default Icon;
