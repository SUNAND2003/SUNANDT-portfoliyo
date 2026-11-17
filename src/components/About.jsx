import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, counters, skillCategories } from '../data/portfolioData';
import Counter from './Counter';
import HoloCard from './HoloCard';
import Galaxy from './Galaxy';

export default function About({ isStandalonePage = false }) {
  return (
    <section id="about" className="about-area pt-80 pb-80 position-relative overflow-hidden">
      {/* GALAXY COSMIC BACKGROUND */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.85
        }}
      >
        <Galaxy
          layers={3}
          density={1.6}
          glowIntensity={0.5}
          starSize={1.1}
          flareIntensity={0.8}
          starSpeed={0.3}
          mouseRepulsion={true}
          repulsionStrength={1.5}
          twinkleIntensity={0.4}
          starColors={['#00d2ff', '#38bdf8', '#0077ff', '#ffffff']}
          dpr={0.85}
          transparent={true}
          clickWarp={false}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {!isStandalonePage && (
          <div className="row mb-50">
            <div className="col-12 text-center">
              <span className="section-badge">Get To Know Me</span>
              <div className="section-title section-white-title">
                <h2>About Me</h2>
              </div>
            </div>
          </div>
        )}

        <div className="row align-items-center mb-60">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="position-relative text-center d-flex justify-content-center"
            >
              <div className="about-photo-wrapper">
                <div className="about-photo-aura" aria-hidden="true" />
                <HoloCard
                  image={personalInfo.aboutImage || personalInfo.heroImage}
                  alt={personalInfo.name}
                  className="about-photo-card"
                  holo={false}
                  width={380}
                  radius={24}
                  tiltMax={16}
                  hoverScale={1.05}
                  idle={true}
                  shadow={true}
                />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="ps-lg-4"
            >
              <div className="hero-experience-badge">
                <i className="ri-briefcase-4-line"></i> Senior Full Stack Developer
              </div>

              <h3 className="text-white mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
                Hi, I'm {personalInfo.name}
              </h3>

              <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                {personalInfo.bio}
              </p>

              <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                With professional experience across agile digital agencies like <strong>Hexa Branding</strong> and <strong>Bloombiz Creatives</strong>, I specialize in translating complex requirements into elegant, reliable digital applications. I love writing clean code, solving architectural challenges, and shipping delightful user experiences.
              </p>

              {/* COUNTERS */}
              <div className="hero-counter-area d-flex justify-content-between flex-wrap gap-3 mt-4 pt-3 border-top border-secondary border-opacity-25">
                {counters.map((item, idx) => (
                  <div key={idx} className="counter-item counter-text-wrap">
                    <Counter
                      stop={item.value}
                      speed={2200}
                      suffix={item.suffix}
                      className="count-text plus"
                    />
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* SKILLS MATRIX */}
        <div className="row mt-50">
          <div className="col-12 mb-30 text-center">
            <h3 className="text-white mb-2" style={{ fontSize: '24px' }}>
              Technical Expertise & Tools
            </h3>
            <p className="text-muted small">
              Technologies and libraries I use daily to build production-grade web applications.
            </p>
          </div>

          {skillCategories.map((cat, idx) => (
            <div key={cat.name} className="col-lg-4 col-md-6 mb-4">
              <motion.div
                className="skill-box-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="skill-category-title">
                  <i className="ri-code-s-slash-line text-primary" style={{ color: '#00d2ff' }}></i>
                  {cat.name}
                </div>
                <div className="skill-grid">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-badge-item">
                      <i className={skill.icon}></i>
                      <span className="skill-badge-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
