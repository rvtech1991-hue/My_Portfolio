export const personalInfo = {
  name: 'Rakesh Vishwakarma',
  title: 'Azure Solutions Architect Expert',
  roleSummary: 'Senior Technical Architect & Engineering Leader',
  yearsExperience: 13,
  bio:
    'Senior Technical Architect and Engineering Leader with 13+ years designing, migrating, and optimizing ' +
    'enterprise-scale, high-concurrency platforms across the BFSI and SaaS sectors. Microsoft Certified Azure ' +
    'Solutions Architect Expert, specializing in multi-tenant microservices architectures built on .NET Core, ' +
    'ASP.NET Core, and cloud platforms (Azure / AWS).',
  aboutParagraphs: [
    'I am a Senior Technical Architect and Engineering Leader with 13+ years of progressive experience ' +
      'spearheading the design, cloud migration, and optimization of enterprise-scale, high-concurrency web ' +
      'ecosystems across the SaaS and BFSI sectors.',
    'I specialize in pioneering multi-tenant microservices architectures using .NET Core, ASP.NET Core, and ' +
      'cloud platforms, managing cross-functional technical squads, orchestrating complex third-party fintech ' +
      'integrations, and tuning mission-critical database engines for high-availability systems.',
  ],
  email: 'RakeshVish91@Gmail.com',
  phone: '+91 9623899862',
  location: 'Mumbai, India',
  linkedin:
    'https://www.linkedin.com/in/rakesh-vishwakarma-434483b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  resumePath: '/Rakesh_Vishwakarma_Resume.pdf',
  photoPath: '/images/My-pic.png',
};

export interface Certification {
  code: string;
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { code: 'AZ-305', name: 'Azure Solutions Architect Expert', issuer: 'Microsoft' },
  { code: 'AZ-104', name: 'Azure Administrator Associate', issuer: 'Microsoft' },
];

export interface ExperienceEntry {
  company: string;
  formerly?: string;
  role: string;
  period: string;
  focus: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Persistent Systems',
    role: 'Architect',
    period: 'Oct 2025 – Present',
    focus: 'Enterprise Cloud Architecture, Microservice Governance, Scalable Solutions Design',
    highlights: [
      'Formulate cloud and application architectures, guaranteeing high availability, structural fault tolerance, and modern multi-tenant platform scale.',
      'Model and deploy resilient API system boundaries leveraging enterprise-grade .NET Core microservices and native Azure cloud topographies.',
      'Serve as principal technical advisor across distributed engineering teams, dictating blueprints and unblocking complex structural limitations.',
    ],
  },
  {
    company: 'Logo Infosoft',
    role: 'Technical Lead',
    period: 'Aug 2023 – Jul 2025',
    focus: 'Full-Scale SaaS Engineering, Third-Party Fintech Integrations, Agile Squad Leadership',
    highlights: [
      'Architected foundational high-throughput backend micro-modules for CaptainBiz, a cloud SaaS application automating real-time e-invoicing and inventory loops.',
      'Led end-to-end integration of high-security external financial and enterprise APIs: PayU Gateway, IRIS e-Invoicing, Zoho CRM, and Mixpanel Analytics.',
      'Partnered with UI/UX engineering leads to deliver robust presentation layers aligned directly with Figma design systems.',
    ],
  },
  {
    company: 'LTIMindtree',
    role: 'Module Lead',
    period: 'Apr 2021 – Jun 2023',
    focus: 'Legacy Re-engineering, Compliance Platforms, Offshore Technical Governance',
    highlights: [
      'Directed structural re-engineering and agile feature roadmap for a high-stakes enterprise compliance platform built for Wolters Kluwer (WK).',
      'Conducted granular requirement translation and engineered automated infrastructure deployment grids to guarantee predictable delivery cycles.',
      'Provided technical governance and architectural mentoring to offshore delivery cohorts, establishing strict engineering benchmarks.',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Consultant',
    period: 'May 2018 – Jan 2021',
    focus: 'Distributed Team Coordination, Ingestion Pipelines, Cloud Storage Architectures',
    highlights: [
      'Anchored an agile offshore engineering division managing the Title Process Automation infrastructure for Insurance Auto Auctions (IAA, USA).',
      'Formulated Technical Approach strategies and Software Requirement Specifications (SRS) from high-level corporate product requirements.',
      'Designed data ingestion and processing workflows using Azure Blob Storage to manage automated imaging and high-volume document tracking.',
    ],
  },
  {
    company: 'Ebix Cash',
    formerly: 'Miles Software',
    role: 'Senior Software Engineer',
    period: 'Mar 2017 – May 2018',
    focus: 'Secure Core Banking Portals, High-Availability Systems, Disaster Recovery',
    highlights: [
      'Engineered and scaled the secure web portal architecture used across the State Bank of India (SBI) Client Portal ecosystem.',
      'Programmed core banking transaction pipelines ensuring ironclad security protocols and sub-second balance/ledger query executions.',
      'Spearheaded production operations, including Disaster Recovery (DR) hot-swap simulations and advanced database index tuning.',
    ],
  },
  {
    company: '3i Infotech',
    role: 'Sr. Software Developer',
    period: 'Feb 2015 – Feb 2017',
    focus: 'Transaction Monitoring, Messaging Gateways',
    highlights: [
      'Co-developed and optimized high-throughput transaction monitoring frameworks and customized SMS Gateway routing networks deployed by ICICI Bank.',
    ],
  },
  {
    company: 'Greysoft Solutions',
    role: 'Dot Net Programmer',
    period: 'Sep 2012 – Jan 2015',
    focus: 'System Documentation, .NET Development',
    highlights: [
      'Authored technical documentation structures including Business Requirement Documents (BRD) and SRS frameworks.',
    ],
  },
];

