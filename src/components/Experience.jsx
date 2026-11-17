import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { workExperience } from '../data/portfolioData';
import LightTunnel from './LightTunnel';

export default function Experience({ isStandalonePage = false }) {
  const timelineRef = useRef(null);

  // Track scroll progress across the experience timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 65%']
  });

  // Smooth spring physics for fluid movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const arrowTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="experience-area pt-80 pb-80 position-relative overflow-hidden">
      {/* REACT BITS LIGHT TUNNEL BACKGROUND */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        <LightTunnel
          cableColor="#ffffff"
          pulseColor="#ffffff"
          cableCount={56}
          pulseDensity={0.5}
          flowDirection="inward"
          mouseInteraction={true}
          clickSurge={true}
          fadeNear={0.45}
          opacity={0.75}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {!isStandalonePage && (
          <div className="row mb-50">
            <div className="col-12 text-center">
              <span className="section-badge">Career Journey</span>
              <div className="section-title section-white-title">
                <h2>Work Experience</h2>
              </div>
              <p className="section-desc mx-auto">
                Proven track record as a full-stack engineer delivering high-performance web applications and agency client solutions.
              </p>
            </div>
          </div>
        )}

        <div ref={timelineRef} className="experience-timeline">
          {/* CONTINUOUS VERTICAL RAIL WITH SCROLL-DRIVEN MOVING ARROW */}
          <div className="timeline-track-rail" aria-hidden="true">
            {/* ACTIVE GLOWING FILL TRAIL */}
            <motion.div
              className="timeline-track-fill"
              style={{ height: progressHeight }}
            />

            {/* SCROLL-DRIVEN MOVING ARROW BEACON */}
            <motion.div
              className="timeline-scroll-arrow"
              style={{ top: arrowTop }}
            >
              <div className="timeline-arrow-pulse" />
              <div className="timeline-arrow-badge">
                <i className="ri-arrow-down-line"></i>
              </div>
            </motion.div>
          </div>

          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-dot" />

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <div className="timeline-role">{exp.role}</div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <span className="timeline-badge">
                      <i className="ri-calendar-line"></i> {exp.period}
                    </span>
                    {exp.status === 'Current Role' && (
                      <span className="status-pill">
                        <span className="status-dot"></span> Active
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-muted small mb-3">
                  <i className="ri-map-pin-2-line"></i> {exp.location}
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-highlights">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-techs">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="timeline-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
