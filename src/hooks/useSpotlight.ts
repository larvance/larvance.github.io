import { useCallback } from 'react';

export function useSpotlight() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    target.style.setProperty('--mouse-x', '-400px');
    target.style.setProperty('--mouse-y', '-400px');
  }, []);

  return {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
