import { useEffect, useState } from 'react';

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsLarge(window.innerWidth >= 1024); // lg: 1024px+
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isLarge;
}

export default useIsLargeScreen;