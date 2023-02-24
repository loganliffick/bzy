import { useEffect, useState } from 'react';

const useCheckMobileScreen = () => {
  const isSSR = typeof window === 'undefined';

  const [width, setWidth] = useState(isSSR ? 0 : window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 500;
};

export default useCheckMobileScreen;
