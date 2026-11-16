import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="footer-top"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>Have a project in mind?</p>
              <h2>
                <a href={`mailto:${personalInfo.email}`}>let's work</a>
              </h2>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <p className="copy-left-text">
              Portfolio by <a href="https://github.com/SUNAND2003" target="_blank" rel="noopener noreferrer">{personalInfo.name}</a>
            </p>
          </div>
          <div className="col-lg-6 col-sm-6">
            <p className="copy-right-text">&copy; Copyright {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
