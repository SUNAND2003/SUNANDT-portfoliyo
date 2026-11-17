import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SECTION_THEMES = {
  home: {
    id: 'home',
    name: 'Home',
    tag: 'Emerald Flow',
    color: '#22c55e',
    rgb: '34, 197, 94',
    isCenterWhite: false,
    desc: 'Deep Black Theme • Glowing Emerald'
  },
  about: {
    id: 'about',
    name: 'About',
    tag: 'Cyber Cyan',
    color: '#06b6d4',
    rgb: '6, 182, 212',
    isCenterWhite: false,
    desc: 'Deep Black Theme • Cosmic Cyan'
  },
  experience: {
    id: 'experience',
    name: 'Experience',
    tag: 'Electric Violet',
    color: '#a855f7',
    rgb: '168, 85, 247',
    isCenterWhite: false,
    desc: 'Deep Black Theme • Electric Violet'
  },
  services: {
    id: 'services',
    name: 'Services (Center)',
    tag: 'Pure White • Black Type',
    color: '#ffffff',
    rgb: '255, 255, 255',
    isCenterWhite: true,
    desc: 'Center Part Inverted: Crisp White & Black Typography'
  },
  projects: {
    id: 'projects',
    name: 'Portfolio',
    tag: 'Sunset Amber',
    color: '#f59e0b',
    rgb: '245, 158, 11',
    isCenterWhite: false,
    desc: 'Deep Black Theme • Radiant Amber'
  },
  contact: {
    id: 'contact',
    name: 'Contact',
    tag: 'Neon Rose',
    color: '#f43f5e',
    rgb: '244, 63, 94',
    isCenterWhite: false,
    desc: 'Deep Black Theme • Neon Rose'
  }
};

const PALETTE_OPTIONS = [
  { id: 'auto', label: '⚡ Auto (Scroll-Driven)', color: '#22c55e', desc: 'Changes color per section dynamically' },
  { id: 'emerald', label: 'Emerald Flow', color: '#22c55e', rgb: '34, 197, 94' },
  { id: 'cyan', label: 'Cyber Cyan', color: '#06b6d4', rgb: '6, 182, 212' },
  { id: 'violet', label: 'Electric Violet', color: '#a855f7', rgb: '168, 85, 247' },
  { id: 'amber', label: 'Sunset Amber', color: '#f59e0b', rgb: '245, 158, 11' },
  { id: 'rose', label: 'Neon Rose', color: '#f43f5e', rgb: '244, 63, 94' },
  { id: 'monochrome', label: 'Monochrome Luxe', color: '#ffffff', rgb: '255, 255, 255' }
];

export default function ScrollColorController() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedMode, setSelectedMode] = useState('auto');
  const [ambientGlow, setAmbientGlow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Determine current active color and rgb based on mode and scroll section
  const currentSectionConfig = SECTION_THEMES[activeSection] || SECTION_THEMES.home;
  
  let currentAccent = currentSectionConfig.color;
  let currentRgb = currentSectionConfig.rgb;

  if (selectedMode !== 'auto') {
    const selected = PALETTE_OPTIONS.find((p) => p.id === selectedMode);
    if (selected) {
      currentAccent = selected.color;
      currentRgb = selected.rgb;
    }
  }

  // Update CSS Variables on root whenever section or theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--current-accent', currentAccent);
    root.style.setProperty('--current-accent-rgb', currentRgb);
    root.style.setProperty('--is-center-white', currentSectionConfig.isCenterWhite ? '1' : '0');
  }, [currentAccent, currentRgb, currentSectionConfig.isCenterWhite]);

  // Scroll listener to detect active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'services', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page -> contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check which section is in view
      const triggerOffset = windowHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - triggerOffset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* AMBIENT BACKGROUND GLOW AURA (SMOOTHLY SHIFTS HUES) */}
      {ambientGlow && (
        <div
          className="scroll-ambient-aura"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
            transition: 'opacity 0.6s ease'
          }}
          aria-hidden="true"
        >
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '15%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(${currentRgb}, 0.08) 0%, transparent 70%)`,
              filter: 'blur(90px)',
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.8s ease'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '25%',
              right: '10%',
              width: '550px',
              height: '550px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(${currentRgb}, 0.06) 0%, transparent 70%)`,
              filter: 'blur(100px)',
              transform: 'translate(20%, 20%)',
              transition: 'all 0.8s ease'
            }}
          />
        </div>
      )}

      {/* FLOATING SCROLL COLOR OPTION PILL & POPUP (BOTTOM LEFT) */}
      <div className="scroll-color-widget-wrap">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="scroll-color-panel"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="scroll-panel-header">
                <div className="d-flex align-items-center gap-2">
                  <i className="ri-palette-line" style={{ color: currentAccent }}></i>
                  <h6>Scroll Site Color Options</h6>
                </div>
                <button
                  className="close-panel-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close options"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>

              <div className="scroll-panel-status">
                <div className="status-label">CURRENT SECTION:</div>
                <div className="status-value d-flex align-items-center gap-2">
                  <span
                    className="status-dot"
                    style={{ backgroundColor: currentSectionConfig.color }}
                  />
                  <strong>{currentSectionConfig.name}</strong> &bull; {currentSectionConfig.tag}
                </div>
                <div className="status-desc mt-1 text-muted" style={{ fontSize: '11.5px' }}>
                  {currentSectionConfig.desc}
                </div>
              </div>

              <div className="scroll-panel-modes">
                <div className="mode-section-title">CHOOSE COLOR MODE:</div>
                <div className="palette-grid">
                  {PALETTE_OPTIONS.map((opt) => {
                    const isSelected = selectedMode === opt.id;
                    return (
                      <button
                        key={opt.id}
                        className={`palette-choice-btn ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedMode(opt.id)}
                      >
                        <span
                          className="palette-swatch"
                          style={{
                            backgroundColor: opt.id === 'auto' ? currentSectionConfig.color : opt.color,
                            boxShadow: isSelected ? `0 0 10px ${opt.color}` : 'none'
                          }}
                        />
                        <span className="palette-label">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="scroll-panel-toggle mt-3 pt-2 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                <span style={{ fontSize: '12.5px', color: '#cbd5e1' }}>
                  <i className="ri-sparkling-2-line me-1" style={{ color: currentAccent }}></i> Ambient Glow Aura
                </span>
                <button
                  type="button"
                  className={`toggle-switch-btn ${ambientGlow ? 'on' : 'off'}`}
                  onClick={() => setAmbientGlow(!ambientGlow)}
                  aria-label="Toggle ambient glow"
                >
                  <span className="toggle-thumb" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* COMPACT FLOATING TRIGGER PILL */}
        <motion.button
          className={`scroll-color-pill-btn ${currentSectionConfig.isCenterWhite ? 'center-white-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Open scroll color options"
          title="Click to customize scroll color theme"
        >
          <span
            className="pill-pulse-dot"
            style={{
              backgroundColor: currentAccent,
              boxShadow: `0 0 10px ${currentAccent}`
            }}
          />
          <span className="pill-section-name">
            {currentSectionConfig.name}:
          </span>
          <span className="pill-tag-name" style={{ color: currentSectionConfig.isCenterWhite ? '#000000' : currentAccent }}>
            {selectedMode === 'auto' ? currentSectionConfig.tag : PALETTE_OPTIONS.find((p) => p.id === selectedMode)?.label}
          </span>
          <span className="pill-palette-icon">
            <i className="ri-palette-line"></i>
          </span>
        </motion.button>
      </div>
    </>
  );
}
