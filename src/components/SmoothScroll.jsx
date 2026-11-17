import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
      infinite: false,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);
    window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
