import React, { useEffect, useState } from 'react';

export const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop pointers
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Smooth outer ring lerp
  useEffect(() => {
    let animationFrame;
    const updateOuter = () => {
      setOuterPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(updateOuter);
    };
    animationFrame = requestAnimationFrame(updateOuter);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[999999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-blue-400/60 pointer-events-none z-[999998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-200 ${
          isHovered
            ? 'w-12 h-12 bg-blue-500/10 border-blue-400'
            : 'w-7 h-7 bg-transparent'
        }`}
        style={{ transform: `translate3d(${outerPos.x}px, ${outerPos.y}px, 0)` }}
      />
    </>
  );
};
