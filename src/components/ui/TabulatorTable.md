# TabulatorTable 컴포넌트

재사용 가능한 Tabulator 테이블 컴포넌트입니다. 컬럼과 데이터만 정의하면 즉시 사용할 수 있습니다.

## 기본 사용법

```tsx
import { TabulatorTable, TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 데이터 타입 정의
interface UserData extends TabulatorData {
  id: string;
  name: string;
  email: string;
}

// 컬럼 정의
const columns: TabulatorColumn[] = [
  { title: 'ID', field: 'id', width: 80 },
  { title: '이름', field: 'name', width: 150 },
  { title: '이메일', field: 'email', width: 200 },
];

// 데이터
const data: UserData[] = [
  { id: '1', name: '홍길동', email: 'hong@example.com' },
  { id: '2', name: '김철수', email: 'kim@example.com' },
];

// 컴포넌트 사용
<TabulatorTable
  data={data}
  columns={columns}
  config={{
    showFooter: true,
    pageSize: 10,
    height: '400px',
  }}
/>;
```

## Props

### data: TabulatorData[]

테이블에 표시할 데이터 배열

### columns: TabulatorColumn[]

테이블 컬럼 정의 배열

### config?: TabulatorConfig

테이블 설정 옵션

### className?: string

추가 CSS 클래스명

## TabulatorColumn 속성

```tsx
interface TabulatorColumn {
  title: string; // 컬럼 제목
  field: string; // 데이터 필드명
  width?: number; // 컬럼 너비
  minWidth?: number; // 최소 너비
  responsive?: number; // 반응형 설정 (0: 항상 표시, 1: 768px 이하에서 숨김)
  [key: string]: any; // 기타 Tabulator 컬럼 옵션
}
```

## TabulatorConfig 설정

```tsx
interface TabulatorConfig {
  showFooter?: boolean; // 페이징 푸터 표시 여부 (기본: true)
  pageSize?: number; // 페이지당 항목 수 (기본: 50)
  height?: string | number; // 테이블 높이 (기본: '400px')
  layout?: 'fitColumns' | 'fitData' | 'fitDataFill'; // 레이아웃 (기본: 'fitColumns')
  responsiveLayout?: 'hide' | 'collapse'; // 반응형 레이아웃 (기본: 'collapse')
}
```

## 사용 예시

### 1. 기본 테이블 (페이징 있음)

```tsx
<TabulatorTable data={userData} columns={userColumns} />
```

### 2. 페이징 없는 테이블

```tsx
<TabulatorTable data={summaryData} columns={summaryColumns} config={{ showFooter: false }} />
```

### 3. 커스텀 설정

```tsx
<TabulatorTable
  data={productData}
  columns={productColumns}
  config={{
    showFooter: true,
    pageSize: 25,
    height: '600px',
    layout: 'fitData',
  }}
/>
```

## 특징

- ✅ **자동 페이징**: 커스텀 페이징 UI 포함
- ✅ **반응형**: 모바일에서 카드 형태로 변환
- ✅ **타입 안전**: TypeScript 완전 지원
- ✅ **재사용성**: 컬럼과 데이터만 정의하면 사용 가능
- ✅ **커스터마이징**: 다양한 설정 옵션 제공
- ✅ **성능**: 대용량 데이터 처리 최적화

## 페이지 예시

- `/tabulator-demo`: 기본 사용법 데모
- `/table-examples`: 다양한 사용 예시
