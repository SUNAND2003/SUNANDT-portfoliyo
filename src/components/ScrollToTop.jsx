import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isActive, setIsActive] = useState(false);
  const [dashOffset, setDashOffset] = useState(307.919); // 2 * PI * 49 ~= 307.919

  useEffect(() => {
    const pathLength = 307.919;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollTop > 150) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      if (docHeight > 0) {
        const progress = pathLength - (scrollTop * pathLength) / docHeight;
        setDashOffset(Math.max(0, Math.min(pathLength, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`progress-wrap cursor-pointer ${isActive ? 'active-progress' : ''}`}
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
    >
      <i className="ri-arrow-up-s-line"></i>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: '307.919, 307.919',
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 10ms linear'
          }}
        />
      </svg>
    </div>
  );
}
