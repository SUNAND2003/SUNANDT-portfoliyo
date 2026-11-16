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
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>{personalInfo.name}</h2>
            </motion.div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-3 pt-30 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-badge-pill"
            >
              <span className="badge-bullet"></span>
              Available for Full Stack Projects
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.92, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
