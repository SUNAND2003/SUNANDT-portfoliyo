import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';

export default function Services({ isStandalonePage = false }) {
  // Cursor-tracking spotlight on service cards
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-12 text-center">
              <motion.span
                className="section-badge"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <i className="ri-flashlight-line me-1" style={{ color: '#22c55e' }}></i> Capabilities & Expertise
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

        {/* BENTO GRID SERVICES LAYOUT */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.id} className={service.colClass}>
              <motion.div
                className="modern-service-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                onMouseMove={handleCardMouseMove}
              >
                {/* TOP BAR: ICON + BADGES + ARROW */}
                <div className="service-card-top">
                  <div className="d-flex align-items-center gap-3">
                    <div className="service-icon-box">
                      <i className={service.icon}></i>
                    </div>
                    <div>
                      <span className="service-category-tag">{service.category}</span>
                      <span className="service-index-number">/{service.id}</span>
                    </div>
                  </div>

                  <a href="#contact" className="service-arrow-circle" aria-label={`Inquire about ${service.title}`}>
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>

                {/* CARD CONTENT */}
                <div className="service-card-content">
                  <h3 className="service-card-heading">{service.title}</h3>
                  <p className="service-card-short">{service.short}</p>
                  <p className="service-card-desc">{service.description}</p>
                </div>

                {/* DELIVERABLES PILLS */}
                {service.features && (
                  <div className="service-deliverables">
                    <div className="deliverables-grid">
                      {service.features.map((feat, idx) => (
                        <span key={idx} className="deliverable-tag">
                          <i className="ri-check-line deliverable-check"></i> {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* BOTTOM LINK */}
                <div className="service-card-footer">
                  <a href="#contact" className="service-discuss-link">
                    Discuss this service <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
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
                <i className="ri-star-line me-1" style={{ color: '#22c55e' }}></i> Custom Solutions Available
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
