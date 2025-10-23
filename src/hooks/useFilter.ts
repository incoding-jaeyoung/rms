import { useState, useEffect } from 'react';

export const useFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowFilter(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 모바일에서 필터가 열리면 body 스크롤 막기
  useEffect(() => {
    if (showFilter && window.innerWidth < 768) {
      // 필터가 열릴 때 body 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 필터가 닫히거나 데스크톱일 때 스크롤 복원
      document.body.style.overflow = '';
    }

    // 클린업: 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFilter]);

  return { showFilter, setShowFilter };
};
