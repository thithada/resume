"use client";

/* Plain anchors keep this route compatible with both vinext and the Vite/Vercel entry. */
/* eslint-disable @next/next/no-html-link-for-pages */

import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ImageIcon,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle, useLanguage } from "../i18n";

type ProjectImage = { src: string; label: string };

type Project = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  visibility: string;
  description: string;
  tech: string[];
  images: ProjectImage[];
};

const allProjects: Project[] = [
  {
    number: "01",
    slug: "check-pd",
    title: "Check PD",
    subtitle: "Digital Parkinson’s risk screening",
    category: "Digital health · Frontend",
    visibility: "In progress",
    description: "A mobile-first assessment experience combining audio, motion sensors, touch interactions, progress history, and results into one approachable flow.",
    tech: ["React", "TypeScript", "LINE LIFF", "Web APIs"],
    images: [
      { src: "/images/check-pd-01.webp", label: "Cover" },
      { src: "/images/check-pd-02.webp", label: "Assessment" },
      { src: "/images/check-pd-03.webp", label: "Results" },
      { src: "/images/check-pd-04.webp", label: "Mobile flow" },
    ],
  },
  {
    number: "02",
    slug: "gen-h",
    title: "Gen-H: Let’s Move",
    subtitle: "Gamified healthy habit platform",
    category: "Product · Full-stack",
    visibility: "Live product",
    description: "A habit-building platform shaped around daily quests, progress, badges, notifications, and an XP-based leaderboard.",
    tech: ["Next.js", "React", "Prisma", "PostgreSQL", "LINE LIFF"],
    images: [
      { src: "/images/gen-h-01.webp", label: "Cover" },
      { src: "/images/gen-h-02.webp", label: "Quests" },
      { src: "/images/gen-h-03.webp", label: "Badges" },
      { src: "/images/gen-h-04.webp", label: "Leaderboard" },
    ],
  },
  {
    number: "03",
    slug: "nashgui",
    title: "NashGUI",
    subtitle: "Radio telescope command management",
    category: "Engineering tool · Full-stack",
    visibility: "Completed",
    description: "A technical web application for generating and managing command sets used to operate radio telescope equipment.",
    tech: ["React", "FastAPI", "MariaDB", "Docker"],
    images: [
      { src: "/images/nashgui-01.webp", label: "Cover" },
      { src: "/images/nashgui-02.webp", label: "Commands" },
      { src: "/images/nashgui-03.webp", label: "Templates" },
      { src: "/images/nashgui-04.webp", label: "Workflow" },
    ],
  },
  {
    number: "04",
    slug: "repair-report",
    title: "repair-report",
    subtitle: "Project details ready to complete",
    category: "Repository project",
    visibility: "Public",
    description: "Add the problem, your role, key technical decisions, and a measurable result for this project.",
    tech: ["Add stack", "Add role", "Add outcome"],
    images: [
      { src: "/images/repair-report-01.webp", label: "Cover" },
      { src: "/images/repair-report-02.webp", label: "Flow" },
      { src: "/images/repair-report-03.webp", label: "Dashboard" },
      { src: "/images/repair-report-04.webp", label: "Detail" },
      { src: "/images/repair-report-05.webp", label: "Responsive" },
    ],
  },
  {
    number: "05",
    slug: "autocar",
    title: "autocar",
    subtitle: "Project details ready to complete",
    category: "Repository project",
    visibility: "Public",
    description: "Add the project context, what you built, the technology used, and the strongest outcome here.",
    tech: ["Add stack", "Add role", "Add outcome"],
    images: [
      { src: "/images/autocar-01.webp", label: "Cover" },
      { src: "/images/autocar-02.webp", label: "Core flow" },
      { src: "/images/autocar-03.webp", label: "Detail" },
    ],
  },
  {
    number: "06",
    slug: "project-nutrition",
    title: "Project-nutrition",
    subtitle: "Project details ready to complete",
    category: "Repository project",
    visibility: "Private",
    description: "Add the nutrition problem being solved, your responsibilities, implementation choices, and result.",
    tech: ["Add stack", "Add role", "Add outcome"],
    images: [
      { src: "/images/project-nutrition-01.webp", label: "Cover" },
      { src: "/images/project-nutrition-02.webp", label: "Onboarding" },
      { src: "/images/project-nutrition-03.webp", label: "Dashboard" },
      { src: "/images/project-nutrition-04.webp", label: "Tracking" },
      { src: "/images/project-nutrition-05.webp", label: "Insights" },
      { src: "/images/project-nutrition-06.webp", label: "Mobile" },
      { src: "/images/project-nutrition-06.webp", label: "Mobile" },
      { src: "/images/project-nutrition-06.webp", label: "Mobile" },
      { src: "/images/project-nutrition-06.webp", label: "Mobile" },
    ],
  },
  {
    number: "07",
    slug: "backtest",
    title: "BackTest",
    subtitle: "Project details ready to complete",
    category: "Repository project",
    visibility: "Add visibility",
    description: "Add the strategy or system being tested, the data flow, your implementation, and the result.",
    tech: ["Add stack", "Add role", "Add outcome"],
    images: [
      { src: "/images/backtest-01.webp", label: "Cover" },
      { src: "/images/backtest-02.webp", label: "Results" },
    ],
  },
];

