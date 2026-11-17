import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(false);
  const isMoving = useRef(false);
  const ballRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ballPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor for laptop view (>= 992px) with fine pointer
    if (window.innerWidth < 992 || window.matchMedia('(pointer: coarse)').matches) return;

    let animationFrameId = null;

    const updateCursor = () => {
      const dx = mousePos.current.x - ballPos.current.x;
      const dy = mousePos.current.y - ballPos.current.y;

      ballPos.current.x += dx * 0.22;
      ballPos.current.y += dy * 0.22;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${ballPos.current.x}px, ${ballPos.current.y}px, 0)`;
      }

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationFrameId = requestAnimationFrame(updateCursor);
      } else {
        isMoving.current = false;
        animationFrameId = null;
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
      if (!isMoving.current) {
        isMoving.current = true;
        animationFrameId = requestAnimationFrame(updateCursor);
      }
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
