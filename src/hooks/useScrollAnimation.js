import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (threshold = 0.1, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold,
      rootMargin: '0px 0px -100px 0px',
      ...options
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Calculate scroll-based progress
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const progress = Math.min(1, Math.max(0, 1 - (rect.top / windowHeight)));
          setScrollProgress(progress);
        } else {
          setIsVisible(false);
          setScrollProgress(0);
        }
      },
      observerOptions
    );

    // Enhanced scroll progress tracking
    const handleScroll = () => {
      if (!isVisible) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate how much of the element is visible
      const visibleHeight = Math.min(elementHeight, Math.max(0, windowHeight - rect.top));
      const progress = visibleHeight / elementHeight;

      setScrollProgress(Math.min(1, progress));
    };

    const currentElement = element;
    observer.observe(currentElement);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.unobserve(currentElement);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, options, isVisible]);

  return [ref, isVisible, scrollProgress];
};

export default useScrollAnimation;