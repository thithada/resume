"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Copy,
  Download,
  Code2,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Check PD",
    subtitle: "Digital Parkinson’s risk screening",
    role: "Software Developer · Bon8 Internship",
    period: "2026 — Present",
    status: "In progress",
    description:
      "A mobile-first health assessment experience that guides users through digital tests, tracks progress, and turns complex sensor interactions into an approachable flow.",
    impact: [
      "Built five assessment modules using audio recording, motion sensors, and touch interactions.",
      "Created responsive registration, settings, assessment, history, and results journeys.",
      "Developed reusable mobile components, swipe navigation, animations, persistent forms, and frontend tests.",
    ],
    tech: ["React", "TypeScript", "LINE LIFF", "Web APIs"],
  },
  {
    number: "02",
    title: "Gen-H: Let’s Move",
    subtitle: "Gamified healthy habit platform",
    role: "Software Developer · Bon8 Internship",
    period: "2026 — Present",
    status: "Live product",
    description:
      "A gamified platform that encourages healthy, sustainable habits through daily quests, progress tracking, badges, and competitive leaderboards.",
    impact: [
      "Delivered quest, badge, notification, Hall of Fame, and XP-based leaderboard features.",
      "Implemented server logic, database schemas, seeding, progress tracking, and image submissions.",
      "Integrated LINE LIFF registration and session flows across a responsive component system.",
    ],
    tech: ["Next.js", "React", "Prisma", "PostgreSQL", "LINE LIFF"],
  },
  {
    number: "03",
    title: "NashGUI",
    subtitle: "Radio telescope command management",
    role: "Software Engineer · NARIT Internship",
    period: "2025 — 2026",
    status: "Completed",
    description:
      "A web application for generating and managing command sets used to control radio telescope equipment—streamlining highly technical operation workflows.",
    impact: [
      "Translated Figma designs into responsive React and Tailwind CSS interfaces.",
      "Integrated authenticated FastAPI REST endpoints and structured frontend state flows.",
      "Containerized application services with Docker for consistent deployment environments.",
    ],
    tech: ["React", "FastAPI", "MariaDB", "Docker"],
  },
];

