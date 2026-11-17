import React, { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING...');
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Disable background scroll while preloader is running
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      // Natural organic progression with varying speeds
      if (current < 25) {
        current += Math.floor(Math.random() * 4) + 3;
      } else if (current < 65) {
        current += Math.floor(Math.random() * 3) + 2;
      } else if (current < 90) {
        current += Math.floor(Math.random() * 2) + 1;
      } else if (current < 100) {
        current += 1;
      }

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setStatusText('SYSTEM READY');

        // Give a short pause at 100% so user perceives completion
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = originalOverflow;

          // Remove entirely from DOM after exit curtains clear the screen
          setTimeout(() => {
            setIsRemoved(true);
          }, 950);
        }, 280);
      } else {
        setProgress(current);
        if (current < 25) {
          setStatusText('INITIALIZING...');
        } else if (current < 55) {
          setStatusText('LOADING ASSETS...');
        } else if (current < 85) {
          setStatusText('CONFIGURING 3D...');
        } else {
          setStatusText('FINALIZING...');
        }
      }
    }, 24); // ~1.5 - 1.8 seconds total duration

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isRemoved) return null;

  // Arc length for r=44 is 2 * PI * 44 ~= 276.46
  const strokeDashoffset = 276.46 - (276.46 * progress) / 100;

  return (
    <div
      className={`portfolio-preloader ${isDone ? 'preloader-exit' : ''}`}
      aria-hidden={isDone}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Cinematic Split Curtain Panels */}
      <div className="preloader-curtain preloader-curtain-top" />
      <div className="preloader-curtain preloader-curtain-bottom" />
      <div className="preloader-seam-light" />

      {/* Cyber Grid & Ambient Radial Glow */}
      <div className="preloader-bg-glow" />
      <div className="preloader-grid" />

      {/* Main Center Stage */}
      <div className="preloader-content">
        {/* Futuristic Glowing Monogram Emblem */}
        <div className="preloader-emblem">
          <svg className="preloader-ring-svg" viewBox="0 0 100 100" aria-hidden="true">
            {/* Background static circle */}
            <circle className="ring-track" cx="50" cy="50" r="44" />
            {/* Spinning dashed orbit ring */}
            <circle className="ring-spin" cx="50" cy="50" r="44" />
            {/* Real-time progress circle */}
            <circle
              className="ring-progress"
              cx="50"
              cy="50"
              r="44"
              style={{ strokeDashoffset }}
            />
          </svg>

          {/* Central Initials */}
          <div className="preloader-monogram">
            <span className="mono-letter">S</span>
            <span className="mono-dot">·</span>
            <span className="mono-letter">T</span>
          </div>

          {/* Sci-Fi Corner Brackets */}
          <span className="corner-accent top-left" />
          <span className="corner-accent top-right" />
          <span className="corner-accent bottom-left" />
          <span className="corner-accent bottom-right" />
        </div>

        {/* Brand & Identity */}
        <div className="preloader-brand">
          <h2 className="preloader-name">SUNAND T</h2>
          <div className="preloader-role">
            <span className="role-pulse" />
            FULL STACK DEVELOPER
          </div>
        </div>

        {/* Neon Cyber Progress Bar */}
        <div className="preloader-bar-wrap">
          <div className="preloader-bar-track">
            <div
              className="preloader-bar-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="preloader-bar-light" />
            </div>
          </div>
        </div>

        {/* Status Line & High-tech Numeric Counter */}
        <div className="preloader-status-row">
          <span className="preloader-status-msg">{statusText}</span>
          <span className="preloader-counter">{progress.toString().padStart(2, '0')}%</span>
        </div>
      </div>
    </div>
  );
}
