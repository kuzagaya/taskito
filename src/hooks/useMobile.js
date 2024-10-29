import { useState, useEffect } from 'react';

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1350);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1350);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}