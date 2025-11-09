import { useEffect, useRef } from 'react';

const useMagneticEffect = (strength = 0.3) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let isHovered = false;
    let bounds;

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = bounds;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      // Set CSS variables for glow effect
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      element.style.setProperty('--mouse-x', `${x}%`);
      element.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleMouseEnter = () => {
      isHovered = true;
      bounds = element.getBoundingClientRect();
      element.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      isHovered = false;
      element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.transform = 'translate(0px, 0px)';
    };

    // Add event listeners
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
};

export default useMagneticEffect;