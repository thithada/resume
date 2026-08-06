"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  Download,
  ExternalLink,
  GitBranch,
  ImageIcon,
  Languages,
  Mail,
  MapPin,
  MonitorUp,
  Phone,
  Plus,
  Sparkles,
  Target,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Check PD",
    subtitle: "Digital Parkinson’s risk screening",
    role: "Software Developer · Bon8 Internship",
    period: "2026 — Present",
    status: "In progress",
    images: [
      { src: "/images/check-pd-01.webp", label: "01 / Cover" },
      { src: "/images/check-pd-02.webp", label: "02 / Assessment" },
      { src: "/images/check-pd-03.webp", label: "03 / Results" },
      { src: "/images/check-pd-04.webp", label: "04 / Mobile flow" },
    ],
    description:
      "A mobile-first health assessment experience that guides users through digital tests, tracks progress, and turns complex sensor interactions into an approachable flow.",
    impact: [
      "Built five assessment modules using audio recording, motion sensors, and touch interactions.",
      "Created responsive registration, settings, assessment, history, and results journeys.",
      "Developed reusable mobile components, swipe navigation, animations, persistent forms, and frontend tests.",
    ],
    metrics: [
      { value: "05", label: "Assessment modules", placeholder: false },
      { value: "XX", label: "Users or test cases", placeholder: true },
      { value: "XX%", label: "Completion improvement", placeholder: true },
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
    images: [
      { src: "/images/gen-h-01.webp", label: "01 / Cover" },
      { src: "/images/gen-h-02.webp", label: "02 / Quests" },
      { src: "/images/gen-h-03.webp", label: "03 / Badges" },
      { src: "/images/gen-h-04.webp", label: "04 / Leaderboard" },
    ],
    description:
      "A gamified platform that encourages healthy, sustainable habits through daily quests, progress tracking, badges, and competitive leaderboards.",
    impact: [
      "Delivered quest, badge, notification, Hall of Fame, and XP-based leaderboard features.",
      "Implemented server logic, database schemas, seeding, progress tracking, and image submissions.",
      "Integrated LINE LIFF registration and session flows across a responsive component system.",
    ],
    metrics: [
      { value: "05+", label: "Core feature systems", placeholder: false },
      { value: "XX", label: "Daily active users", placeholder: true },
      { value: "XX%", label: "Quest completion rate", placeholder: true },
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
    images: [
      { src: "/images/nashgui-01.webp", label: "01 / Cover" },
      { src: "/images/nashgui-02.webp", label: "02 / Commands" },
      { src: "/images/nashgui-03.webp", label: "03 / Templates" },
      { src: "/images/nashgui-04.webp", label: "04 / Workflow" },
    ],
    description:
      "A web application for generating and managing command sets used to control radio telescope equipment—streamlining highly technical operation workflows.",
    impact: [
      "Translated Figma designs into responsive React and Tailwind CSS interfaces.",
      "Integrated authenticated FastAPI REST endpoints and structured frontend state flows.",
      "Containerized application services with Docker for consistent deployment environments.",
    ],
    metrics: [
      { value: "01", label: "Telescope workflow", placeholder: false },
      { value: "XX", label: "Commands generated", placeholder: true },
      { value: "XXh", label: "Operator time saved", placeholder: true },
    ],
    tech: ["React", "FastAPI", "MariaDB", "Docker"],
  },
];

const additionalProjects = [
  { number: "04", title: "repair-report", visibility: "Public" },
  { number: "05", title: "autocar", visibility: "Public" },
  { number: "06", title: "Project-nutrition", visibility: "Private" },
  { number: "07", title: "BackTest", visibility: "Add visibility" },
];

const beyondCode = [
  {
    title: "Photography",
    text: "Finding structure, light, and small details in ordinary scenes.",
  },
  {
    title: "Running",
    text: "A quiet routine for consistency, patience, and a clear reset.",
  },
  {
    title: "Music",
    text: "Space away from the screen to recharge and notice new ideas.",
  },
];

const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind CSS"] },
  { label: "Backend", items: ["FastAPI", "API Routes", "RESTful API", "Prisma ORM"] },
  { label: "Data & DevOps", items: ["PostgreSQL", "MySQL", "MariaDB", "Docker", "Git"] },
  { label: "Languages & AI", items: ["JavaScript", "Python", "PHP", "ChatGPT", "Claude", "Codex"] },
];

