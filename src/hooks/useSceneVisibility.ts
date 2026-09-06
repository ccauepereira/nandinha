import { useEffect, useRef, useState } from 'react';
export function useSceneVisibility() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [foreground, setForeground] = useState(!document.hidden);
  useEffect(() => {
    if (!ref.current) return;
    const preload = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNear(true);
          preload.disconnect();
        }
      },
      { rootMargin: '240px' },
    );
    const activity = new IntersectionObserver(([entry]) =>
      setVisible(entry?.isIntersecting ?? false),
    );
    preload.observe(ref.current);
    activity.observe(ref.current);
    const handleVisibility = () => setForeground(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      preload.disconnect();
      activity.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);
  return { ref, near, active: visible && foreground };
}
