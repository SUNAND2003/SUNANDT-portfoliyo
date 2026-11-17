import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, counters, skillCategories } from '../data/portfolioData';
import Counter from './Counter';
import Lanyard from './Lanyard';
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
          density={1.0}
          glowIntensity={0.45}
          starSize={1.0}
          flareIntensity={0.7}
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
          <motion.div
            className="row mb-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="col-12 text-center" style={{ paddingTop: '25px' }}>
              <motion.span
                className="section-badge"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                Get To Know Me
              </motion.span>
              <div className="section-title section-white-title">
                <h2>About Me</h2>
              </div>
            </div>
          </motion.div>
        )}

        <div className="row align-items-center mb-60">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="position-relative text-center d-flex flex-column align-items-center justify-content-center"
            >
              <div className="about-lanyard-wrapper">
                <div className="about-photo-aura" aria-hidden="true" />
                <Lanyard
                  frontImage={personalInfo.aboutImage || '/assets/images/about/sunand-id-card.jpg'}
                  backImage={personalInfo.aboutImage || '/assets/images/about/sunand-id-card.jpg'}
                  imageFit="cover"
                  cardColor="#0d0f15"
                  orientation="portrait"
                  finish="glossy"
                  size={0.68}
                  strapLength={0.46}
                  strapColor="#08090d"
                  strapWidth={0.65}
                  metal="silver"
                  gravity={0.95}
                  damping={0.48}
                  elasticity={0.52}
                  breeze={0.38}
                  interactive={true}
                  intro={true}
                />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="ps-lg-4"
            >
              <div className="hero-experience-badge">
                <i className="ri-briefcase-4-line"></i> Full Stack Developer
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
                  <motion.div
                    key={idx}
                    className="counter-item counter-text-wrap"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Counter
                      stop={item.value}
                      speed={2200}
                      suffix={item.suffix}
                      className="count-text plus"
                    />
                    <span className="counter-title">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* SKILLS MATRIX */}
        <div className="row mt-50">
          <motion.div
            className="col-12 mb-30 text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-white mb-2" style={{ fontSize: '24px' }}>
              Technical Expertise & Tools
            </h3>
            <p className="text-muted small">
              Technologies and libraries I use daily to build production-grade web applications.
            </p>
          </motion.div>

          {skillCategories.map((cat, idx) => {
            const xOffset = idx === 0 ? -50 : idx === 2 ? 50 : 0;
            const yOffset = idx === 1 ? 40 : 20;
            const presets = ['cosmos', 'shards', 'bursts'];
            const preset = presets[idx % presets.length];
            return (
              <div key={cat.name} className="col-lg-4 col-md-6 mb-4">
                <motion.div
                  initial={{ opacity: 0, x: xOffset, y: yOffset }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: '100%' }}
                >
                  <HoloCard
                    preset={preset}
                    intensity={0.65}
                    scale={1.2}
                    edgeSparkle={0.7}
                    frame={3}
                    glare={0.4}
                    foilColor="#00d2ff"
                    width="100%"
                    radius={16}
                    tiltMax={14}
                    hoverScale={1.03}
                    idle={true}
                    shadow={true}
                    style={{ height: '100%' }}
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
                  </HoloCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
