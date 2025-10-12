# RMS (Remote Monitoring System)

ATM 원격 관리 시스템을 위한 Next.js 기반 웹 애플리케이션

## 🚀 기술 스택

- **Framework**: Next.js 15.5.4 (App Router + Turbopack)
- **Runtime**: React 18.3.1
- **Language**: TypeScript 5
- **UI Library**: Ant Design 5.27.4
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **Table Library**: Tabulator 6.3.1
- **Drag & Drop**: @dnd-kit
- **Icons**: @ant-design/icons, Lucide React
- **Date Library**: Day.js 1.11.18

## 📦 주요 기능

### ✨ UI/UX
- 탭 기반 멀티 페이지 네비게이션 (드래그 앤 드롭 지원)
- 반응형 레이아웃 (사이드바, 헤더, 컨텐츠)
- 모달 시스템 (다양한 크기 및 스타일 지원)
- 커스텀 Tabulator 테이블 컴포넌트

### 📊 대시보드
- ATM 상태 실시간 모니터링
- 그룹별 필터링
- 현금 재고 및 오류 코드 추적

### 🔐 사용자 관리
- 비밀번호 변경
- 역할 기반 접근 제어

## 🛠️ 설치 및 실행

### 로컬 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트: 3001)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### Docker 환경

#### 개발 환경
```bash
# 개발 환경 컨테이너 실행
docker-compose up dev

# 또는
docker-compose up
```

#### 프로덕션 환경
```bash
# 프로덕션 빌드 및 실행
docker-compose --profile production up prod
```

#### Docker 명령어
```bash
# 백그라운드 실행
docker-compose up -d

# 컨테이너 중지
docker-compose down

# 로그 확인
docker-compose logs -f

# 이미지 재빌드
docker-compose build --no-cache
```

## 📁 프로젝트 구조

```
dev-rms/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── dashboard/          # 대시보드
│   │   ├── modal-basic/        # 모달 예제
│   │   ├── table-examples/     # 테이블 예제
│   │   ├── globals.css         # 전역 스타일
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   └── page.tsx            # 홈 페이지
│   ├── components/
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   ├── AppLayout.tsx   # 메인 레이아웃
│   │   │   ├── Header.tsx      # 헤더
│   │   │   ├── Sidebar.tsx     # 사이드바
│   │   │   └── GlobalTabs.tsx  # 전역 탭
│   │   ├── popup/              # 모달 컴포넌트
│   │   │   ├── ChangePassword.tsx
│   │   │   └── ModalDefault.tsx
│   │   └── ui/                 # 공통 UI 컴포넌트
│   │       ├── Modal.tsx       # 모달 래퍼
│   │       └── TabulatorTable.tsx # Tabulator 테이블
│   ├── contexts/
│   │   └── TabContext.tsx      # 탭 상태 관리
│   ├── lib/
│   │   └── antd.ts             # Ant Design 설정
│   ├── styles/                 # CSS 모듈
│   │   ├── modal.css           # 모달 스타일
│   │   └── tabulator.css       # Tabulator 스타일
│   └── config/
│       └── pages.ts            # 페이지 설정
├── public/
│   ├── icons/                  # SVG 아이콘
│   └── images/                 # 이미지
├── Dockerfile                  # Docker 설정
├── docker-compose.yml          # Docker Compose 설정
└── package.json                # 의존성 및 스크립트

```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#171A1C` (검은색)
- **Secondary**: `#D70051` (핑크)
- **Border**: `#C7CDD1` (회색)
- **Background**: `#F4F5F6` (연한 회색)

### 폰트
- **기본 폰트**: Pretendard (한글/영문)
- **대체 폰트**: Inter, sans-serif

### 버튼 크기
- **Small**: 24px
- **Default**: 32px
- **Large**: 58px
- **Modal**: 48px

## 🔧 환경 변수

`.env.local` 파일을 생성하여 환경 변수를 설정하세요:

```env
# API URL (필요시)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📝 개발 가이드

### 코드 스타일
- ESLint 설정을 따릅니다
- Prettier는 프로젝트에 포함되어 있지 않습니다

### 커밋 컨벤션
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `style`: 스타일 변경
- `refactor`: 코드 리팩토링
- `docs`: 문서 수정

## 🐛 알려진 이슈

현재 알려진 이슈는 없습니다.

## 📄 라이선스

Private

## 👥 기여자

- incoding-jaeyoung

## 📞 문의

프로젝트 관련 문의사항은 GitHub Issues를 통해 남겨주세요.
