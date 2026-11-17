import React, { useState, useEffect, useMemo } from 'react';
import StarBorder from './StarBorder';
import GooeyNav from './GooeyNav';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', icon: 'ri-home-4-line' },
  { label: 'About', href: '#about', icon: 'ri-user-3-line' },
  { label: 'Experience', href: '#experience', icon: 'ri-briefcase-3-line' },
  { label: 'Services', href: '#services', icon: 'ri-service-line' },
  { label: 'Portfolio', href: '#projects', icon: 'ri-grid-line' },
  { label: 'Contact', href: '#contact', icon: 'ri-mail-send-line' }
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const activeNavIndex = useMemo(() => {
    const idx = NAV_ITEMS.findIndex((item) => item.href === activeSection);
    return idx >= 0 ? idx : 0;
  }, [activeSection]);

  const gooeyItems = useMemo(
    () => NAV_ITEMS.map(({ label, href }) => ({ label, href })),
    []
  );

  const scrollToSection = (hash) => {
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -70 });
      } else {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setActiveSection(hash);
      if (window.history?.replaceState) {
        window.history.replaceState(null, '', hash);
      }
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'services', 'projects', 'contact'];

    const handleScroll = () => {
      setIsSticky(window.scrollY >= 40);

      // If at bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('#contact');
        return;
      }

      const scrollY = window.scrollY;
      const headerOffset = 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(`#${id}`);
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
      <header
        className={`main-header exact-model-header ${
          isSticky ? 'fixed-header' : 'normal-header on-dark-top'
        }`}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* LEFT LOGO */}
            <div className="header-col-left">
              <a
                href="#home"
                className="logo-text"
                aria-label="Sunand T - Home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
              >
                <span className="logo-main">Sunand</span>
                <span className="logo-t ms-1">T</span>
              </a>
            </div>

            {/* CENTER FLOATING GOOEY PILL NAV */}
            <div className="header-col-center d-none d-lg-block">
              <div className="center-nav-pill-wrapper" aria-label="Main Navigation">
                <GooeyNav
                  items={gooeyItems}
                  activeIndex={activeNavIndex}
                  onChange={(index, item) => {
                    if (item?.href) {
                      scrollToSection(item.href);
                    }
                  }}
                  theme="dark"
                  size="sm"
                  color="#ffffff"
                  activeTextColor="#000000"
                  colors={['#ffffff', '#00d2ff']}
                  particleCount={15}
                  spread={48}
                  animationTime={550}
                  timeVariance={280}
                  gooeyness={0.5}
                  wobble={0.45}
                  hoverEffect={true}
                  frame={true}
                />
              </div>
            </div>

            {/* RIGHT BUTTON & MOBILE TOGGLE */}
            <div className="header-col-right d-flex align-items-center gap-3">
              <StarBorder
                as="a"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="talk-pill-btn d-none d-sm-inline-flex"
                color="#00d2ff"
                trailColor="#00d2ff"
                duration={3.5}
                direction="clockwise"
                stars={1}
                trailLength={0.3}
                thickness={1.5}
                radius={9999}
                glow={0.7}
                hover="lap"
                sparkle={true}
                clickPulse={true}
                theme="dark"
                backgroundColor="#000000"
                textColor="#ffffff"
                borderColor="rgba(255, 255, 255, 0.2)"
              >
                Let's Talk <span className="talk-arrow">↗</span>
              </StarBorder>

              <button
                className="sidebar-toggle-btn d-lg-none"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Toggle navigation menu"
              >
                <i className="ri-menu-4-line"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <aside
        className={`sidebar__area exact-model-sidebar ${isMobileMenuOpen ? 'sidebar-opened' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="sidebar__wrapper">
          {/* HEADER: LOGO + CLOSE BUTTON */}
          <div className="sidebar__header d-flex align-items-center justify-content-between mb-4">
            <a
              href="#home"
              className="logo-text"
              aria-label="Sunand T - Home"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('#home');
              }}
            >
              <span className="logo-main">Sunand</span>
              <span className="logo-t ms-1">T</span>
            </a>
            <button
              className="sidebar__close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="sidebar__category-label">NAVIGATION</div>

          {/* CATEGORIES LIST */}
          <nav className="mobile-menu-nav mb-4">
            <ul className="mobile-menu-list">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.label} className="mobile-menu-item">
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        scrollToSection(item.href);
                      }}
                    >
                      <span className="mobile-nav-link-left">
                        <i className={`${item.icon} mobile-nav-icon`}></i>
                        <span className="mobile-nav-label">{item.label}</span>
                      </span>
                      <i className="ri-arrow-right-s-line mobile-nav-arrow"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* BOTTOM CTA: LET'S TALK + SOCIAL LINKS */}
          <div className="sidebar__bottom mt-auto pt-4 border-top border-secondary border-opacity-25">
            <StarBorder
              as="a"
              href="#contact"
              className="talk-pill-btn d-inline-flex w-100 justify-content-center py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('#contact');
              }}
              color="#00d2ff"
              trailColor="#00d2ff"
              duration={3.5}
              direction="clockwise"
              stars={1}
              trailLength={0.3}
              thickness={1.5}
              radius={9999}
              glow={0.7}
              hover="lap"
              sparkle={true}
              clickPulse={true}
              theme="dark"
              backgroundColor="#000000"
              textColor="#ffffff"
              borderColor="rgba(255, 255, 255, 0.2)"
            >
              Let's Talk <span className="talk-arrow">↗</span>
            </StarBorder>

            <div className="mobile-menu-socials mt-3 d-flex justify-content-center gap-3">
              <a
                href="https://github.com/SUNAND2003"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label="GitHub"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sunand2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="mailto:sunandt2003@gmail.com"
                className="mobile-social-icon"
                aria-label="Email"
              >
                <i className="ri-mail-line"></i>
              </a>
              <a
                href="https://wa.me/917510399453"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label="WhatsApp"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={`body-overlay ${isMobileMenuOpen ? 'opened' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
