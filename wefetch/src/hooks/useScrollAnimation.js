import { useEffect, useRef } from 'react';

/**
 * Hook to observe DOM elements and apply .visible class for fade-up animation
 */
export default function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = el.querySelectorAll('.fade-up');
    elements.forEach(e => observer.observe(e));

    return () => observer.disconnect();
  }, []);

  return ref;
}
