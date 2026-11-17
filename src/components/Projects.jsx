import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/portfolioData';

export default function Projects({ isStandalonePage = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('stack');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-area pt-90 pb-100">
      <div className="container">
        {!isStandalonePage && (
          <motion.div
            className="row mb-40"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-12 text-center">
              <span className="section-badge">
                <i className="ri-folder-open-line me-1"></i> Selected Works
              </span>
              <div className="section-title section-black-title">
                <h2>Featured Projects</h2>
              </div>
              <p className="section-desc mx-auto">
                Explore real-world client websites, scalable web applications, and e-commerce platforms engineered with precision.
              </p>
            </div>
          </motion.div>
        )}

        {/* CONTROLS BAR: CATEGORY FILTER TABS & VIEW TOGGLE */}
        <motion.div
          className="projects-controls-bar mb-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            {/* CATEGORY TABS */}
            <div className="category-filter-wrap m-0">
              {projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* VIEW MODE TOGGLE (STACK / GRID) */}
            <div className="view-mode-toggle">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'stack' ? 'active' : ''}`}
                onClick={() => setViewMode('stack')}
                title="Stacking Cards Scroll Animation"
              >
                <i className="ri-stack-line me-1"></i> Stack View
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <i className="ri-grid-line me-1"></i> Grid
              </button>
            </div>
          </div>
        </motion.div>

        {/* VIEW 1: STACKING CARDS SCROLL MODEL */}
        {viewMode === 'stack' && (
          <div className="stacking-projects-deck">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                let hostname = 'demo.online';
                try {
                  if (project.liveDemo) hostname = new URL(project.liveDemo).hostname;
                } catch {
                  hostname = 'demo.online';
                }

                return (
                  <div
                    key={project.id}
                    className="stacking-card-wrapper"
                    style={{
                      top: `calc(95px + ${index * 24}px)`,
                      zIndex: index + 1
                    }}
                  >
                    <motion.div
                      className="stacking-card-inner"
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="row align-items-center g-4 g-lg-5">
                        {/* LEFT DETAILS */}
                        <div className="col-lg-6 order-2 order-lg-1">
                          <div className="stacking-card-meta">
                            <span className="stacking-card-index">0{index + 1}</span>
                            <span className="stacking-card-category">{project.categoryLabel}</span>
                          </div>

                          <h3 className="stacking-card-title">{project.title}</h3>
                          <p className="stacking-card-desc">{project.description}</p>

                          <div className="stacking-card-tags">
                            {project.tags.map((tag, idx) => (
                              <span key={idx} className="stacking-tag">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="stacking-card-actions">
                            {project.liveDemo && (
                              <a
                                href={project.liveDemo}
                                className="stacking-btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Live Demo <i className="ri-arrow-right-up-line ms-1"></i>
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                className="stacking-btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View on GitHub"
                              >
                                <i className="ri-github-fill me-1"></i> GitHub
                              </a>
                            )}
                          </div>
                        </div>

                        {/* RIGHT BROWSER PREVIEW MOCKUP */}
                        <div className="col-lg-6 order-1 order-lg-2">
                          <div className="browser-mockup">
                            <div className="browser-mockup-header">
                              <span className="browser-dot red"></span>
                              <span className="browser-dot yellow"></span>
                              <span className="browser-dot green"></span>
                              <span className="browser-address-bar">{hostname}</span>
                            </div>
                            <div className="browser-mockup-body">
                              <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* VIEW 2: MODERN RESPONSIVE GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="projects-grid-view">
            <div className="row g-4">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="col-lg-4 col-md-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="modern-project-card">
                      <div className="project-img-wrapper">
                        <img src={project.image} alt={project.title} loading="lazy" />
                        <span className="project-category-badge">{project.categoryLabel}</span>
                      </div>
                      <div className="project-card-body">
                        <h4 className="project-card-title">{project.title}</h4>
                        <p className="project-card-desc">{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="project-actions">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              className="project-btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo <i className="ri-arrow-right-up-line ms-1"></i>
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              className="project-btn-secondary"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View on GitHub"
                            >
                              <i className="ri-github-fill"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
