import React from 'react';
import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Download,
  ExternalLink,
  User,
  Award,
  Building2,
  MessageCircle,
  Cloud,
  Server,
  Layout,
  Database,
  Plug,
  Bot
} from 'lucide-react';

import { personalInfo, skillCategories, clients, certifications, experience } from '../data/portfolioData';
import { useContactForm } from '../hooks/useContactForm';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SKILL_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  'Cloud & DevOps': Cloud,
  'Backend Engineering': Server,
  'Frontend Architecture': Layout,
  'Data Engineering': Database,
  'Integrations & Tooling': Plug,
  'AI Tools & Copilots': Bot,
};

const ClassicPortfolio = () => {
  const { form, formData, handleChange, isFormValid, sendEmail } = useContactForm();
  const { activeSection, scrollToSection } = useScrollSpy(['home', 'about', 'experience', 'skills', 'work', 'contact']);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{
        backgroundColor: 'var(--color-navbar-bg)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{ color: 'var(--color-primary)' }}>
            Portfolio
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About', 'Experience', 'Skills', 'Work', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link px-3 py-2 mx-1 position-relative ${
                      activeSection === item.toLowerCase() ? 'active' : ''
                    }`}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                    style={{
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      borderBottom: activeSection === item.toLowerCase() ? '2px solid var(--color-primary)' : '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.toLowerCase()) {
                        e.currentTarget.style.borderBottom = '2px solid var(--color-primary-hover)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.toLowerCase()) {
                        e.currentTarget.style.borderBottom = '2px solid transparent';
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center" style={{ backgroundColor: 'var(--color-bg)', paddingTop: '80px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="animate-on-scroll">
                <h3 className="display-0.5 fw-bold mb-3 header-title" style={{ color: 'var(--color-heading)' }}>
                  Hi, <br/>I'm <span style={{ color: 'var(--color-primary)' }}>{personalInfo.name}</span>
                </h3>
                <h3 className="mb-4 header-title font-weight-bold" style={{ color: 'var(--color-text-muted)' }}>{personalInfo.title}</h3>
                <p className="lead mb-4" style={{textAlign: 'left', color: 'var(--color-text-muted)'}}>
                  {personalInfo.bio}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {certifications.map((cert) => (
                    <span
                      key={cert.code}
                      className="d-inline-flex align-items-center"
                      style={{
                        gap: '0.4rem',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        backgroundColor: 'var(--color-badge-bg)',
                      }}
                    >
                      <Award size={14} />
                      {cert.code} · {cert.name}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="d-flex gap-3 mb-4">
                    {[
                      { icon: <Linkedin size={24} />, link: personalInfo.linkedin },
                      { icon: <Twitter size={24} />, link: '#' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '50px',
                          height: '50px',
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                          e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                    <a
                        href={personalInfo.resumePath}
                        download
                        className="btn btn-lg px-4 py-3"
                        style={{
                        backgroundColor: 'var(--color-primary)',
                        border: 'none',
                        color: 'white',
                        borderRadius: '50px',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                    <Download size={20} className="me-2" />
                        Download CV
                    </a>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div
                  className="position-relative d-inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50% 20% 50% 20%',
                    padding: '20px',
                    animation: 'float 6s ease-in-out infinite'
                  }}
                >
                  <div
                    className="rounded-circle overflow-hidden"
                    style={{
                      width: '300px',
                      height: '300px',
                      border: '5px solid white',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div
                      className="w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: 'var(--color-avatar-bg)', fontSize: '80px', color: 'var(--color-avatar-icon)' }}
                    >
                    <img src={personalInfo.photoPath}
                      alt={personalInfo.name} className="w-100 h-100"
                      style={{ objectFit: 'cover',objectPosition: 'center' }} />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-center">
                <div
                  className="rounded-circle overflow-hidden mx-auto"
                  style={{
                    width: '250px',
                    height: '250px',
                    border: '5px solid var(--color-primary)',
                    boxShadow: '0 10px 40px rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <img
                    src={personalInfo.photoPath}
                    alt={personalInfo.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="animate-on-scroll">
                <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--color-heading)' }}>About Me</h2>
                {personalInfo.aboutParagraphs.map((para, index) => (
                  <p key={index} className="mb-4" style={{textAlign: 'left', color: 'var(--color-text-muted)'}}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: 'var(--color-heading)' }}>Experience</h2>
          </div>
          <div className="animate-on-scroll">
            {experience.map((role, index) => (
              <div
                key={index}
                className="mb-4 p-4"
                style={{
                  borderLeft: '4px solid var(--color-primary)',
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                }}
              >
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-2" style={{ gap: '0.5rem' }}>
                  <div className="d-flex align-items-center" style={{ gap: '0.6rem' }}>
                    <Building2 size={20} style={{ color: 'var(--color-primary)' }} />
                    <div>
                      <h5 className="fw-bold mb-0" style={{ color: 'var(--color-heading)' }}>
                        {role.role} · {role.company}
                      </h5>
                      {role.formerly && (
                        <small style={{ color: 'var(--color-text-muted)' }}>Formerly {role.formerly}</small>
                      )}
                    </div>
                  </div>
                  <span
                    style={{
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {role.period}
                  </span>
                </div>
                <p className="fst-italic mb-2" style={{ color: 'var(--color-text-muted)', textAlign: 'left' }}>
                  {role.focus}
                </p>
                <ul className="mb-0" style={{ textAlign: 'left', color: 'var(--color-text)' }}>
                  {role.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="mb-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: 'var(--color-heading)' }}>Technical Skills</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="animate-on-scroll">
                {skillCategories.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold" style={{ color: 'var(--color-text)' }}>{skill.category}</span>
                      <span style={{ color: 'var(--color-text-muted)' }}>{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px', backgroundColor: 'var(--color-progress-bg)' }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: 'var(--color-primary)',
                          borderRadius: '4px'
                        }}
                      ></div>
                    </div>
                    <p className="mb-0 mt-2" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      {skill.items.join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {skillCategories.map((skill, index) => {
                  const Icon = SKILL_ICONS[skill.category] ?? Server;
                  return (
                    <div key={index} className="col-6">
                      <div
                        className="h-100 p-3 text-center"
                        style={{
                          backgroundColor: 'var(--color-card-bg)',
                          borderRadius: '12px',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-6px)';
                          e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.12)';
                          const iconWrap = e.currentTarget.querySelector('[data-skill-icon]') as HTMLElement | null;
                          if (iconWrap) {
                            iconWrap.style.backgroundColor = 'var(--color-primary)';
                            iconWrap.style.color = 'white';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
                          const iconWrap = e.currentTarget.querySelector('[data-skill-icon]') as HTMLElement | null;
                          if (iconWrap) {
                            iconWrap.style.backgroundColor = 'var(--color-badge-bg)';
                            iconWrap.style.color = 'var(--color-primary)';
                          }
                        }}
                      >
                        <div
                          data-skill-icon
                          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                          style={{
                            width: '56px',
                            height: '56px',
                            backgroundColor: 'var(--color-badge-bg)',
                            color: 'var(--color-primary)',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                          }}
                        >
                          <Icon size={26} />
                        </div>
                        <p className="mb-0 fw-semibold" style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-5" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: 'var(--color-heading)' }}>Work Experience</h2>
          </div>
          <div className="row">
            {clients.map((client, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                  }}
                >
                  <div className="card-body text-center p-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: `linear-gradient(135deg, ${client.colorFrom}, ${client.colorTo})`,
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        boxShadow: `0 8px 20px ${client.colorFrom}40`,
                      }}
                    >
                      {client.shortLabel}
                    </div>
                    <h5 className="card-title fw-bold mb-0" style={{ color: 'var(--color-heading)' }}>{client.name}</h5>
                    {client.formerly && (
                      <small style={{ color: 'var(--color-text-muted)' }}>Formerly {client.formerly}</small>
                    )}
                    <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>Web Development Projects</p>
                    <ExternalLink size={20} style={{ color: 'var(--color-primary)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: 'var(--color-heading)' }}>Contact Me</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="animate-on-scroll">
                <h4 className="fw-bold mb-4" style={{ color: 'var(--color-heading)', textAlign: 'left' }}>Get in Touch</h4>
                <div className="mb-3 d-flex align-items-center" style={{ color: 'var(--color-text)' }}>
                  <User size={20} className="me-3" style={{ color: 'var(--color-primary)' }} />
                  <span>{personalInfo.name}</span>
                </div>
                <div className="mb-3 d-flex align-items-center" style={{ color: 'var(--color-text)' }}>
                  <Mail size={20} className="me-3" style={{ color: 'var(--color-primary)' }} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="mb-3 d-flex align-items-center" style={{ color: 'var(--color-text)' }}>
                  <Phone size={20} className="me-3" style={{ color: 'var(--color-primary)' }} />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="animate-on-scroll">
                <form ref={form} onSubmit={sendEmail} autoComplete="off">
                  <input type="hidden" name="time" value={new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })} />
                  <div className="mb-3">
                        <input  className="form-control form-control-md"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />

                  </div>
                  <div className="mb-3">
                        <input  className="form-control form-control-md"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />

                  </div>
                  <div className="mb-3">
                        <textarea className="form-control" rows={5}
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />

                  </div>

                    <button className="btn btn-lg px-4 py-3 w-100"
                        type="submit"
                        disabled={!isFormValid}
                        style={{
                        opacity: !isFormValid ? 0.6 : 1,
                        cursor: !isFormValid ? 'not-allowed' : 'pointer',
                        backgroundColor: 'var(--color-primary)',
                        border: 'none',
                        color: 'white',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease'
                        }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    }}
                    >
                        <MessageCircle size={20} className="me-2" />
                        Send Message
                    </button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4" style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <p className="mb-0">© 2026 {personalInfo.name}. All rights reserved.</p>
            </div>

          </div>

            <div className="row align-items-center">
                <div className="col-md-12 text-md-end">
                    <div className="d-flex justify-content-md-center gap-3">
                {[
                  { icon: <Linkedin size={20} />, link: personalInfo.linkedin },
                  { icon: <Twitter size={20} />, link: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
                    </div>
                </div>
            </div>


        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-on-scroll {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-version='classic'] .card:hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-version='classic'] .card {
          background-color: var(--color-card-bg);
          color: var(--color-text);
        }

        [data-version='classic'] .text-muted {
          color: var(--color-text-muted) !important;
        }

        [data-version='classic'] .form-control {
          background-color: var(--color-card-bg);
          color: var(--color-text);
          border-color: var(--color-border);
        }

        [data-version='classic'] .form-control::placeholder {
          color: var(--color-text-muted);
        }

        [data-version='classic'][data-theme='dark'] .navbar-toggler-icon {
          filter: invert(1);
        }

        .progress-bar {
          transition: width 2s ease-in-out;
        }

        html {
          scroll-behavior: smooth;
        }

        .navbar-brand {
          font-size: 1.8rem !important;
        }

        .nav-link:hover {
          color: var(--color-primary) !important;
        }

        .nav-link.active {
          color: var(--color-primary) !important;
          font-weight: 600;
        }

        .header-title{
            text-align: left;
            font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }

          .display-5 {
            font-size: 2rem;
          }
        }

        [data-version='classic'] .form-control:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
        }
      `}</style>
    </div>
  );
};

export default ClassicPortfolio;
