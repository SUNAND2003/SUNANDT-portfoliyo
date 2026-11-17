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

        {/* GHOST CURSOR FLUID SMOKE EFFECT (REACT BITS) */}
        <GhostCursor
          className="fullscreen-ghost-cursor"
          color="#B497CF"
          size={80}
          trailLength={50}
          inertia={0.5}
          turbulence={0.5}
          drift={0.3}
          bloomStrength={0.6}
          grainIntensity={0.05}
          zIndex={999998}
        />

        {/* CUSTOM CURSOR */}
        <CustomCursor />

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