const studySteps = [
  {
    label: "Problem",
    title: "Make complex screening feel human.",
    text: "The experience needed to capture meaningful audio, motion, and touch signals without making a health assessment feel technical or intimidating on a phone.",
  },
  {
    label: "My role",
    title: "Turn requirements into a product system.",
    text: "I translated provided flows and designs into reusable React architecture across registration, settings, five assessments, history, and result journeys.",
  },
  {
    label: "Challenge",
    title: "Sensors, state, and mobile interaction.",
    text: "The work combined browser microphone and motion access, persistent incomplete answers, responsive components, swipe navigation, animations, and testable frontend behavior.",
  },
  {
    label: "Result",
    title: "Five modules ready for the next phase.",
    text: "The frontend assessment system is in place. The next phase is backend development and machine-learning analysis. Add validated user and testing outcomes here later.",
  },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

function ReplaceableImage({
  src,
  alt,
  label,
  size,
}: {
  src: string;
  alt: string;
  label: string;
  size: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="replaceable-image">
      <div className="image-grid" aria-hidden="true" />
      <div className="image-placeholder">
        <ImageIcon size={32} />
        <strong>{label}</strong>
        <span>{size}</span>
        <small>{src}</small>
      </div>
      {/* Native img keeps the shared component compatible with both vinext and the Vite/Vercel build. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={loaded ? "loaded" : ""}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      <span className="replace-tag"><Plus size={12} /> Replace image</span>
    </div>
  );
}

function ProjectGallery({
  projectTitle,
  images,
}: {
  projectTitle: string;
  images: Array<{ src: string; label: string }>;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const previous = () => setActiveImage((current) => (current - 1 + images.length) % images.length);
  const next = () => setActiveImage((current) => (current + 1) % images.length);
  const currentImage = images[activeImage] ?? images[0];
  const formatCount = (value: number) => String(value).padStart(2, "0");

  if (!currentImage) return null;

  return (
    <div className="project-gallery">
      <div className="gallery-main">
        <ReplaceableImage
          src={currentImage.src}
          alt={`${projectTitle} — ${currentImage.label}`}
          label={`${projectTitle.toUpperCase()} / ${currentImage.label.toUpperCase()}`}
          size="1600 × 1000 px"
        />
        <div className="gallery-controls">
          <span>{formatCount(activeImage + 1)} / {formatCount(images.length)}</span>
          <div>
            <button type="button" onClick={previous} aria-label={`Previous ${projectTitle} image`}><ChevronLeft size={16} /></button>
            <button type="button" onClick={next} aria-label={`Next ${projectTitle} image`}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
      <div className="gallery-thumbnails" aria-label={`${projectTitle} image gallery`}>
        {images.map((image, index) => (
          <button
            className={activeImage === index ? "active" : ""}
            key={image.src}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`Show ${image.label}`}
            aria-pressed={activeImage === index}
          >
            <ReplaceableImage
              src={image.src}
              alt=""
              label={formatCount(index + 1)}
              size={image.label}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeStudy, setActiveStudy] = useState(0);
  const cursorAura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const aura = cursorAura.current;
    if (!aura || reduceMotion || !finePointer) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      aura.style.transform = `translate3d(${currentX - 130}px, ${currentY - 130}px, 0)`;
      frame = window.requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      aura.classList.add("active");
    };
    const leave = () => aura.classList.remove("active");

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("thithadatomas@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <div className="cursor-aura" ref={cursorAura} aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <nav className="nav-shell" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Back to top">TI<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="/projects">All projects</a>
          <a href="#case-study">Case study</a>
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

      <section className="about section-shell scroll-reveal" id="about" data-reveal>
        <SectionLabel number="01">Profile</SectionLabel>
        <div className="about-grid">
          <h2>Equal parts <em>logic</em><br />and <em>craft.</em></h2>
          <div className="about-copy">
            <p className="lead">I care about the moment a complicated system starts to feel simple.</p>
            <p>My work spans frontend architecture, backend APIs, data modeling, and product thinking. I enjoy translating ideas and requirements into user flows, database schemas, and working software—then refining the small interactions that make it feel complete.</p>
            <p>The projects I enjoy most live where software meets the real world: health assessment sensors, habit-forming product systems, and radio telescope operations.</p>
            <p>I’m currently exploring practical ways to integrate AI into software development and product experiences.</p>
          </div>
          <div className="principles">
            <span>01 / Think in systems</span>
            <span>02 / Design for humans</span>
            <span>03 / Ship with intention</span>
          </div>
        </div>

        <div className="career-brief" aria-label="Career preferences">
          <div><Target size={19} /><span>Target roles</span><strong>Frontend / Full-stack</strong></div>
          <div><MonitorUp size={19} /><span>Work mode</span><strong>Remote / Hybrid</strong></div>
          <div><BriefcaseBusiness size={19} /><span>Availability</span><strong>Open to discuss</strong></div>
          <div><Languages size={19} /><span>Languages</span><strong>Thai · English</strong></div>
        </div>
      </section>

      <section className="work section-shell dark-section scroll-reveal" id="work" data-reveal>
        <SectionLabel number="02">Selected work</SectionLabel>
        <div className="work-heading">
          <h2>Projects with<br /><em>real-world signal.</em></h2>
          <p>From digital health assessments to radio telescope operations—building across interfaces, APIs, and data.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card scroll-reveal" data-reveal key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span className="project-status"><i />{project.status}</span>
              </div>

              <ProjectGallery projectTitle={project.title} images={project.images} />

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

              <div className="project-metrics">
                {project.metrics.map((metric) => (
                  <div className={metric.placeholder ? "metric-placeholder" : ""} key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    {metric.placeholder && <small>replace later</small>}
                  </div>
                ))}
              </div>

              <p className="project-description">{project.description}</p>
              <ul>
                {project.impact.map((item) => <li key={item}><ChevronRight size={15} />{item}</li>)}
              </ul>
              <div className="project-links" aria-label={`${project.title} links`}>
                <span><ExternalLink size={14} /> Add live demo</span>
                <span><Code2 size={14} /> Add repository</span>
                <span><ImageIcon size={14} /> Add project screenshots</span>
              </div>
              <div className="tech-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="project-archive">
          <div className="archive-heading">
            <span>MORE BUILDS / 04—07</span>
            <h3>Project archive</h3>
            <p>Additional work ready for details, screenshots, and case-study notes.</p>
            <a href="/projects">Explore all projects <ArrowUpRight size={16} /></a>
          </div>
          <div className="archive-list">
            {additionalProjects.map((project) => (
              <a href={`/projects#${project.title.toLowerCase()}`} key={project.number}>
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <small className={project.visibility === "Private" ? "private" : ""}>{project.visibility}</small>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study section-shell scroll-reveal" id="case-study" data-reveal>
        <SectionLabel number="03">Featured case study</SectionLabel>
        <div className="case-heading">
          <div>
            <span className="case-kicker">CHECK PD · DEEP DIVE</span>
            <h2>Beyond the screens.<br /><em>Inside the thinking.</em></h2>
          </div>
          <p>A compact story recruiters can scan quickly. Replace the final outcome with validated product data when it becomes available.</p>
        </div>

        <div className="case-panel">
          <div className="case-tabs" role="tablist" aria-label="Case study stages">
            {studySteps.map((step, index) => (
              <button
                className={activeStudy === index ? "active" : ""}
                key={step.label}
                type="button"
                role="tab"
                aria-selected={activeStudy === index}
                onClick={() => setActiveStudy(index)}
              >
                <span>0{index + 1}</span>{step.label}
              </button>
            ))}
          </div>
          <div className="case-content" role="tabpanel">
            <span>0{activeStudy + 1} / 04</span>
            <h3>{studySteps[activeStudy].title}</h3>
            <p>{studySteps[activeStudy].text}</p>
          </div>
          <div className="case-signal" aria-hidden="true">
            {[42, 68, 34, 82, 58, 92, 48, 74, 38, 66, 52, 88].map((height, index) => (
              <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="expertise section-shell scroll-reveal" id="expertise" data-reveal>
        <SectionLabel number="04">Expertise</SectionLabel>
        <div className="expertise-heading">
          <h2>A versatile stack.<br /><em>One clear purpose.</em></h2>
          <p>Choosing the right tools to make ideas useful, maintainable, and ready to grow.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={group.label}>
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <div>{group.items.map((item) => <p key={item}>{item}</p>)}</div>
            </div>
          ))}
        </div>

        <div className="working-style">
          <div>
            <span>WORKING STYLE</span>
            <h3>How I contribute beyond code.</h3>
          </div>
          <div className="working-tags">
            {[
              "Requirement breakdown",
              "User-flow thinking",
              "Figma handoff",
              "Git workflow",
              "API integration",
              "Responsive UI",
              "Frontend testing",
              "AI-assisted development",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="language-card">
            <Languages size={22} />
            <div><strong>Thai</strong><span>Native</span></div>
            <div><strong>English</strong><span>Add proficiency level</span></div>
          </div>
        </div>
      </section>

      <section className="journey section-shell scroll-reveal" id="journey" data-reveal>
        <SectionLabel number="05">Journey</SectionLabel>
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

      <aside className="beyond-code scroll-reveal" aria-labelledby="beyond-code-title" data-reveal>
        <div className="beyond-code-heading">
          <span>06 / BEYOND CODE</span>
          <h2 id="beyond-code-title">A little more <em>human.</em></h2>
          <small>Editable starter content</small>
        </div>
        <div className="beyond-code-list">
          {beyondCode.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </aside>

      <section className="contact section-shell scroll-reveal" id="contact" data-reveal>
        <div className="contact-noise" aria-hidden="true" />
        <div className="availability"><span className="status-dot" /> Open to software engineering opportunities</div>
        <p>Frontend · Full-stack · Remote / Hybrid</p>
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