const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind CSS"] },
  { label: "Backend", items: ["FastAPI", "API Routes", "RESTful API", "Prisma ORM"] },
  { label: "Data & DevOps", items: ["PostgreSQL", "MySQL", "MariaDB", "Docker", "Git"] },
  { label: "Languages & AI", items: ["JavaScript", "Python", "PHP", "ChatGPT", "Claude", "Codex"] },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("thithadatomas@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <nav className="nav-shell" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Back to top">TI<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#journey">Journey</a>
        </div>
        <a className="nav-resume" href="/resume_thithada.pdf" download>
          Résumé <Download size={15} />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            Software engineer · Thailand
          </div>
          <h1>
            Building digital
            <span>experiences that feel</span>
            <em>effortless.</em>
          </h1>
          <p className="hero-intro">
            I’m <strong>Thithada Islam</strong>, a full-stack developer with a frontend focus—turning complex requirements into clear, thoughtful, and dependable products.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">Explore my work <ArrowDown size={17} /></a>
            <button className="text-button" onClick={copyEmail} type="button">
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </div>

        <div className="hero-system" aria-label="Developer profile snapshot">
          <div className="system-orbit orbit-one" />
          <div className="system-orbit orbit-two" />
          <div className="system-core">
            <span className="core-kicker">CURRENT FOCUS</span>
            <strong>PRODUCT ×<br />ENGINEERING</strong>
            <small>React · TypeScript · AI</small>
          </div>
          <div className="floating-tag tag-one"><Sparkles size={14} /> AI curious</div>
          <div className="floating-tag tag-two"><CircleDot size={14} /> UX minded</div>
          <div className="floating-tag tag-three">03 shipped products</div>
        </div>

        <div className="hero-metrics">
          <div><strong>3.46</strong><span>GPA</span></div>
          <div><strong>03</strong><span>Featured projects</span></div>
          <div><strong>2026</strong><span>Graduating</span></div>
          <a href="mailto:thithadatomas@gmail.com"><span>Let’s build something</span><ArrowUpRight size={22} /></a>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <SectionLabel number="01">Profile</SectionLabel>
        <div className="about-grid">
          <h2>Equal parts <em>logic</em><br />and <em>craft.</em></h2>
          <div className="about-copy">
            <p className="lead">I care about the moment a complicated system starts to feel simple.</p>
            <p>My work spans frontend architecture, backend APIs, data modeling, and product thinking. I enjoy translating ideas and requirements into user flows, database schemas, and working software—then refining the small interactions that make it feel complete.</p>
            <p>I’m currently exploring practical ways to integrate AI into software development and product experiences.</p>
          </div>
          <div className="principles">
            <span>01 / Think in systems</span>
            <span>02 / Design for humans</span>
            <span>03 / Ship with intention</span>
          </div>
        </div>
      </section>

      <section className="work section-shell dark-section" id="work">
        <SectionLabel number="02">Selected work</SectionLabel>
        <div className="work-heading">
          <h2>Projects with<br /><em>real-world signal.</em></h2>
          <p>From digital health assessments to radio telescope operations—building across interfaces, APIs, and data.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span className="project-status"><i />{project.status}</span>
              </div>
              <div className="project-title-row">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <ArrowUpRight className="project-arrow" size={28} />
              </div>
              <div className="project-meta">
                <span>{project.role}</span>
                <span>{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul>
                {project.impact.map((item) => <li key={item}><ChevronRight size={15} />{item}</li>)}
              </ul>
              <div className="tech-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise section-shell" id="expertise">
        <SectionLabel number="03">Expertise</SectionLabel>
        <div className="expertise-heading">
          <h2>A versatile stack.<br /><em>One clear purpose.</em></h2>
          <p>Choosing the right tools to make ideas useful, maintainable, and ready to grow.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={group.label}>
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <div>
                {group.items.map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="journey section-shell" id="journey">
        <SectionLabel number="04">Journey</SectionLabel>
        <div className="journey-layout">
          <h2>Always learning.<br /><em>Always building.</em></h2>
          <div className="timeline">
            <article>
              <span>2026 — Present</span>
              <div><h3>Software Developer Intern</h3><p>Bon8 · Check PD & Gen-H: Let’s Move</p></div>
            </article>
            <article>
              <span>2025 — 2026</span>
              <div><h3>Software Engineer Intern</h3><p>NARIT · NashGUI</p></div>
            </article>
            <article>
              <span>2023 — 2026</span>
              <div><h3>B.Eng. Software Engineering</h3><p>University of Phayao · GPA 3.46</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-noise" aria-hidden="true" />
        <div className="availability"><span className="status-dot" /> Open to software engineering opportunities</div>
        <p>Have a role, project, or idea in mind?</p>
        <a className="contact-headline" href="mailto:thithadatomas@gmail.com">
          Let’s make it <em>real.</em><ArrowUpRight />
        </a>
        <div className="contact-links">
          <a href="mailto:thithadatomas@gmail.com"><Mail size={17} />Email</a>
          <a href="tel:+66934949511"><Phone size={17} />093-494-9511</a>
          <a href="https://github.com/thithada" target="_blank" rel="noreferrer"><Code2 size={17} />GitHub</a>
          <a href="https://gitlab.com/TomasTirty" target="_blank" rel="noreferrer"><GitBranch size={17} />GitLab</a>
          <span><MapPin size={17} />Thailand</span>
        </div>
      </section>

      <footer>
        <span>THITHADA ISLAM © 2026</span>
        <span>DESIGNED WITH INTENTION</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      <div className={`copy-toast ${copied ? "show" : ""}`} role="status">Email copied to clipboard <Check size={15} /></div>
    </main>
  );
}
