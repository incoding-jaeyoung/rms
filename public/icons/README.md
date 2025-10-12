# 아이콘 디렉토리

디자인팀에서 제작한 커스텀 SVG 아이콘들을 저장하는 폴더입니다.

## 사용 예시

### React 컴포넌트

```tsx
import { Icon, Icons } from '@/components/ui/Icon';

// 기본 사용법
<Icon
  src="/icons/dashboard.svg"
  alt="Dashboard"
  width={24}
  height={24}
/>

// 프리셋 사용법
<Icons.dashboard className="w-5 h-5" />
<Icons.add onClick={() => console.log('Add clicked')} />
```

### CSS 배경

```css
.icon-dashboard {
  background-image: url('/icons/dashboard.svg');
  background-size: 24px 24px;
}
```

## 네이밍 규칙

- 케밥 케이스 사용: `user-profile.svg`
- 명확하게 작성: `arrow-right.svg` (단순히 `arrow.svg` 아님)
- 여러 크기가 있는 경우 파일명에 크기 포함: `icon-16.svg`, `icon-24.svg`

## 필요한 아이콘들

- dashboard.svg
- terminals.svg
- cash.svg
- journal.svg
- setup.svg
- notice.svg
- add.svg
- edit.svg
- delete.svg
- export.svg
- search.svg
- online.svg
- offline.svg
- maintenance.svg
- close.svg
- menu.svg
- arrow-right.svg
- arrow-left.svg
- logo.svg
