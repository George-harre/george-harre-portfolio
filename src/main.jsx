
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Code2,
  Layers3,
  Database,
  Terminal,
  Menu,
  X,
  MapPin,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Monitor,
  BriefcaseBusiness,
} from "lucide-react";

import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      number: "01",
      name: "CareerBridge Kenya",
      category: "CAREER & EMPLOYMENT PLATFORM",
      description:
        "A platform designed to connect Kenyan students, graduates and professionals with job opportunities, internships, industrial attachments and graduate trainee programmes.",
      features: [
        "Job and internship opportunities",
        "Employer and applicant accounts",
        "Application and verification workflows",
        "Opportunities across Kenya's 47 counties",
      ],
      technologies: ["React", "Vite", "Express", "MongoDB"],
      icon: <BriefcaseBusiness size={28} />,
      color: "blue",
      github: "https://github.com/George-harre/CareerBridge-Kenya",
    },
    {
      number: "02",
      name: "EliteConnect",
      category: "WEB APPLICATION",
      description:
        "A web development project focused on building a modern digital experience with a clean interface, organized information and a foundation for future features.",
      features: [
        "Modern user interface",
        "Responsive web experience",
        "Structured application components",
        "Designed for future expansion",
      ],
      technologies: ["React", "JavaScript", "CSS", "Web Development"],
      icon: <Layers3 size={28} />,
      color: "purple",
      github: "",
    },
  ];

  const skills = [
    {
      title: "Frontend Development",
      icon: <Monitor size={22} />,
      items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    },
    {
      title: "Backend Development",
      icon: <Terminal size={22} />,
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      icon: <Database size={22} />,
      items: ["MongoDB", "Mongoose", "Data Management"],
    },
    {
      title: "Tools & Workflow",
      icon: <Code2 size={22} />,
      items: ["Git", "GitHub", "VS Code", "Debugging"],
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <style>{`
        :root {
          color-scheme: dark;
          --bg: #080b14;
          --panel: #101625;
          --panel-light: #141d30;
          --text: #f3f6ff;
          --muted: #a0abc0;
          --line: rgba(164, 180, 210, 0.16);
          --blue: #7c9cff;
          --cyan: #65e0dc;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 90px; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; }
        .portfolio { min-height: 100vh; overflow: hidden; }
        .container { width: min(1120px, 90%); margin: 0 auto; }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(8, 11, 20, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .logo { font-size: 20px; font-weight: 850; letter-spacing: -1px; }
        .logo span { color: var(--blue); }
        .nav-links { display: flex; align-items: center; gap: 30px; }
        .nav-links a {
          color: var(--muted);
          font-size: 13px;
          transition: color .2s;
        }
        .nav-links a:hover { color: white; }
        .nav-contact {
          padding: 11px 17px;
          border: 1px solid var(--line);
          border-radius: 9px;
          color: white !important;
        }
        .menu-toggle {
          display: none;
          color: white;
          background: transparent;
          border: 0;
          cursor: pointer;
        }

        .hero {
          position: relative;
          padding: 112px 0 100px;
          background:
            radial-gradient(ellipse at 78% 18%, rgba(91, 114, 255, .17), transparent 37%),
            radial-gradient(ellipse at 12% 78%, rgba(48, 202, 205, .08), transparent 36%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 60px;
          align-items: center;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--cyan);
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 15px var(--cyan);
        }
        h1 {
          max-width: 740px;
          margin: 24px 0;
          font-size: clamp(42px, 6.2vw, 76px);
          line-height: 1.06;
          letter-spacing: -4px;
        }
        .gradient-text {
          color: var(--blue);
          background: linear-gradient(100deg, #92a9ff, #65e0dc);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-description {
          max-width: 600px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
        .button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 13px 18px;
          border-radius: 10px;
          border: 1px solid var(--line);
          font-size: 13px;
          font-weight: 750;
          transition: transform .2s, border-color .2s;
        }
        .button:hover { transform: translateY(-2px); border-color: var(--blue); }
        .button-primary {
          color: #080b14;
          background: linear-gradient(110deg, #9bb0ff, #6fe0da);
          border: 0;
        }
        .button-secondary { background: rgba(255,255,255,.025); }

        .hero-card {
          position: relative;
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: linear-gradient(145deg, rgba(24, 34, 56, .92), rgba(12, 17, 29, .95));
          box-shadow: 0 25px 100px rgba(0,0,0,.25);
        }
        .card-top { display: flex; align-items: center; gap: 7px; margin-bottom: 28px; }
        .window-dot { width: 9px; height: 9px; border-radius: 50%; background: #697a9b; }
        .window-label { margin-left: auto; color: var(--muted); font-size: 11px; }
        .profile-symbol {
          display: grid; place-items: center;
          width: 76px; height: 76px;
          border-radius: 22px;
          color: var(--cyan);
          background: rgba(101,224,220,.09);
          border: 1px solid rgba(101,224,220,.2);
        }
        .hero-card h3 { margin: 22px 0 8px; font-size: 23px; }
        .hero-card p { color: var(--muted); line-height: 1.7; font-size: 13px; }
        .code-line {
          display: flex; align-items: center; gap: 12px;
          margin-top: 11px; padding: 12px;
          border-radius: 9px;
          background: rgba(255,255,255,.035);
          color: #c5d0e7;
          font: 12px ui-monospace, SFMono-Regular, Menlo, monospace;
        }
        .code-number { color: var(--cyan); }

        section { padding: 90px 0; }
        .section-heading { max-width: 680px; margin-bottom: 42px; }
        .section-label {
          color: var(--cyan);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.4px;
          text-transform: uppercase;
        }
        h2 {
          margin: 13px 0;
          font-size: clamp(30px, 4vw, 46px);
          letter-spacing: -1.7px;
        }
        .section-intro { color: var(--muted); line-height: 1.8; font-size: 15px; }

        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .project-card {
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: var(--panel);
          transition: transform .2s, border-color .2s;
        }
        .project-card:hover { transform: translateY(-5px); border-color: rgba(124,156,255,.5); }
        .project-header { display: flex; align-items: center; justify-content: space-between; }
        .project-icon {
          display: grid; place-items: center;
          width: 54px; height: 54px; border-radius: 15px;
        }
        .project-icon.blue { color: #9db4ff; background: rgba(124,156,255,.12); }
        .project-icon.purple { color: #d0a7ff; background: rgba(184,130,255,.12); }
        .project-number { color: #697791; font-size: 13px; font-weight: 800; }
        .project-category {
          margin-top: 25px; color: var(--cyan);
          font-size: 10px; font-weight: 800; letter-spacing: 1.7px;
        }
        .project-card h3 { margin: 11px 0; font-size: 25px; letter-spacing: -.7px; }
        .project-description { color: var(--muted); font-size: 14px; line-height: 1.8; }
        .feature-list { display: grid; gap: 11px; margin: 23px 0; padding: 0; list-style: none; }
        .feature-list li { display: flex; gap: 10px; color: #d2d9e8; font-size: 12px; line-height: 1.6; }
        .feature-check { color: var(--cyan); flex-shrink: 0; }
        .tech-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .tech-tag {
          padding: 7px 10px; border-radius: 7px;
          background: rgba(255,255,255,.045);
          border: 1px solid var(--line);
          color: #c1cce0; font-size: 11px;
        }
        .project-link {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 24px; color: #a9bcff; font-size: 12px; font-weight: 800;
        }

        .about-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 60px; }
        .about-panel {
          padding: 28px; border-radius: 18px;
          border: 1px solid var(--line);
          background: linear-gradient(145deg, #121b2d, #0c111e);
        }
        .about-panel p { color: var(--muted); line-height: 1.9; font-size: 14px; }
        .about-facts { display: grid; gap: 16px; margin-top: 25px; }
        .about-fact { display: flex; align-items: center; gap: 12px; color: #d9e0ef; font-size: 13px; }
        .fact-icon { color: var(--cyan); }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .skill-card { padding: 22px; border: 1px solid var(--line); border-radius: 14px; background: var(--panel); }
        .skill-title { display: flex; align-items: center; gap: 11px; font-size: 14px; font-weight: 800; }
        .skill-title svg { color: var(--blue); }
        .skill-items { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 17px; }
        .skill-items span { color: var(--muted); font-size: 11px; }

        .contact-section { padding-top: 40px; }
        .contact-panel {
          padding: 54px 28px;
          text-align: center;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: radial-gradient(ellipse at top, rgba(124,156,255,.12), transparent 65%), var(--panel);
        }
        .contact-panel h2 { margin-top: 17px; }
        .contact-panel p { max-width: 560px; margin: 0 auto; color: var(--muted); line-height: 1.8; font-size: 14px; }
        .contact-panel .hero-actions { justify-content: center; }
        footer { padding: 26px 0; border-top: 1px solid var(--line); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .footer-inner p { color: var(--muted); font-size: 11px; }
        .footer-mark { color: var(--blue); font-weight: 800; }

        @media (max-width: 800px) {
          .hero { padding: 75px 0; }
          .hero-grid, .about-grid { grid-template-columns: 1fr; gap: 35px; }
          .hero-card { max-width: 520px; }
          .projects-grid { grid-template-columns: 1fr; }
          .about-grid { gap: 22px; }
          section { padding: 70px 0; }
          h1 { letter-spacing: -2.5px; }
        }
        @media (max-width: 620px) {
          .nav-inner { min-height: 68px; }
          .menu-toggle { display: inline-flex; }
          .nav-links {
            display: ${menuOpen ? "flex" : "none"};
            position: absolute; top: 68px; left: 0; right: 0;
            padding: 20px 5% 24px;
            flex-direction: column; align-items: stretch; gap: 19px;
            background: #0c111e; border-bottom: 1px solid var(--line);
          }
          .nav-links a { padding: 5px 0; }
          .nav-contact { text-align: center; }
          .hero { padding: 62px 0; }
          h1 { font-size: 44px; }
          .hero-description { font-size: 15px; }
          .hero-card, .project-card { padding: 22px; }
          .skills-grid { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; text-align: center; }
          .contact-panel { padding: 40px 20px; }
        }
      `}</style>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="logo" href="#home" onClick={closeMenu}>
            GHR<span>.</span>
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="nav-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Contact me <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Developer Portfolio
              </div>

              <h1>
                Building digital
                <br />
                solutions that
                <br />
                <span className="gradient-text">move people forward.</span>
              </h1>

              <p className="hero-description">
                I'm George Harre Ruwa, an aspiring software developer with a
                background in Mathematics and Computer Studies. I build
                practical web applications that aim to solve real-world
                problems.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my projects <ArrowDown size={17} />
                </a>
                <a className="button button-secondary" href="#contact">
                  <Mail size={16} /> Get in touch
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-top">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-label">developer.profile</span>
              </div>

              <div className="profile-symbol">
                <Code2 size={38} />
              </div>

              <h3>George Harre Ruwa</h3>
              <p>Web Development · Problem Solving · Technology</p>

              <div className="code-line">
                <span className="code-number">01</span>
                <span>const passion = "building";</span>
              </div>
              <div className="code-line">
                <span className="code-number">02</span>
                <span>const focus = "real-world problems";</span>
              </div>
              <div className="code-line">
                <span className="code-number">03</span>
                <span>const location = "Kenya";</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">Selected work</div>
              <h2>Projects I'm building.</h2>
              <p className="section-intro">
                A growing collection of applications, ideas and practical
                solutions. This portfolio will expand as I complete more
                projects.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-header">
                    <div className={`project-icon ${project.color}`}>
                      {project.icon}
                    </div>
                    <span className="project-number">{project.number}</span>
                  </div>

                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <ul className="feature-list">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span className="tech-tag" key={tech}>{tech}</span>
                    ))}
                  </div>

                  {project.github ? (
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="project-link">
                      Project showcase <Sparkles size={15} />
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container about-grid">
            <div className="section-heading">
              <div className="section-label">About me</div>
              <h2>Education meets technology.</h2>
              <p className="section-intro">
                I enjoy combining analytical thinking, creativity and
                technology to develop useful digital experiences.
              </p>
            </div>

            <div className="about-panel">
              <p>
                My academic background is in Education Science, specializing
                in Mathematics and Computer Studies at Masinde Muliro
                University of Science and Technology. My interests include
                software development, digital platforms and technology-driven
                solutions.
              </p>
              <p>
                Through projects such as CareerBridge Kenya and EliteConnect,
                I am developing my practical skills and building a portfolio
                that demonstrates what I can create.
              </p>

              <div className="about-facts">
                <div className="about-fact">
                  <GraduationCap className="fact-icon" size={20} />
                  Education Science — Mathematics & Computer Studies
                </div>
                <div className="about-fact">
                  <MapPin className="fact-icon" size={20} />
                  Kenya
                </div>
                <div className="about-fact">
                  <Code2 className="fact-icon" size={20} />
                  Focused on software and web development
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">Technical toolkit</div>
              <h2>Skills & technologies.</h2>
              <p className="section-intro">
                Technologies I use or am working with as I continue to
                develop my software engineering skills.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-title">
                    {skill.icon}
                    {skill.title}
                  </div>
                  <div className="skill-items">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="section-label">Let's connect</div>
              <h2>Have a project in mind?</h2>
              <p>
                I'm interested in connecting with developers, employers and
                people working on meaningful technology projects.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://github.com/George-harre"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} /> Visit my GitHub
                  <ArrowUpRight size={15} />
                </a>
                <a className="button button-secondary" href="mailto:">
                  <Mail size={17} /> Email me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="logo" href="#home">GHR<span>.</span></a>
          <p>Designed and developed by George Harre Ruwa.</p>
          <p>© {new Date().getFullYear()} <span className="footer-mark">GHR</span></p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
