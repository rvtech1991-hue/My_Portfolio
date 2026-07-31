import React, { useState } from 'react';
import {
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Send,
  Sparkles,
  Award,
  Cloud,
  Server,
  Layout,
  Database,
  Plug,
  Bot,
} from 'lucide-react';

import styles from './ModernPortfolio.module.css';
import { personalInfo, skillCategories, clients, certifications, experience } from '../data/portfolioData';
import { useContactForm } from '../hooks/useContactForm';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const NAV_ITEMS = ['Home', 'About', 'Experience', 'Skills', 'Work', 'Contact'];

const SKILL_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  'Cloud & DevOps': Cloud,
  'Backend Engineering': Server,
  'Frontend Architecture': Layout,
  'Data Engineering': Database,
  'Integrations & Tooling': Plug,
  'AI Tools & Copilots': Bot,
};

const ModernPortfolio = () => {
  const { form, formData, handleChange, isFormValid, sendEmail } = useContactForm();
  const { activeSection, scrollToSection } = useScrollSpy(['home', 'about', 'experience', 'skills', 'work', 'contact']);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const about = useRevealOnScroll<HTMLDivElement>();
  const timelineReveal = useRevealOnScroll<HTMLDivElement>();
  const skillsReveal = useRevealOnScroll<HTMLDivElement>();
  const work = useRevealOnScroll<HTMLDivElement>();
  const contact = useRevealOnScroll<HTMLDivElement>();

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false);
    scrollToSection(section);
  };

  const stats = [
    { number: `${personalInfo.yearsExperience}+`, label: 'Years Experience' },
    { number: `${skillCategories.length}`, label: 'Skill Domains' },
    { number: `${clients.length}`, label: 'Enterprise Clients' },
    { number: `${certifications.length}`, label: 'Azure Certifications' },
  ];

  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a
            href="#home"
            className={styles.brand}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            RV <span className={styles.brandSub}>Architect</span>
          </a>
          <div className={styles.navLinks}>
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <button
            className={styles.menuButton}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`${styles.mobileNavLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className={styles.hero}>
        <div className={`${styles.heroBlob} ${styles.heroBlob1}`} />
        <div className={`${styles.heroBlob} ${styles.heroBlob2}`} />
        <div className={styles.heroGrid}>
          <div>
            <span className={styles.kicker}>
              <Sparkles size={14} /> Available for new opportunities
            </span>
            <h1 className={styles.heroTitle}>
              Building bold digital
              <br />
              experiences as{' '}
              <span className={styles.heroTitleGradient}>{personalInfo.name}</span>
            </h1>
            <p className={styles.heroSubtitle}>{personalInfo.title} &middot; {personalInfo.yearsExperience}+ Years</p>
            <p className={styles.heroBio}>{personalInfo.bio}</p>
            <div className={styles.certRow}>
              {certifications.map((cert) => (
                <span key={cert.code} className={styles.certBadge}>
                  <Award size={14} />
                  {cert.code} · {cert.name}
                </span>
              ))}
            </div>
            <div className={styles.heroActions}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                style={{ background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2))', color: 'white' }}
              >
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.resumePath} download className={styles.primaryButton}>
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className={styles.primaryButton}
                style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--color-text)', boxShadow: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Let's Talk
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className={styles.heroPhotoWrap}>
            <div className={styles.heroPhotoGlow}>
              <div className={styles.heroPhoto}>
                <img src={personalInfo.photoPath} alt={personalInfo.name} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollHint}>
          Scroll to explore
          <ChevronDown size={18} />
        </div>
      </section>

      {/* Trusted-by marquee */}
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className={styles.marqueeItem}>
              <span
                className={styles.marqueeDot}
                style={{ background: `linear-gradient(135deg, ${client.colorFrom}, ${client.colorTo})` }}
              >
                {client.shortLabel}
              </span>
              {client.name}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>About</span>
            <h2 className={styles.sectionTitle}>The developer behind the code</h2>
          </div>
          <div
            ref={about.ref}
            className={`${styles.aboutGrid} ${styles.reveal} ${about.isVisible ? styles.revealVisible : ''}`}
          >
            <div>
              {personalInfo.aboutParagraphs.map((para, index) => (
                <p key={index} className={styles.bioText}>
                  {para}
                </p>
              ))}
            </div>
            <div className={styles.statGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={`${styles.glassCard} ${styles.statCard}`}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Experience</span>
            <h2 className={styles.sectionTitle}>Where I've led and built</h2>
          </div>
          <div
            ref={timelineReveal.ref}
            className={`${styles.timeline} ${styles.reveal} ${timelineReveal.isVisible ? styles.revealVisible : ''}`}
          >
            {experience.map((role, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.timelineDot} />
                <div className={`${styles.glassCard} ${styles.timelineCard}`}>
                  <div className={styles.timelineHead}>
                    <span className={styles.timelineRole}>
                      {role.role} · {role.company}
                    </span>
                    <span className={styles.timelinePeriod}>{role.period}</span>
                  </div>
                  {role.formerly && <div className={styles.timelineFormerly}>Formerly {role.formerly}</div>}
                  <p className={styles.timelineFocus}>{role.focus}</p>
                  <ul className={styles.timelineList}>
                    {role.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Skills</span>
            <h2 className={styles.sectionTitle}>Tools I build with</h2>
          </div>
          <div
            ref={skillsReveal.ref}
            className={`${styles.skillsGrid} ${styles.reveal} ${skillsReveal.isVisible ? styles.revealVisible : ''}`}
          >
            {skillCategories.map((skill) => {
              const Icon = SKILL_ICONS[skill.category] ?? Server;
              return (
                <div key={skill.category} className={`${styles.glassCard} ${styles.skillCard}`}>
                  <div className={styles.skillHead}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Icon size={18} />
                      {skill.category}
                    </span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div
                      className={styles.skillFill}
                      style={{ width: skillsReveal.isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                  <div className={styles.tagList}>
                    {skill.items.map((item) => (
                      <span key={item} className={styles.tag}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Work</span>
            <h2 className={styles.sectionTitle}>Trusted by teams like</h2>
          </div>
          <div
            ref={work.ref}
            className={`${styles.workGrid} ${styles.reveal} ${work.isVisible ? styles.revealVisible : ''}`}
          >
            {clients.map((client) => (
              <div key={client.name} className={`${styles.glassCard} ${styles.workCard}`}>
                <div
                  className={styles.workLogoWrap}
                  style={{ background: `linear-gradient(135deg, ${client.colorFrom}, ${client.colorTo})` }}
                >
                  {client.shortLabel}
                </div>
                <div className={styles.workName}>{client.name}</div>
                {client.formerly && <div className={styles.workFormerly}>Formerly {client.formerly}</div>}
                <div className={styles.workMeta}>Web Development Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Contact</span>
            <h2 className={styles.sectionTitle}>Let's build something great</h2>
          </div>
          <div
            ref={contact.ref}
            className={`${styles.contactGrid} ${styles.reveal} ${contact.isVisible ? styles.revealVisible : ''}`}
          >
            <div className={`${styles.glassCard} ${styles.contactCard}`}>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <Mail size={18} />
                </span>
                <span>{personalInfo.email}</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <Phone size={18} />
                </span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <ExternalLink size={18} />
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} autoComplete="off" className={`${styles.glassCard} ${styles.formCard}`}>
              <input type="hidden" name="time" value={new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })} />
              <div className={styles.formField}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className={styles.formField}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className={styles.formField}>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <button type="submit" disabled={!isFormValid} className={`${styles.primaryButton} ${styles.submitButton}`}>
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerSocial}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p style={{ margin: 0 }}>© 2026 {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
