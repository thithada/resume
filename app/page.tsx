"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Download,
  ExternalLink,
  GitBranch,
  ImageIcon,
  Mail,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projectImages } from "./project-images";

const t = (text: string) => text;

const projects = [
  {
    number: "01",
    title: "Check PD",
    subtitle: "Digital Parkinson’s risk screening",
    role: "Software Developer · Bon8 Internship",
    period: "2026 — Present",
    status: "In progress",
    images: projectImages["check-pd"],
    description: "A mobile-first health assessment experience that turns complex sensor interactions into an approachable flow.",
    tech: ["React", "TypeScript", "LINE LIFF", "Web APIs"],
  },
  {
    number: "02",
    title: "Gen-H: Let’s Move",
    subtitle: "Gamified healthy habit platform",
    role: "Software Developer · Bon8 Internship",
    period: "2026 — Present",
    status: "Live product",
    images: projectImages["gen-h"],
    description: "A gamified platform that encourages healthy habits through daily quests, progress tracking, badges, and competitive leaderboards.",
    tech: ["Next.js", "React", "Prisma", "PostgreSQL", "LINE LIFF"],
  },
  {
    number: "03",
    title: "NashGUI",
    subtitle: "Radio telescope command management",
    role: "Software Engineer · NARIT Internship",
    period: "2025 — 2026",
    status: "Completed",
    images: projectImages.nashgui,
    description: "A web application for generating and managing command sets used to control radio telescope equipment.",
    tech: ["React", "FastAPI", "MariaDB", "Docker"],
  },
  {
    number: "04",
    title: "Aurum",
    subtitle: "Strategy backtesting system · Details to complete",
    role: "Add your role · Portfolio draft",
    period: "Add period",
    status: "Add visibility",
    images: projectImages.aurum,
    description: "Replace this draft with the strategy being tested, the data pipeline, and how users interpret the results.",
    tech: ["Add language", "Add data source", "Add framework"],
  },
  {
    number: "05",
    title: "Project-nutrition",
    subtitle: "Nutrition tracking product · School team project",
    role: "Full-stack Developer · Team project",
    period: "2025",
    status: "Private",
    images: projectImages["project-nutrition"],
    description: "Replace this draft with the nutrition problem, the target users, and the experience or system you designed.",
    tech: ["Add stack", "Add database", "Add integration"],
  },
  {
    number: "06",
    title: "Autocar",
    subtitle: "Automotive project · School team project",
    role: "Full-stack Developer · Team project",
    period: "2024 — 2025",
    status: "Public",
    images: projectImages.autocar,
    description: "Replace this draft with the project context, the automotive workflow, and the part of the product you built.",
    tech: ["Add stack", "Add API", "Add deployment"],
  },
  {
    number: "07",
    title: "repair-report",
    subtitle: "Repair reporting workflow · School team project",
    role: "Full-stack Developer · Team project",
    period: "2024",
    status: "Public",
    images: projectImages["repair-report"],
    description: "Replace this draft with the repair problem, the users involved, and how your solution improves the reporting process.",
    tech: ["Add stack", "Add database", "Add deployment"],
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

function ReplaceableImage({ src, alt, label, size }: { src: string; alt: string; label: string; size: string }) {
  const [loaded, setLoaded] = useState(false);
  const [portrait, setPortrait] = useState(false);

  return (
    <div className={`replaceable-image ${portrait ? "portrait-frame" : ""}`}>
      <div className="image-grid" aria-hidden="true" />
      <div className="image-placeholder">
        <ImageIcon size={32} />
        <strong>{label}</strong>
        <span>{size}</span>
        <small>{src}</small>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={loaded ? "loaded" : ""}
        src={src}
        alt={alt}
        onLoad={(event) => {
          setLoaded(true);
          setPortrait(event.currentTarget.naturalHeight > event.currentTarget.naturalWidth * 1.1);
        }}
        onError={() => {
          setLoaded(false);
          setPortrait(false);
        }}
      />
      <span className="replace-tag"><Plus size={12} /> Replace image</span>
    </div>
  );
}

function ProjectGallery({ projectTitle, images }: { projectTitle: string; images: Array<{ src: string; label: string }> }) {
  const [activeImage, setActiveImage] = useState(0);
  const count = images.length;
  const currentImage = images[activeImage] ?? images[0];
  const formatCount = (value: number) => String(value).padStart(2, "0");

  if (!currentImage) return null;

  return (
    <div className="project-gallery">
      <div className="gallery-main">
        <ReplaceableImage src={currentImage.src} alt={`${projectTitle} — ${currentImage.label}`} label={`${projectTitle.toUpperCase()} / ${currentImage.label.toUpperCase()}`} size="1600 × 1000 px" />
        <div className="gallery-controls">
          <span>{formatCount(activeImage + 1)} / {formatCount(count)}</span>
          <div>
            <button type="button" onClick={() => setActiveImage((current) => (current - 1 + count) % count)} aria-label={`Previous ${projectTitle}`}><ChevronLeft size={16} /></button>
            <button type="button" onClick={() => setActiveImage((current) => (current + 1) % count)} aria-label={`Next ${projectTitle}`}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
      <div className="gallery-thumbnails" aria-label={`${projectTitle} image gallery`}>
        {images.map((image, index) => (
          <button className={activeImage === index ? "active" : ""} key={image.src} type="button" onClick={() => setActiveImage(index)} aria-label={`Show ${projectTitle} ${image.label}`} aria-pressed={activeImage === index}>
            <ReplaceableImage src={image.src} alt="" label={formatCount(index + 1)} size={image.label} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const cursorAura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Thithada Islam — Software Engineer";
  }, []);

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

      <nav className="nav-shell" aria-label={t("Main navigation")}>
        <a className="monogram" href="#top" aria-label={t("Back to top")}>TI<span>.</span></a>
        <div className="nav-links">
          <a href="#work">{t("Work")}</a>
          <a href="#expertise">{t("Expertise")}</a>
          <a href="#journey">{t("Journey")}</a>
        </div>
        <div className="nav-actions">
          <a className="nav-resume" href="/resume_thithada.pdf" download>
            {t("Resume")} <Download size={15} />
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
            <strong>PRODUCT ×<br />ENGINEERING</strong>
            <small>React · TypeScript · AI</small>
          </div>
        </div>

        <div className="hero-metrics">
          <div><strong>3.46</strong><span>GPA</span></div>
          <div><strong>07</strong><span>{t("Projects")}</span></div>
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
        </div>
      </section>

      <section className="work section-shell dark-section" id="work">
        <SectionLabel number="02">{t("Selected work")}</SectionLabel>
        <div className="work-heading">
          <h2>{t("Projects with")}<br /><em>{t("real-world signal.")}</em></h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card scroll-reveal" data-reveal key={project.number}>
              <div className="project-topline">
                <span>{project.number} / 07</span>
                <span className="project-status"><i />{t(project.status)}</span>
              </div>

              <ProjectGallery projectTitle={project.title} images={project.images} />

              <div className="project-title-row">
                <div>
                  <h3>{project.title}</h3>
                  <p>{t(project.subtitle)}</p>
                </div>
                <ArrowUpRight className="project-arrow" size={28} aria-hidden="true" />
              </div>
              <div className="project-meta">
                <span>{t(project.role)}</span>
                <span>{t(project.period)}</span>
              </div>

              <p className="project-description">{t(project.description)}</p>
              <div className="project-links" aria-label={`${project.title} ${t("links")}`}>
                <span><ExternalLink size={14} /> {t("Add live demo")}</span>
                <span><Code2 size={14} /> {t("Add repository")}</span>
              </div>
              <div className="tech-list">
                {project.tech.map((tech) => <span key={tech}>{t(tech)}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise section-shell scroll-reveal" id="expertise" data-reveal>
        <SectionLabel number="03">{t("Expertise")}</SectionLabel>
        <div className="expertise-heading">
          <h2>{t("A versatile stack.")}<br /><em>{t("One clear purpose.")}</em></h2>
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
      </section>

      <section className="journey section-shell scroll-reveal" id="journey" data-reveal>
        <SectionLabel number="04">{t("Journey")}</SectionLabel>
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
