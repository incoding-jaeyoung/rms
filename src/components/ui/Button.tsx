import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { ReactNode } from 'react';

// 커스텀 버튼의 추가 props 타입 정의
interface CustomButtonProps extends Omit<AntButtonProps, 'variant' | 'size' | 'iconPosition'> {
  icon?: ReactNode;           // 아이콘 컴포넌트
  iconPosition?: 'left' | 'right'; // 아이콘 위치
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'text' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;       // 전체 너비
  loading?: boolean;         // 로딩 상태
}

// 커스텀 버튼 컴포넌트
export const Button: React.FC<CustomButtonProps> = ({
  children,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  className = '',
  ...props
}) => {
  // 크기별 스타일 매핑
  const sizeClasses = {
    xs: 'h-6 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl',
  };

  // 변형별 스타일 매핑
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500',
    success: 'bg-green-500 hover:bg-green-600 text-white border-green-500',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white border-red-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border-gray-300',
    text: 'bg-transparent hover:bg-gray-100 text-gray-700 border-transparent',
    link: 'bg-transparent hover:bg-transparent text-blue-500 hover:text-blue-600 border-transparent underline',
  };

  // 아이콘 렌더링
  const renderIcon = () => {
    if (!icon) return null;
    
    const iconElement = (
      <span className={`inline-flex items-center ${size === 'xs' ? 'w-3 h-3' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`}>
        {icon}
      </span>
    );

    return iconElement;
  };

  // 최종 클래스명 조합
  const finalClassName = `
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  return (
    <AntButton
      {...props}
      className={finalClassName}
      loading={loading}
      icon={iconPosition === 'left' ? renderIcon() : undefined}
    >
      {children}
      {iconPosition === 'right' && renderIcon()}
    </AntButton>
  );
};

// 자주 사용하는 버튼들을 위한 프리셋 컴포넌트들
export const ButtonPresets = {
  // 액션 버튼들
  Add: (props?: Partial<CustomButtonProps>) => (
    <Button variant="primary" icon={<span>+</span>} {...props}>
      Add New
    </Button>
  ),
  
  Edit: (props?: Partial<CustomButtonProps>) => (
    <Button variant="secondary" icon={<span>✏️</span>} {...props}>
      Edit
    </Button>
  ),
  
  Delete: (props?: Partial<CustomButtonProps>) => (
    <Button variant="danger" icon={<span>🗑️</span>} {...props}>
      Delete
    </Button>
  ),
  
  Save: (props?: Partial<CustomButtonProps>) => (
    <Button variant="success" icon={<span>💾</span>} {...props}>
      Save
    </Button>
  ),
  
  Cancel: (props?: Partial<CustomButtonProps>) => (
    <Button variant="ghost" icon={<span>❌</span>} {...props}>
      Cancel
    </Button>
  ),
  
  Export: (props?: Partial<CustomButtonProps>) => (
    <Button variant="secondary" icon={<span>📤</span>} {...props}>
      Export
    </Button>
  ),
  
  Search: (props?: Partial<CustomButtonProps>) => (
    <Button variant="primary" icon={<span>🔍</span>} {...props}>
      Search
    </Button>
  ),
  
  Filter: (props?: Partial<CustomButtonProps>) => (
    <Button variant="ghost" icon={<span>🔽</span>} {...props}>
      Filter
    </Button>
  ),
};

export default Button;
