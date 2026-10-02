import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Network,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

const experiences = [
  {
    period: 'Jan 2024 — Present',
    location: 'Bengaluru, India',
    company: 'NVIDIA · Networking Business Unit',
    title: 'Performance Verification Engineer',
    summary: 'Building confidence in the systems behind AI data centers by turning complex architectural requirements into measurable, reliable performance.',
    points: [
      'Own performance test plans, timelines, and estimates for ConnectX-10 NIC, BlueField DPU, Spectrum switch, and Quantum switch programs.',
      'Lead end-to-end testing across throughput, latency, traffic generation, and power-modeling scenarios with cross-functional teams.',
      'Built a system-topology support layer for high-priority tests spanning multi-host and multi-switch configurations.',
    ],
  },
  {
    period: 'Jul 2023 — Dec 2023',
    location: 'Hyderabad, India',
    company: 'AMD · AECG SRAM Group',
    title: 'Design Intern',
    summary: 'Designed a configurable memory block and automated simulation-check generation for a next-generation SRAM design flow.',
    points: [
      'Designed a configurable single-to-quad-port memory block at the 7 nm node in Cadence Virtuoso.',
      'Automated simulation-check generation with Bash to characterize a standard memory element in timing.',
    ],
  },
];

const skills = [
  { label: 'Verification & performance', items: ['Test planning', 'Power modeling', 'Performance debugging', 'Traffic generation'] },
  { label: 'Networking systems', items: ['ConnectX data paths', 'RDMA / RoCE', 'Ethernet & InfiniBand', 'C2C & multi-host'] },
  { label: 'Tools & languages', items: ['Python', 'Bash', 'Verilog', 'Linux', 'Confluence', 'Perforce'] },
  { label: 'Hardware design', items: ['Cadence Virtuoso', 'HSPICE', 'OpenLane', 'Sky130 PDK'] },
];

const projects = [
  {
    title: 'Multi-Host Topology Simulator',
    description: 'Built a support layer for high-priority networking tests spanning multi-host and multi-switch configurations to validate AI data center architectures.',
    tech: ['Python', 'Networking', 'System Design'],
    link: 'https://github.com/7vik-g'
  },
  {
    title: 'Automated Timing Characterization',
    description: 'Developed Bash-based automation for simulation-check generation to efficiently characterize standard memory elements in design flows.',
    tech: ['Bash', 'Hardware Design', 'Simulation'],
    link: 'https://github.com/7vik-g'
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('sathvik4sunny@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sathvik Reddy Govindu home">
          <span className="brand-mark">SRG</span>
          <span className="brand-name">Sathvik Reddy Govindu</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Currently building reliable systems at NVIDIA</div>
            <h1>Engineering clarity into <em>complex systems.</em></h1>
            <p className="hero-intro">I’m Sathvik, a Performance Verification Engineer focused on making high-performance networking systems more predictable, measurable, and ready for the real world.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s connect <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#experience">Explore my work <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-card">
              <div className="orbit-lines" />
              <div className="orbit-center"><Cpu size={30} strokeWidth={1.3} /></div>
              <span className="orbit-label label-top">Performance</span>
              <span className="orbit-label label-right">Systems</span>
              <span className="orbit-label label-bottom">Verification</span>
              <span className="orbit-label label-left">Curiosity</span>
            </div>
            <p className="aside-note">Electrical engineer by training.<br />Systems thinker by practice.</p>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track"><span>PERFORMANCE VERIFICATION</span><b>✦</b><span>NETWORKING SYSTEMS</span><b>✦</b><span>HARDWARE DESIGN</span><b>✦</b><span>PERFORMANCE VERIFICATION</span><b>✦</b><span>NETWORKING SYSTEMS</span></div>
        </div>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / About</div>
          <div className="about-grid">
            <h2>Seeing the whole system,<br /><em>not just the signal.</em></h2>
            <div className="about-copy">
              <p>My work lives at the intersection of hardware, software, and the questions that connect them. I translate architectural intent into rigorous test plans, then follow the evidence until a system’s behavior makes sense.</p>
              <p>With a B.Tech in Electrical Engineering from <strong>IIT Indore</strong>, I bring a design-first mindset to performance engineering — equal parts analytical, collaborative, and curious.</p>
              <div className="education-chip"><GraduationCap size={18} /><span><strong>Indian Institute of Technology, Indore</strong><small>B.Tech · Electrical Engineering · 2020 — 2024</small></span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading"><div className="section-kicker">02 / Experience</div><span className="section-caption">A record of learning in public</span></div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-item" key={experience.company}>
                <div className="experience-meta"><span className="experience-index">0{index + 1}</span><span>{experience.period}</span><span>{experience.location}</span></div>
                <div className="experience-body"><div className="experience-title"><div><span className="company">{experience.company}</span><h3>{experience.title}</h3></div><BriefcaseBusiness size={22} /></div><p className="experience-summary">{experience.summary}</p><ul>{experience.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><div className="section-kicker">03 / Toolkit</div><span className="section-caption">The tools behind the thinking</span></div>
          <div className="skills-grid">
            {skills.map((group, index) => <div className="skill-group" key={group.label}><span className="skill-number">0{index + 1}</span><h3>{group.label}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
          </div>
        </section>

        <section className="section-wrap project-section" id="projects">
          <div className="section-heading"><div className="section-kicker">04 / Projects</div><span className="section-caption">Where performance meets possibility</span></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '32px' }}>
            {projects.map((project, index) => (
              <div className="project-card" key={index} style={{ padding: '30px', gap: '20px' }}>
                <div className="project-icon"><Network size={25} /></div>
                <div>
                  <h2 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>{project.title}</h2>
                  <p style={{ margin: '0 0 16px 0' }}>{project.description}</p>
                  <div className="skill-tags">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`} style={{ alignSelf: 'center' }}>
                  <ArrowUpRight className="project-arrow" size={28} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-top"><div className="section-kicker">05 / Contact</div><span>Have a thoughtful problem?</span></div>
          <div className="contact-content"><h2>Let’s make something<br /><em>work better.</em></h2><div className="contact-side"><p>Whether you’re working on a challenging system, a new idea, or simply want to say hello, my inbox is open.</p><button className="email-button" onClick={copyEmail}>{copied ? <><Check size={17} /> Copied to clipboard</> : <><Mail size={17} /> sathvik4sunny@gmail.com</>}</button></div></div>
          <div className="social-row"><div className="availability"><span className="status-dot" /> Open to interesting conversations</div><div className="social-links"><a href="mailto:sathvik4sunny@gmail.com" aria-label="Email Sathvik"><Mail size={17} /></a><a href="https://www.linkedin.com/in/sathvik-reddy-govindu-7a6b55235" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-glyph">in</span></a><a href="https://github.com/7vik-g" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="github-glyph">GH</span></a></div></div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><span>© 2026 Sathvik Reddy Govindu</span><span>Built with intent <Code2 size={14} /></span><a href="#top" aria-label="Back to top"><ArrowUpRight size={16} /></a></footer>
    </div>
  );
}

export default App;
