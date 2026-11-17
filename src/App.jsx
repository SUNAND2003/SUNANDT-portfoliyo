import React, { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import GhostCursor from './components/GhostCursor';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Single Page Sections
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [isLaptop, setIsLaptop] = React.useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 992 && !window.matchMedia('(pointer: coarse)').matches
  );

  useEffect(() => {
    const checkLaptop = () => {
      setIsLaptop(window.innerWidth >= 992 && !window.matchMedia('(pointer: coarse)').matches);
    };
    window.addEventListener('resize', checkLaptop);
    return () => window.removeEventListener('resize', checkLaptop);
  }, []);

  // Support direct hash or path entry (e.g. /#contact or /#projects)
  useEffect(() => {
    const hash = window.location.hash || window.location.pathname;
    const targetId = hash.replace(/^[#/]+/, '');
    if (targetId && document.getElementById(targetId)) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -70 });
          } else {
            const headerOffset = 70;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 350);
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="portfolio-app">
        {/* SCROLL READING PROGRESS AT TOP */}
        <ScrollProgress />

        {/* PRELOADER */}
        <Preloader />

        {/* FLOATING SCROLL TO TOP */}
        <ScrollToTop />

        {/* MOUSE HOVER CURSOR ANIMATIONS (LAPTOP VIEW ONLY) */}
        {isLaptop && (
          <>
            <GhostCursor
              className="fullscreen-ghost-cursor"
              color="#00d2ff"
              size={70}
              trailLength={22}
              inertia={0.4}
              turbulence={0.3}
              drift={0.2}
              bloomStrength={0.45}
              grainIntensity={0.02}
              maxRatio={1.25}
              budget={400000}
              zIndex={999998}
            />
            <CustomCursor />
          </>
        )}

        {/* FLOATING NAVBAR WITH SCROLLSPY */}
        <Navbar />

        {/* MAIN SINGLE PAGE SECTIONS */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
