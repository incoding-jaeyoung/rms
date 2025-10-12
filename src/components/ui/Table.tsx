import { Table as AntTable, TableProps as AntTableProps, Button, Space } from 'antd';
import { ReactNode } from 'react';

// 커스텀 테이블의 추가 props 타입 정의
interface CustomTableProps extends Omit<AntTableProps<any>, 'columns'> {
  columns?: any[];                    // 컬럼 정의
  data?: any[];                      // 테이블 데이터
  loading?: boolean;                 // 로딩 상태
  pagination?: boolean | object;     // 페이지네이션 설정
  selection?: boolean;               // 행 선택 기능
  actions?: ReactNode;              // 액션 버튼들
  stickyHeader?: boolean;           // 고정 헤더
  scrollHeight?: number;            // 스크롤 높이
  className?: string;               // 추가 CSS 클래스
}

// 커스텀 테이블 컴포넌트
export const Table: React.FC<CustomTableProps> = ({
  columns = [],
  data = [],
  loading = false,
  pagination = true,
  selection = false,
  actions,
  stickyHeader = false,
  scrollHeight = 400,
  className = '',
  ...props
}) => {
  // 행 선택 설정
  const rowSelection = selection ? {
    type: 'checkbox' as const,
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log('Selected rows:', selectedRowKeys, selectedRows);
    },
  } : undefined;

  // 페이지네이션 설정
  const paginationConfig = pagination === true ? {
    current: 1,
    pageSize: 50,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number, range: [number, number]) => 
      `${range[0]}-${range[1]} of ${total} items`,
  } : pagination;

  // 스크롤 설정
  const scrollConfig = stickyHeader ? {
    y: scrollHeight,
    x: 'max-content',
  } : undefined;

  return (
    <div className={`table-container ${className}`}>
      {/* 액션 버튼 영역 */}
      {actions && (
        <div className="flex justify-between items-center mb-4">
          <Space>
            {actions}
          </Space>
        </div>
      )}

      {/* 테이블 */}
      <AntTable
        {...props}
        columns={columns}
        dataSource={data}
        loading={loading}
        rowSelection={rowSelection}
        pagination={paginationConfig}
        scroll={scrollConfig}
        className={`${stickyHeader ? 'sticky-header-table' : ''} table-static table-fixed`}
      />
    </div>
  );
};

// 자주 사용하는 테이블 프리셋들
export const TablePresets = {
  // 기본 데이터 테이블
  DataTable: (props?: Partial<CustomTableProps>) => (
    <Table
      stickyHeader={true}
      scrollHeight={400}
      selection={true}
      pagination={true}
      {...props}
    />
  ),

  // 간단한 리스트 테이블
  ListTable: (props?: Partial<CustomTableProps>) => (
    <Table
      stickyHeader={false}
      selection={false}
      pagination={false}
      {...props}
    />
  ),

  // 대시보드 위젯 테이블
  WidgetTable: (props?: Partial<CustomTableProps>) => (
    <Table
      stickyHeader={false}
      selection={false}
      pagination={false}
      size="small"
      {...props}
    />
  ),
};

export default Table;

