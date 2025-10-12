'use client';

import { useEffect } from 'react';

// Ant Design의 React 19 호환성 경고를 필터링하는 컴포넌트
export default function AntdWarningFilter() {
  useEffect(() => {
    // console.error와 console.warn을 오버라이드하여 Ant Design 경고 숨기기
    const originalError = console.error;
    const originalWarn = console.warn;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error = (...args: any[]) => {
      const message = args[0];
      if (typeof message === 'string' && message.includes('[antd: compatible]')) {
        return;
      }
      originalError.apply(console, args);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.warn = (...args: any[]) => {
      const message = args[0];
      if (typeof message === 'string' && message.includes('[antd: compatible]')) {
        return;
      }
      originalWarn.apply(console, args);
    };

    // 클린업 함수
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return null;
}
