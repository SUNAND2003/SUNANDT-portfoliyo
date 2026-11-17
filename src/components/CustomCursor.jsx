import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ballRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ballPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor for laptop view (>= 992px) with fine pointer
    if (window.innerWidth < 992 || window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    let animationFrameId;
    const updateCursor = () => {
      // Smooth lerp
      ballPos.current.x += (mousePos.current.x - ballPos.current.x) * 0.2;
      ballPos.current.y += (mousePos.current.y - ballPos.current.y) * 0.2;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${ballPos.current.x}px, ${ballPos.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && (window.innerWidth < 992 || window.matchMedia('(pointer: coarse)').matches)) {
    return null;
  }

  return (
    <div
      id="magic-cursor"
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999999
      }}
    >
      <div
        id="ball"
        ref={ballRef}
        className={isHovered ? 'hovered' : ''}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          opacity: isVisible ? 1 : 0,
          transform: 'translate3d(-100px, -100px, 0)',
          transformOrigin: 'center center',
          transition: 'width 0.22s ease, height 0.22s ease, margin 0.22s ease, opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
          width: isHovered ? '56px' : '38px',
          height: isHovered ? '56px' : '38px',
          marginLeft: isHovered ? '-28px' : '-19px',
          marginTop: isHovered ? '-28px' : '-19px',
          border: isHovered ? '2px solid #00d2ff' : '2px solid rgba(0, 210, 255, 0.55)',
          backgroundColor: isHovered ? 'rgba(0, 210, 255, 0.22)' : 'rgba(0, 210, 255, 0.04)',
          boxShadow: isHovered
            ? '0 0 24px rgba(0, 210, 255, 0.75), inset 0 0 12px rgba(0, 210, 255, 0.35)'
            : '0 0 10px rgba(0, 210, 255, 0.25)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