function ReplaceableProjectImage({
  image,
  title,
  compact = false,
  t,
}: {
  image: ProjectImage;
  title: string;
  compact?: boolean;
  t: (text: string) => string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`projects-image ${compact ? "compact" : ""}`}>
      <div className="image-grid" aria-hidden="true" />
      <div className="projects-image-placeholder">
        <ImageIcon size={compact ? 18 : 30} />
        <strong>{compact ? t(image.label) : `${title} / ${t(image.label)}`}</strong>
        {!compact && <small>{image.src}</small>}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={loaded ? "loaded" : ""}
        src={image.src}
        alt={compact ? "" : `${title} — ${t(image.label)}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      {!compact && <span className="replace-tag"><Plus size={12} /> {t("Replace image")}</span>}
    </div>
  );
}

function ProjectIndexCard({ project, t }: { project: Project; t: (text: string) => string }) {
  const [activeImage, setActiveImage] = useState(0);
  const count = project.images.length;
  const formatCount = (value: number) => String(value).padStart(2, "0");
  const previous = () => setActiveImage((current) => (current - 1 + count) % count);
  const next = () => setActiveImage((current) => (current + 1) % count);
  const currentImage = project.images[activeImage] ?? project.images[0];

  return (
    <article className="projects-index-card" id={project.slug}>
      <div className="projects-card-topline">
        <span>{project.number} / 07</span>
        <span>{t(project.visibility)}</span>
      </div>

      <div className="projects-card-gallery">
        <ReplaceableProjectImage image={currentImage} title={project.title} t={t} />
        <div className="projects-card-controls">
          <span>{formatCount(activeImage + 1)} / {formatCount(count)}</span>
          <button type="button" onClick={previous} aria-label={`${t("Previous")} ${project.title}`}><ChevronLeft size={15} /></button>
          <button type="button" onClick={next} aria-label={`${t("Next")} ${project.title}`}><ChevronRight size={15} /></button>
        </div>
      </div>

      <div className="projects-card-thumbnails" aria-label={`${project.title} ${t("image gallery")}`}>
        {project.images.map((image, index) => (
          <button
            className={activeImage === index ? "active" : ""}
            key={image.src}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`${t("Show")} ${project.title} ${t(image.label)}`}
            aria-pressed={activeImage === index}
          >
            <ReplaceableProjectImage image={image} title={project.title} compact t={t} />
          </button>
        ))}
      </div>

      <div className="projects-card-copy">
        <span>{t(project.category)}</span>
        <h2>{project.title}</h2>
        <h3>{t(project.subtitle)}</h3>
        <p>{t(project.description)}</p>
        <div className="projects-card-tech">
          {project.tech.map((item) => <span key={item}>{t(item)}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const { language, setLanguage, t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorAura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = language === "th" ? "โปรเจกต์ทั้งหมด — Thithada Islam" : "All Projects — Thithada Islam";
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

  return (
    <main className="projects-page" data-language={language}>
      <div className="cursor-aura" ref={cursorAura} aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <nav className="projects-page-nav" aria-label={t("Projects navigation")}>
        <a className="monogram" href="/" aria-label={t("Back to homepage")}>TI<span>.</span></a>
        <a href="/"><ArrowLeft size={15} /> {t("Back home")}</a>
        <div className="projects-nav-actions">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <a href="/resume_thithada.pdf" download>{t("Résumé")} <Download size={15} /></a>
        </div>
      </nav>

      <header className="projects-index-hero" id="top">
        <div className="projects-hero-label"><Code2 size={15} /> {t("PROJECT INDEX / 2026")}</div>
        <h1>{t("All work.")}<br /><em>{t("One evolving system.")}</em></h1>
        <div className="projects-hero-bottom">
          <p>{t("Selected products, engineering tools, and experiments—each with room for a flexible visual story rather than a fixed screenshot count.")}</p>
          <div>
            <span><strong>07</strong>{t("Projects")}</span>
            <span><strong>03</strong>{t("Featured")}</span>
            <span><strong>04</strong>{t("To document")}</span>
          </div>
        </div>
      </header>

      <section className="projects-index-grid" aria-label={t("All projects")}>
        {allProjects.map((project) => <ProjectIndexCard project={project} t={t} key={project.slug} />)}
      </section>

      <section className="projects-page-cta">
        <span>{t("HAVE A PROJECT IN MIND?")}</span>
        <a href="mailto:thithadatomas@gmail.com">{t("Let’s build the next one.")}<ArrowUpRight /></a>
      </section>

      <footer className="projects-page-footer">
        <span>THITHADA ISLAM © 2026</span>
        <a href="/">{t("HOME")}</a>
        <a href="#top">{t("BACK TO TOP ↑")}</a>
      </footer>
    </main>
  );
}
