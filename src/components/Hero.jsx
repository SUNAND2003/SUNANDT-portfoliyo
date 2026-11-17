import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="hero-content text-center"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2>{personalInfo.name}</h2>
            </motion.div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-3 pt-30 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              className="hero-badge-pill"
            >
              <span className="badge-bullet"></span>
              Available for Full Stack Projects
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.88, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, rotate: -8, transition: { duration: 0.4 } }}
            >
              <img
                src={personalInfo.heroImage}
                alt={personalInfo.name}
              />
            </motion.div>
          </div>

          <div className="col-lg-3 pt-30">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{personalInfo.shortIntro}</p>
              <motion.a
                className="theme-btn"
                href={personalInfo.cvUrl}
                download="Sunand_T_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get My CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
