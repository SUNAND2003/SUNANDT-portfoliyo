import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import DotField from './DotField';

export default function Contact({ isStandalonePage = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    try {
      const response = await fetch('https://formspree.io/f/mvgwdkoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: ''
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 6000);
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Sorry, Message could not send! Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Sorry, Message could not send! Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="contact-area pt-80 pb-80 position-relative overflow-hidden">
      {/* Background DotField Interactive Animation */}
      <div
        className="contact-dotfield-bg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <DotField
          gradientFrom="#00d2ff"
          gradientTo="#0077ff"
          dotRadius={1.5}
          dotSpacing={16}
          cursorRadius={220}
          bulgeStrength={0.5}
          glowRadius={160}
          glowIntensity={0.85}
          glowColor="#38bdf8"
          baseOpacity={0.3}
          waveAmplitude={2}
          sparkle={true}
          interactive={true}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {!isStandalonePage && (
          <div className="row mb-50">
            <div className="col-12 text-center">
              <span className="section-badge">Get In Touch</span>
              <div className="section-title section-black-title">
                <h2>Let's Work Together</h2>
              </div>
              <p className="section-desc mx-auto">
                Have a project idea, contract opportunity, or want to discuss a full-stack role? Send a message and let's connect!
              </p>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact-content-part"
            >
              {/* ADDRESS */}
              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-map-pin-line"></i>
                </span>
                <h2>Location:</h2>
                <p>{personalInfo.address}</p>
              </div>

              {/* PHONE */}
              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-headphone-line"></i>
                </span>
                <h2>Phone / Call:</h2>
                <p>
                  <a href={`tel:${personalInfo.phone}`} style={{ color: 'inherit' }}>
                    {personalInfo.phone}
                  </a>
                </p>
              </div>

              {/* EMAIL */}
              <div className="single-contact">
                <span className="circle-btn">
                  <i className="ri-mail-line"></i>
                </span>
                <h2>Email Us:</h2>
                <p>
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit' }}>
                    {personalInfo.email}
                  </a>
                </p>
              </div>

              {/* WHATSAPP */}
              {personalInfo.socials.whatsapp && (
                <div className="single-contact">
                  <span className="circle-btn">
                    <i className="ri-whatsapp-line"></i>
                  </span>
                  <h2>WhatsApp:</h2>
                  <p>
                    <a
                      href={personalInfo.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#00d2ff', fontWeight: 600 }}
                    >
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              )}

              {/* SOCIALS */}
              <div className="single-contact">
                <h2>Social Profiles</h2>
                <div className="about-social mt-2">
                  <ul className="d-flex gap-2 p-0 m-0" style={{ listStyle: 'none' }}>
                    {personalInfo.socials.linkedin && (
                      <li>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                    )}
                    {personalInfo.socials.github && (
                      <li>
                        <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <i className="ri-github-line"></i>
                        </a>
                      </li>
                    )}
                    {personalInfo.socials.twitter && (
                      <li>
                        <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <i className="ri-twitter-x-line"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact-form contact-form-area modern-contact-card"
            >
              <h3 className="contact-form-title mb-4">
                Send a Message
              </h3>

              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group position-relative">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="e.g. John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status.submitting}
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user"></i>
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group position-relative">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="e.g. john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status.submitting}
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope"></i>
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group position-relative">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="e.g. Project Inquiry / Full Stack Role"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status.submitting}
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-edit"></i>
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="5"
                        placeholder="Tell me about your project, timeline, or requirements..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status.submitting}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={status.submitting}
                        style={{ cursor: status.submitting ? 'not-allowed' : 'pointer' }}
                      >
                        {status.submitting ? (
                          <>
                            Sending Message... <i className="ri-loader-2-line fa-spin"></i>
                          </>
                        ) : (
                          <>
                            Send Message <i className="ri-send-plane-fill ms-1"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="col-md-12 text-center mt-3">
                    {status.success && (
                      <p className="input-success" style={{ display: 'block' }}>
                        🎉 Thank you! Your message has been sent successfully. I'll get back to you soon.
                      </p>
                    )}
                    {status.error && (
                      <p className="input-error" style={{ display: 'block' }}>
                        {status.error}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
