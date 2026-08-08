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
import { LanguageToggle, useLanguage } from "./i18n";

const projects = [
  {
    number: "01",
    title: "Check PD",
    subtitle: "Digital Parkinson’s risk screening",
    role: "Software Developer · Bon8 Internship",
    period: "2026 — Present",
    status: "In progress",
    images: [
      { src: "/images/check-pd-01.webp", label: "Cover" },
      { src: "/images/check-pd-02.webp", label: "Assessment" },
      { src: "/images/check-pd-03.webp", label: "Results" },
      { src: "/images/check-pd-04.webp", label: "Mobile flow" },
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
      { src: "/images/gen-h-01.webp", label: "Cover" },
      { src: "/images/gen-h-02.webp", label: "Quests" },
      { src: "/images/gen-h-03.webp", label: "Badges" },
      { src: "/images/gen-h-04.webp", label: "Leaderboard" },
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
      { src: "/images/nashgui-01.webp", label: "Cover" },
      { src: "/images/nashgui-02.webp", label: "Commands" },
      { src: "/images/nashgui-03.webp", label: "Templates" },
      { src: "/images/nashgui-04.webp", label: "Workflow" },
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
  replaceLabel = "Replace image",
}: {
  src: string;
  alt: string;
  label: string;
  size: string;
  replaceLabel?: string;
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
      <span className="replace-tag"><Plus size={12} /> {replaceLabel}</span>
    </div>
  );
}

function ProjectGallery({
  projectTitle,
  images,
  t,
}: {
  projectTitle: string;
  images: Array<{ src: string; label: string }>;
  t: (text: string) => string;
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
          alt={`${projectTitle} — ${t(currentImage.label)}`}
          label={`${projectTitle.toUpperCase()} / ${t(currentImage.label).toUpperCase()}`}
          size="1600 × 1000 px"
          replaceLabel={t("Replace image")}
        />
        <div className="gallery-controls">
          <span>{formatCount(activeImage + 1)} / {formatCount(images.length)}</span>
          <div>
            <button type="button" onClick={previous} aria-label={`${t("Previous")} ${projectTitle}`}><ChevronLeft size={16} /></button>
            <button type="button" onClick={next} aria-label={`${t("Next")} ${projectTitle}`}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
      <div className="gallery-thumbnails" aria-label={`${projectTitle} ${t("image gallery")}`}>
        {images.map((image, index) => (
          <button
            className={activeImage === index ? "active" : ""}
            key={image.src}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`${t("Show")} ${t(image.label)}`}
            aria-pressed={activeImage === index}
          >
            <ReplaceableImage
              src={image.src}
              alt=""
              label={formatCount(index + 1)}
              size={t(image.label)}
              replaceLabel={t("Replace image")}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeStudy, setActiveStudy] = useState(0);
  const cursorAura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = language === "th" ? "Thithada Islam — วิศวกรซอฟต์แวร์" : "Thithada Islam — Software Engineer";
  }, [language]);

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
    <main data-language={language}>
      <div className="cursor-aura" ref={cursorAura} aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <nav className="nav-shell" aria-label={t("Main navigation")}>
        <a className="monogram" href="#top" aria-label={t("Back to top")}>TI<span>.</span></a>
        <div className="nav-links">
          <a href="#work">{t("Work")}</a>
          <a href="/projects">{t("All projects")}</a>
          <a href="#case-study">{t("Case study")}</a>
          <a href="#expertise">{t("Expertise")}</a>
          <a href="#journey">{t("Journey")}</a>
        </div>
        <div className="nav-actions">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <a className="nav-resume" href="/resume_thithada.pdf" download>
            {t("Résumé")} <Download size={15} />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            {t("Software engineer · Thailand")}
          </div>
          <h1>
            {t("Building digital")}
            <span>{t("experiences that feel")}</span>
            <em>{t("effortless.")}</em>
          </h1>
          <p className="hero-intro">
            {t("I’m ")}<strong>Thithada Islam</strong>{t(", a full-stack developer with a frontend focus—turning complex requirements into clear, thoughtful, and dependable products.")}
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">{t("Explore my work")} <ArrowDown size={17} /></a>
            <button className="text-button" onClick={copyEmail} type="button">
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? t("Email copied") : t("Copy email")}
            </button>
          </div>
        </div>

        <div className="hero-system" aria-label={t("Developer profile snapshot")}>
          <div className="system-orbit orbit-one" />
          <div className="system-orbit orbit-two" />
          <div className="system-core">
            <span className="core-kicker">{t("CURRENT FOCUS")}</span>
            <strong>{language === "th" ? <>ผลิตภัณฑ์ ×<br />วิศวกรรม</> : <>PRODUCT ×<br />ENGINEERING</>}</strong>
            <small>React · TypeScript · AI</small>
          </div>
          <div className="floating-tag tag-one"><Sparkles size={14} /> {t("AI curious")}</div>
          <div className="floating-tag tag-two"><CircleDot size={14} /> {t("UX minded")}</div>
          <div className="floating-tag tag-three">{t("03 shipped products")}</div>
        </div>

        <div className="hero-metrics">
          <div><strong>3.46</strong><span>GPA</span></div>
          <div><strong>03</strong><span>{t("Featured projects")}</span></div>
          <div><strong>2026</strong><span>{t("Graduating")}</span></div>
          <a href="mailto:thithadatomas@gmail.com"><span>{t("Let’s build something")}</span><ArrowUpRight size={22} /></a>
        </div>
      </section>

      <section className="about section-shell scroll-reveal" id="about" data-reveal>
        <SectionLabel number="01">{t("Profile")}</SectionLabel>
        <div className="about-grid">
          <h2>{t("Equal parts")} <em>{t("logic")}</em><br />{t("and")} <em>{t("craft.")}</em></h2>
          <div className="about-copy">
            <p className="lead">{t("I care about the moment a complicated system starts to feel simple.")}</p>
            <p>{t("My work spans frontend architecture, backend APIs, data modeling, and product thinking. I enjoy translating ideas and requirements into user flows, database schemas, and working software—then refining the small interactions that make it feel complete.")}</p>
            <p>{t("The projects I enjoy most live where software meets the real world: health assessment sensors, habit-forming product systems, and radio telescope operations.")}</p>
            <p>{t("I’m currently exploring practical ways to integrate AI into software development and product experiences.")}</p>
          </div>
          <div className="principles">
            <span>{t("01 / Think in systems")}</span>
            <span>{t("02 / Design for humans")}</span>
            <span>{t("03 / Ship with intention")}</span>
          </div>
        </div>

        <div className="career-brief" aria-label={t("Career preferences")}>
          <div><Target size={19} /><span>{t("Target roles")}</span><strong>Frontend / Full-stack</strong></div>
          <div><MonitorUp size={19} /><span>{t("Work mode")}</span><strong>{t("Remote / Hybrid")}</strong></div>
          <div><BriefcaseBusiness size={19} /><span>{t("Availability")}</span><strong>{t("Open to discuss")}</strong></div>
          <div><Languages size={19} /><span>{t("Languages")}</span><strong>{t("Thai · English")}</strong></div>
        </div>
      </section>

      <section className="work section-shell dark-section scroll-reveal" id="work" data-reveal>
        <SectionLabel number="02">{t("Selected work")}</SectionLabel>
        <div className="work-heading">
          <h2>{t("Projects with")}<br /><em>{t("real-world signal.")}</em></h2>
          <p>{t("From digital health assessments to radio telescope operations—building across interfaces, APIs, and data.")}</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card scroll-reveal" data-reveal key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span className="project-status"><i />{t(project.status)}</span>
              </div>

              <ProjectGallery projectTitle={project.title} images={project.images} t={t} />

              <div className="project-title-row">
                <div>
                  <h3>{project.title}</h3>
                  <p>{t(project.subtitle)}</p>
                </div>
                <ArrowUpRight className="project-arrow" size={28} />
              </div>
              <div className="project-meta">
                <span>{t(project.role)}</span>
                <span>{t(project.period)}</span>
              </div>

              <div className="project-metrics">
                {project.metrics.map((metric) => (
                  <div className={metric.placeholder ? "metric-placeholder" : ""} key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{t(metric.label)}</span>
                    {metric.placeholder && <small>{t("replace later")}</small>}
                  </div>
                ))}
              </div>

              <p className="project-description">{t(project.description)}</p>
              <ul>
                {project.impact.map((item) => <li key={item}><ChevronRight size={15} />{t(item)}</li>)}
              </ul>
              <div className="project-links" aria-label={`${project.title} ${t("links")}`}>
                <span><ExternalLink size={14} /> {t("Add live demo")}</span>
                <span><Code2 size={14} /> {t("Add repository")}</span>
                <span><ImageIcon size={14} /> {t("Add project screenshots")}</span>
              </div>
              <div className="tech-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="project-archive">
          <div className="archive-heading">
            <span>{t("MORE BUILDS / 04—07")}</span>
            <h3>{t("Project archive")}</h3>
            <p>{t("Additional work ready for details, screenshots, and case-study notes.")}</p>
            <a href="/projects">{t("Explore all projects")} <ArrowUpRight size={16} /></a>
          </div>
          <div className="archive-list">
            {additionalProjects.map((project) => (
              <a href={`/projects#${project.title.toLowerCase()}`} key={project.number}>
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <small className={project.visibility === "Private" ? "private" : ""}>{t(project.visibility)}</small>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study section-shell scroll-reveal" id="case-study" data-reveal>
        <SectionLabel number="03">{t("Featured case study")}</SectionLabel>
        <div className="case-heading">
          <div>
            <span className="case-kicker">{t("CHECK PD · DEEP DIVE")}</span>
            <h2>{t("Beyond the screens.")}<br /><em>{t("Inside the thinking.")}</em></h2>
          </div>
          <p>{t("A compact story recruiters can scan quickly. Replace the final outcome with validated product data when it becomes available.")}</p>
        </div>

        <div className="case-panel">
          <div className="case-tabs" role="tablist" aria-label={t("Case study stages")}>
            {studySteps.map((step, index) => (
              <button
                className={activeStudy === index ? "active" : ""}
                key={step.label}
                type="button"
                role="tab"
                aria-selected={activeStudy === index}
                onClick={() => setActiveStudy(index)}
              >
                <span>0{index + 1}</span>{t(step.label)}
              </button>
            ))}
          </div>
          <div className="case-content" role="tabpanel">
            <span>0{activeStudy + 1} / 04</span>
            <h3>{t(studySteps[activeStudy].title)}</h3>
            <p>{t(studySteps[activeStudy].text)}</p>
          </div>
          <div className="case-signal" aria-hidden="true">
            {[42, 68, 34, 82, 58, 92, 48, 74, 38, 66, 52, 88].map((height, index) => (
              <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="expertise section-shell scroll-reveal" id="expertise" data-reveal>
        <SectionLabel number="04">{t("Expertise")}</SectionLabel>
        <div className="expertise-heading">
          <h2>{t("A versatile stack.")}<br /><em>{t("One clear purpose.")}</em></h2>
          <p>{t("Choosing the right tools to make ideas useful, maintainable, and ready to grow.")}</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={group.label}>
              <span>0{index + 1}</span>
              <h3>{t(group.label)}</h3>
              <div>{group.items.map((item) => <p key={item}>{item}</p>)}</div>
            </div>
          ))}
        </div>

        <div className="working-style">
          <div>
            <span>{t("WORKING STYLE")}</span>
            <h3>{t("How I contribute beyond code.")}</h3>
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
            ].map((item) => <span key={item}>{t(item)}</span>)}
          </div>
          <div className="language-card">
            <Languages size={22} />
            <div><strong>{t("Thai")}</strong><span>{t("Native")}</span></div>
            <div><strong>{t("English")}</strong><span>{t("Add proficiency level")}</span></div>
          </div>
        </div>
      </section>

      <section className="journey section-shell scroll-reveal" id="journey" data-reveal>
        <SectionLabel number="05">{t("Journey")}</SectionLabel>
        <div className="journey-layout">
          <h2>{t("Always learning.")}<br /><em>{t("Always building.")}</em></h2>
          <div className="timeline">
            <article>
              <span>{t("2026 — Present")}</span>
              <div><h3>{t("Software Developer Intern")}</h3><p>Bon8 · Check PD & Gen-H: Let’s Move</p></div>
            </article>
            <article>
              <span>2025 — 2026</span>
              <div><h3>{t("Software Engineer Intern")}</h3><p>NARIT · NashGUI</p></div>
            </article>
            <article>
              <span>2023 — 2026</span>
              <div><h3>{t("B.Eng. Software Engineering")}</h3><p>{t("University of Phayao · GPA 3.46")}</p></div>
            </article>
          </div>
        </div>
      </section>

      <aside className="beyond-code scroll-reveal" aria-labelledby="beyond-code-title" data-reveal>
        <div className="beyond-code-heading">
          <span>{t("06 / BEYOND CODE")}</span>
          <h2 id="beyond-code-title">{t("A little more")} <em>{t("human.")}</em></h2>
          <small>{t("Editable starter content")}</small>
        </div>
        <div className="beyond-code-list">
          {beyondCode.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </article>
          ))}
        </div>
      </aside>

      <section className="contact section-shell scroll-reveal" id="contact" data-reveal>
        <div className="contact-noise" aria-hidden="true" />
        <div className="availability"><span className="status-dot" /> {t("Open to software engineering opportunities")}</div>
        <p>{t("Frontend · Full-stack · Remote / Hybrid")}</p>
        <a className="contact-headline" href="mailto:thithadatomas@gmail.com">
          {t("Let’s make it")} <em>{t("real.")}</em><ArrowUpRight />
        </a>
        <div className="contact-links">
          <a href="mailto:thithadatomas@gmail.com"><Mail size={17} />{t("Email")}</a>
          <a href="tel:+66934949511"><Phone size={17} />093-494-9511</a>
          <a href="https://github.com/thithada" target="_blank" rel="noreferrer"><Code2 size={17} />GitHub</a>
          <a href="https://gitlab.com/TomasTirty" target="_blank" rel="noreferrer"><GitBranch size={17} />GitLab</a>
          <span><MapPin size={17} />{t("Thailand")}</span>
        </div>
      </section>

      <footer>
        <span>THITHADA ISLAM © 2026</span>
        <span>{t("DESIGNED WITH INTENTION")}</span>
        <a href="#top">{t("BACK TO TOP ↑")}</a>
      </footer>

      <div className={`copy-toast ${copied ? "show" : ""}`} role="status">{t("Email copied to clipboard")} <Check size={15} /></div>
    </main>
  );
}
