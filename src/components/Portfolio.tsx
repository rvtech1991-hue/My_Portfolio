import React, { useState, useEffect, useRef } from 'react';

import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  Download,
  ExternalLink,
  User,
  Code,
  Briefcase,
  MessageCircle
} from 'lucide-react';

import machine2 from '../images/portfolio/machine-2.jpg';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Portfolio = () => {
const form = useRef<HTMLFormElement>(null);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

  const [activeSection, setActiveSection] = useState('home');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: '.NET Core', level: 90 },
    { name: 'Web API', level: 85 },
    { name: 'MS SQL', level: 90 },
    { name: 'React JS', level: 70 },
    { name: 'Angular JS', level: 75 },
    { name: 'Knockout JS', level: 70 },    
    { name: 'HTML 5, CSS 3, Bootstrap', level: 90 },    
    { name: 'LINQ, Entity Framework', level: 80 },    
  ];

  const clients = [
    'Deutsche Bank', 'ICICI Bank', 'SBI Bank', 'Deloitte', 'Greysoft Solutions',
    '3i Infotech', 'Capgemini', 'LTIMindTree', 'Miles Software', 'Logo InfoSoft'
  ];

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_08sc3bg',
    'template_uwsusn4',
    e.currentTarget,
    'gda325JGBjpDoanBB'
  ).then(
    (result) => {
      console.log('Email sent:', result.text);
      toast.success('Message sent successfully!');
      form.current?.reset();  
      setFormData({
        name: '',
        email: '',
        message: '',
    });

    },
    (error) => {
      console.error('Email error:', error.text);
      toast.error('Failed to send message. Try again!');

    }
  );
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{ color: '#2563eb' }}>
            Portfolio
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
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
                      color: '#374151',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      borderBottom: activeSection === item.toLowerCase() ? '2px solid #2563eb' : '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.toLowerCase()) {
                        e.currentTarget.style.borderBottom = '2px solid #60a5fa';
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
      <section id="home" className="min-vh-100 d-flex align-items-center" style={{ backgroundColor: '#f8fafc', paddingTop: '80px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="animate-on-scroll">
                <h3 className="display-0.5 fw-bold text-dark mb-3 header-title" >
                  Hi, <br/>I'm <span style={{ color: '#2563eb' }}>Rakesh Vishwakarma</span>
                </h3>
                <h3 className="text-muted mb-4 header-title font-weight-bold">Web Developer</h3>
                <p className="lead text-muted mb-4" style={{textAlign: 'left'}}>
                  Passionate full-stack developer with 12+ years of experience in building scalable web applications. 
                  Specialized in .NET technologies, modern JavaScript frameworks, and database design. 
                  I love creating efficient, user-friendly solutions that make a difference.
                </p>
                
                <div className="mb-4">
                  <div className="d-flex gap-3 mb-4">
                    {[                      
                      { icon: <Linkedin size={24} />, link: 'https://www.linkedin.com/in/rakesh-vishwakarma-434483b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
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
                          backgroundColor: '#2563eb',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1d4ed8';
                          e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#2563eb';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  
                    <a
                        href="/Rakesh_Vishwakarma_Resume.pdf"
                        download
                        className="btn btn-lg px-4 py-3"
                        style={{
                        backgroundColor: '#2563eb',
                        border: 'none',
                        color: 'white',
                        borderRadius: '50px',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1d4ed8';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb';
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
                      style={{ backgroundColor: '#e5e7eb', fontSize: '80px', color: '#9ca3af' }}
                    >
                      {/* <User size={120} /> */}
                    <img src="/images/My-pic.png"
                      alt="Rakesh Vishwakarma" className="w-100 h-100"
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
      <section id="about" className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-center">
                <div
                  className="rounded-circle overflow-hidden mx-auto"
                  style={{
                    width: '250px',
                    height: '250px',
                    border: '5px solid #2563eb',
                    boxShadow: '0 10px 40px rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <div
                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: '#f3f4f6', fontSize: '60px', color: '#9ca3af' }}
                  >
                    <User size={100} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="animate-on-scroll">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1f2937' }}>About Me</h2>
                <p className="text-muted mb-4" style={{textAlign: 'left'}} >
                  I am a dedicated and experienced web developer with a strong background in full-stack development. 
                  My journey in technology started 12 years ago, and I have been passionate about creating innovative 
                  solutions ever since.
                </p>
                <p className="text-muted mb-4" style={{textAlign: 'left'}}>
                  Throughout my career, I have worked with various technologies and frameworks, specializing in .NET 
                  ecosystem, JavaScript frameworks, and database technologies. I believe in writing clean, maintainable 
                  code and following best practices in software development.
                </p>                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#1f2937' }}>Technical Skills</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="animate-on-scroll">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold" style={{ color: '#374151' }}>{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px', backgroundColor: '#e5e7eb' }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: '#2563eb',
                          borderRadius: '4px'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                {/* <div
                  className="rounded-3 p-5 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#e0e7ff',
                    minHeight: '400px',
                    border: '2px dashed #2563eb'
                  }}
                >
                  <div className="text-center">
                    <Code size={80} style={{ color: '#2563eb' }} />
                    <h4 className="mt-3" style={{ color: '#1f2937' }}>Coding in Progress</h4>
                    <p className="text-muted">Building amazing web applications</p>
                  </div>
                </div> */}

                <img src={machine2} style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '480px' 
                }} />


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#1f2937' }}>Work Experience</h2>
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
                        backgroundColor: '#e0e7ff',
                        color: '#2563eb'
                      }}
                    >
                      <Briefcase size={32} />
                    </div>
                    <h5 className="card-title fw-bold" style={{ color: '#1f2937' }}>{client}</h5>
                    <p className="card-text text-muted">Web Development Projects</p>
                    <ExternalLink size={20} style={{ color: '#2563eb' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#1f2937' }}>Contact Me</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="animate-on-scroll">
                <h4 className="fw-bold mb-4" style={{ color: '#1f2937', textAlign: 'left' }}>Get in Touch</h4>
                <div className="mb-3 d-flex align-items-center">
                  <User size={20} className="me-3" style={{ color: '#2563eb' }} />
                  <span>Rakesh Vishwakarma</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Mail size={20} className="me-3" style={{ color: '#2563eb' }} />
                  <span>RakeshVish91@Gmail.com</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Phone size={20} className="me-3" style={{ color: '#2563eb' }} />
                  <span>+91 9623899862</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="animate-on-scroll">
                <form ref={form} onSubmit={sendEmail} autoComplete="off">
                  <div className="mb-3">
                        {/* <input type="text" name="name" className="form-control form-control-md" placeholder="Full Name" /> */}

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
                        {/* <input type="email" name="email" className="form-control form-control-md" placeholder="Email Address" /> */}

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
                        {/* <textarea name="message" className="form-control" rows={5} placeholder="Your Message"></textarea> */}

                        <textarea className="form-control" rows={5} 
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />

                  </div>
                  {/* <button
                    type="submit"
                    className="btn btn-lg px-4 py-3 w-100"
                    style={{
                      backgroundColor: '#2563eb',
                      border: 'none',
                      color: 'white',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1d4ed8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563eb';
                    }}
                  >
                    <MessageCircle size={20} className="me-2" />
                    Send Message
                  </button> */}

                    <button className="btn btn-lg px-4 py-3 w-100"
                        type="submit"
                        disabled={!isFormValid}
                        style={{
                        opacity: !isFormValid ? 0.6 : 1,
                        cursor: !isFormValid ? 'not-allowed' : 'pointer',
                        backgroundColor: '#2563eb',
                        border: 'none',
                        color: 'white',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease'
                        }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1d4ed8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563eb';
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
      <footer className="py-4" style={{ backgroundColor: '#1f2937', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <p className="mb-0">© 2025 Rakesh Vishwakarma. All rights reserved.</p>
            </div>

          </div>

            <div className="row align-items-center">
                <div className="col-md-12 text-md-end">
                    <div className="d-flex justify-content-md-center gap-3">
                {[          
                  { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/rakesh-vishwakarma-434483b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' },
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
        @keyframes  {
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
        
        .card:hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          color: #2563eb !important;
        }
        
        .nav-link.active {
          color: #2563eb !important;
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
        
        .form-control:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
        }
      `}</style>

      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      {/* Bootstrap JS */}
      <script 
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
      ></script>
    </div>
  );
};

export default Portfolio;