export interface SkillCategory {
  category: string;
  level: number;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud & DevOps',
    level: 92,
    items: [
      'Azure Functions',
      'Service Bus',
      'Redis',
      'Key Vault',
      'App Services',
      'App Insights',
      'Blob Storage',
      'Azure DevOps',
      'Identity Architecture',
      'AWS (EC2)',
    ],
  },
  {
    category: 'Backend Engineering',
    level: 95,
    items: [
      '.NET Core',
      'ASP.NET Core',
      'Web API Core',
      'Entity Framework Core',
      'C#',
      'MVC 5',
      'LINQ',
      'WCF',
      'ADO.NET',
      'RESTful Microservices',
    ],
  },
  {
    category: 'Frontend Architecture',
    level: 78,
    items: ['React JS', 'Angular', 'AngularJS', 'Knockout JS', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap', 'Kendo UI'],
  },
  {
    category: 'Data Engineering',
    level: 88,
    items: ['MS SQL Server (2008–2022)', 'Performance Tuning', 'Always On High Availability', 'Query Optimization', 'SQL Profiler', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Integrations & Tooling',
    level: 85,
    items: ['PayU Payment Gateway', 'IRIS e-Invoicing', 'Zoho CRM', 'Mixpanel Analytics', 'Git', 'SVN', 'TFS'],
  },
  {
    category: 'AI Tools & Copilots',
    level: 85,
    items: ['ChatGPT', 'Claude', 'Open Code', 'Stitch', 'NotebookLM', 'Microsoft Copilot', 'Codex', 'Gemini'],
  },
];

export interface Client {
  name: string;
  formerly?: string;
  shortLabel: string;
  colorFrom: string;
  colorTo: string;
}

export const clients: Client[] = [
  { name: 'Deutsche Bank', shortLabel: 'DB', colorFrom: '#00397a', colorTo: '#0057b8' },
  { name: 'ICICI Bank', shortLabel: 'ICICI', colorFrom: '#b7202e', colorTo: '#f37021' },
  { name: 'SBI Bank', shortLabel: 'SBI', colorFrom: '#1b4f9c', colorTo: '#2e6bd6' },
  { name: 'Deloitte', shortLabel: 'DT', colorFrom: '#046a38', colorTo: '#86bc25' },
  { name: 'Greysoft Solutions', shortLabel: 'GS', colorFrom: '#475569', colorTo: '#64748b' },
  { name: '3i Infotech', shortLabel: '3i', colorFrom: '#0ea5e9', colorTo: '#6366f1' },
  { name: 'Capgemini', shortLabel: 'CG', colorFrom: '#0070ad', colorTo: '#12245d' },
  { name: 'LTIMindTree', shortLabel: 'LTI', colorFrom: '#6c2eb9', colorTo: '#00b2a9' },
  { name: 'Ebix Cash', formerly: 'Miles Software', shortLabel: 'EC', colorFrom: '#00a651', colorTo: '#046a38' },
  { name: 'Logo InfoSoft', shortLabel: 'LI', colorFrom: '#f97316', colorTo: '#ea580c' },
];

export const emailjsConfig = {
  serviceId: 'service_08sc3bg',
  templateId: 'template_uwsusn4',
  publicKey: 'gda325JGBjpDoanBB',
};
