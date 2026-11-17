import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import FlipCard from './FlipCard';

export default function Services({ isStandalonePage = false }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderFront = (service) => (
    <div className="service-flip-face">
      <div>
        <div className="service-flip-top">
          <div className="d-flex align-items-center gap-3">
            <div className="service-flip-icon-box">
              <i className={service.icon}></i>
            </div>
            <div>
              <span className="service-flip-tag">{service.category}</span>
              <span className="service-flip-index">/{service.id}</span>
            </div>
          </div>
        </div>

        <h3 className="service-flip-title">{service.title}</h3>
        <p className="service-flip-short">{service.short}</p>

        {service.features && (
          <div className="service-flip-features-preview">
            {service.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="service-flip-feat-item">
                <i className="ri-checkbox-circle-fill"></i>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="service-flip-footer">
        <span className="service-flip-hint">
          <i className="ri-repeat-2-line"></i> {isMobile ? 'Tap card to flip' : 'Drag or click to flip'}
        </span>
      </div>
    </div>
  );

  const renderBack = (service) => (
    <div className="service-flip-face">
      <div>
        <div className="service-flip-top">
          <div>
            <span className="service-flip-tag" style={{ color: '#00d2ff' }}>
              Full Capabilities
            </span>
            <span className="service-flip-index">/{service.id}</span>
          </div>
        </div>

        <h4 className="service-flip-title" style={{ fontSize: isMobile ? '18px' : '20px' }}>
          {service.title}
        </h4>
        <p className="service-flip-back-desc">{service.description}</p>

        <div className="service-flip-deliverables-title">Key Inclusions:</div>
        <div className="service-flip-deliverables-list">
          {service.features?.map((feat, idx) => (
            <div key={idx} className="service-flip-deliverable-item">
              <i className="ri-checkbox-circle-fill"></i>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="service-flip-footer">
        <a
          href="#contact"
          className="service-flip-btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            const el = document.getElementById('contact');
            if (el) {
              if (window.__lenis) {
                window.__lenis.scrollTo(el, { offset: -70 });
              } else {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
        >
          Discuss Service <i className="ri-arrow-right-up-line ms-1"></i>
        </a>

        <span className="service-flip-hint" style={{ color: '#94a3b8' }}>
          <i className="ri-arrow-go-back-line"></i> {isMobile ? 'Tap to return' : 'Return'}
        </span>
      </div>
    </div>
  );

  return (
    <section id="services" className="services-area pt-90 pb-90 position-relative overflow-hidden">
      {/* AMBIENT FLOATING GLOW ORBS IN BACKGROUND */}
      <div className="services-ambient-bg" aria-hidden="true">
        <div className="services-glow-orb services-glow-orb-1" />
        <div className="services-glow-orb services-glow-orb-2" />
        <div className="services-glow-orb services-glow-orb-3" />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {!isStandalonePage && (
          <motion.div
            className="row mb-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="col-12 text-center">
              <motion.span
                className="section-badge"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <i className="ri-flashlight-line me-1" style={{ color: '#00d2ff' }}></i> Capabilities & Expertise
              </motion.span>
              <div className="section-title section-black-title">
                <h2>Services I Offer</h2>
              </div>
              <p className="section-desc mx-auto">
                Comprehensive full-stack engineering and modern UI/UX design solutions tailored to help brands launch, scale, and thrive.
              </p>
            </div>
          </motion.div>
        )}

        {/* 3D INTERACTIVE FLIPCARD SERVICES GRID */}
        <div className="row g-4">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={service.id} className="col-lg-6 col-md-6 col-12">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile ? 0 : (isLeft ? -50 : 50),
                    y: isMobile ? 25 : 20
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: (index % 2) * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <FlipCard
                    front={renderFront(service)}
                    back={renderBack(service)}
                    height={isMobile ? 440 : 410}
                    radius={20}
                    tilt={!isMobile}
                    tiltMax={10}
                    glare={!isMobile}
                    glareOpacity={0.18}
                    hoverScale={isMobile ? 1 : 1.02}
                    perspective={1100}
                    background="#0c0e14"
                    color="#ffffff"
                    ariaLabel={`Flip card for ${service.title}`}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT BANNER WITH GLOW ANIMATION */}
        <motion.div
          className="services-callout-banner mt-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="row align-items-center justify-content-between g-4 position-relative" style={{ zIndex: 1 }}>
            <div className="col-lg-8">
              <span className="services-callout-badge">
                <i className="ri-star-line me-1" style={{ color: '#00d2ff' }}></i> Custom Solutions Available
              </span>
              <h3 className="services-callout-title">Have a specific project requirement or architecture in mind?</h3>
              <p className="services-callout-text mb-0">
                Whether you need a full product build, component redesign, API integration, or production deployment — I'm ready to bring your vision to life.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="services-callout-btn">
                Start a Conversation <i className="ri-arrow-right-up-line ms-1"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
