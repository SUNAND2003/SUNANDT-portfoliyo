import React, { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Disable background scroll while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setFading(true);
      document.body.style.overflow = originalOverflow;
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, 1300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className="preloader"
      style={{
        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: fading ? 0 : 1,
        transform: fading ? 'translateY(-24px)' : 'translateY(0)',
        pointerEvents: fading ? 'none' : 'auto'
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="preloader-heading">
        <span className="preloader-line preloader-line-left" aria-hidden="true" />
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <span className="preloader-line preloader-line-right" aria-hidden="true" />
      </div>
    </div>
  );
}
