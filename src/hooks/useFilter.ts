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

  return { showFilter, setShowFilter };
};
