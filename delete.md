# Removed sections archive

ไฟล์นี้เก็บเนื้อหาที่นำออกจากหน้าเว็บเมื่อวันที่ 8 สิงหาคม 2026 เพื่อให้สามารถนำกลับมาใช้หรือปรับรูปแบบใหม่ได้ภายหลัง โดยเนื้อหาด้านล่างไม่ถูก render บนเว็บไซต์แล้ว

## 1. Profile principles

รายการสั้น 3 ข้อที่เคยอยู่ด้านขวาของส่วน Profile:

```tsx
<div className="principles">
  <span>{t("01 / Think in systems")}</span>
  <span>{t("02 / Design for humans")}</span>
  <span>{t("03 / Ship with intention")}</span>
</div>
```

รูปแบบเดิม:

```css
.principles {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
}

.principles span {
  padding-top: 15px;
  border-top: 1px solid var(--line);
  font: 500 10px var(--font-geist-mono), monospace;
  text-transform: uppercase;
  letter-spacing: .08em;
}
```

## 2. Career brief

ตารางข้อมูล 4 ช่อง: Target roles, Work mode, Availability และ Languages

```tsx
<div className="career-brief" aria-label={t("Career preferences")}>
  <div><Target size={19} /><span>{t("Target roles")}</span><strong>Frontend / Full-stack</strong></div>
  <div><MonitorUp size={19} /><span>{t("Work mode")}</span><strong>{t("Remote / Hybrid")}</strong></div>
  <div><BriefcaseBusiness size={19} /><span>{t("Availability")}</span><strong>{t("Open to discuss")}</strong></div>
  <div><Languages size={19} /><span>{t("Languages")}</span><strong>{t("Thai · English")}</strong></div>
</div>
```

รูปแบบเดิม:

```css
.career-brief {
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.career-brief > div {
  min-height: 150px;
  padding: 24px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px 12px;
  align-content: space-between;
  transition: background .25s ease, color .25s ease;
}

.career-brief > div:hover { background: var(--acid); }
.career-brief svg { color: var(--cobalt); }
.career-brief span {
  align-self: center;
  font: 600 9px var(--font-geist-mono), monospace;
  text-transform: uppercase;
  letter-spacing: .11em;
  color: var(--muted);
}
.career-brief strong {
  grid-column: 1 / -1;
  font-size: 18px;
  letter-spacing: -.035em;
}
```

## 3. Working style

ส่วน Working style ทั้งชุด รวมข้อความ วิธีทำงาน 8 tags และการ์ดภาษา:

```tsx
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
```

รูปแบบเดิม:

```css
.working-style {
  margin-top: 70px;
  display: grid;
  grid-template-columns: .75fr 1.2fr .75fr;
  gap: 40px;
  border-top: 1px solid var(--line);
  padding-top: 42px;
}
.working-style > div:first-child > span {
  font: 650 9px var(--font-geist-mono), monospace;
  letter-spacing: .14em;
  color: var(--cobalt);
}
.working-style h3 { margin: 18px 0 0; font-size: 28px; letter-spacing: -.045em; }
.working-tags { display: flex; flex-wrap: wrap; align-content: flex-start; gap: 9px; }
.working-tags span {
  padding: 10px 13px;
  border: 1px solid var(--line);
  border-radius: 100px;
  font-size: 11px;
}
.language-card {
  background: var(--cobalt);
  color: white;
  padding: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
}
.language-card > div {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid rgba(255,255,255,.25);
  padding-top: 13px;
}
```

## Restoration notes

- หากนำ Career brief หรือ Working style กลับมา ต้องเพิ่ม `Target`, `MonitorUp`, `BriefcaseBusiness` และ `Languages` ใน import จาก `lucide-react`
- Responsive เดิมใช้ Career brief 2 คอลัมน์ที่ tablet และ 1 คอลัมน์ที่ mobile
- Profile ปัจจุบันเปลี่ยนเป็น 2 คอลัมน์หลังนำ Principles ออก จึงต้องปรับ `.about-grid` กลับหากคืนส่วนนี้

## 4. Beyond code

แถบงานอดิเรกที่เคยอยู่ระหว่าง Journey และ Contact ถูกนำออกทั้งชุด:

```tsx
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
```

รูปแบบหลักเดิม:

```css
.beyond-code {
  width: min(var(--frame-max), calc(100% - 48px));
  margin: 0 auto;
  padding: 46px 0;
  display: grid;
  grid-template-columns: .55fr 1.45fr;
  gap: 80px;
  border-top: 1px solid var(--line);
}
.beyond-code-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-left: 1px solid var(--line);
}
.beyond-code-list article {
  min-height: 150px;
  padding: 12px 24px;
  border-right: 1px solid var(--line);
}
```

## 5. Supporting copy

ข้อความประกอบหัวข้อที่ถูกนำออกเพื่อให้แต่ละ section กระชับและมีพื้นที่ว่างมากขึ้น:

```text
Selected work
From digital health assessments to radio telescope operations—building across interfaces, APIs, and data.

Featured case study
A compact story recruiters can scan quickly. Replace the final outcome with validated product data when it becomes available.

Expertise
Choosing the right tools to make ideas useful, maintainable, and ready to grow.
```

## 6. Thai language system

ระบบภาษาไทยถูกนำออกเมื่อวันที่ 10 สิงหาคม 2026 เพื่อให้เว็บไซต์เป็นภาษาอังกฤษอย่างเดียว สิ่งที่นำออกประกอบด้วย:

- ปุ่ม `EN / TH` ใน Navigation ของหน้าแรกและหน้า `/projects`
- Translation dictionary ภาษาไทยใน `app/i18n.tsx`
- React state และ `useLanguage()` สำหรับสลับภาษา
- การจำภาษาด้วย key `thithada-portfolio-language` ใน `localStorage`
- การเปลี่ยนค่า `lang` และชื่อหน้าอัตโนมัติเมื่อเลือกภาษาไทย
- CSS เฉพาะ `.language-toggle` และ `[lang="th"]`

โครงสร้างเดิมของตัวเลือกภาษา:

```tsx
<LanguageToggle language={language} setLanguage={setLanguage} />
```

```tsx
export type Language = "en" | "th";

const STORAGE_KEY = "thithada-portfolio-language";

const t = (english: string) =>
  language === "th" ? thaiTranslations[english] ?? english : english;
```

Translation dictionary ฉบับเต็มยังเรียกคืนได้จากประวัติ Git ของ `app/i18n.tsx` หากต้องการนำระบบสองภาษากลับมาในอนาคต

## 7. Featured case study — Beyond the screens

Section `Beyond the screens. Inside the thinking.` ถูกนำออกจากหน้าแรกทั้งชุด รวมลิงก์ Case study ใน Navigation และระบบ tabs แบบ interactive

ข้อมูลเดิมทั้ง 4 ขั้น:

```text
Problem
Make complex screening feel human.
The experience needed to capture meaningful audio, motion, and touch signals without making a health assessment feel technical or intimidating on a phone.

My role
Turn requirements into a product system.
I translated provided flows and designs into reusable React architecture across registration, settings, five assessments, history, and result journeys.

Challenge
Sensors, state, and mobile interaction.
The work combined browser microphone and motion access, persistent incomplete answers, responsive components, swipe navigation, animations, and testable frontend behavior.

Result
Five modules ready for the next phase.
The frontend assessment system is in place. The next phase is backend development and machine-learning analysis. Add validated user and testing outcomes here later.
```

Case study นี้สามารถนำกลับมาใช้ใน detail page ของ Check PD ภายหลังได้ โดย CSS เดิมใช้พื้น Acid Lime, panel สี Ink, tabs 4 ขั้น และ signal bars แบบเคลื่อนไหว

## 8. Dedicated `/projects` page

หน้า All projects ถูกนำออกเมื่อผู้ใช้เลือกให้เว็บไซต์กลับมาเป็นหน้าเดียว โดยนำองค์ประกอบต่อไปนี้ออก:

- Route `app/projects/page.tsx`
- หน้า Project index พื้น Ink และ Hero “All work. One evolving system.”
- การ์ดรายละเอียดของโปรเจกต์ทั้ง 7 รายการ
- Gallery รูปแบบหลายรูป, thumbnail rail และปุ่ม Previous/Next
- Project descriptions, Tech stack และ image placeholders บนหน้าแยก
- CTA “Let’s build the next one.” และ Footer ของหน้า Projects
- การเลือกหน้าใน `src/main.tsx`
- Vercel rewrite สำหรับ `/projects`
- เมนู “All projects”, ปุ่ม “Explore all projects” และลิงก์จากแถว Project archive

ข้อมูลรายละเอียดที่เคยอยู่บนหน้า `/projects` รวมถึงรายชื่อไฟล์รูปยังเรียกคืนได้จากประวัติ Git ของ `app/projects/page.tsx` ส่วนรูปแบบเดิมเรียกคืนได้จากประวัติของ `app/globals.css`

## 9. Hero floating tags and project metrics

นำป้ายลอยรอบ Hero orbital graphic ออกทั้งหมด 3 รายการ:

- `07 projects`
- `AI curious`
- `UX minded`

นำ Metrics grid ออกจาก project cards ทั้ง 7 รายการ รวม CSS ของ `project-metrics` และ `metric-placeholder` โดยข้อมูลเดิมที่เก็บไว้มีดังนี้:

- Check PD: `05 Assessment modules`, `XX Users or test cases`, `XX% Completion improvement`
- Gen-H: `05+ Core feature systems`, `XX Daily active users`, `XX% Quest completion rate`
- NashGUI: `01 Telescope workflow`, `XX Commands generated`, `XXh Operator time saved`
- Aurum: `XX Strategies tested`, `XX Data points`, `XX% Performance result`
- Project-nutrition: `XX Tracking features`, `XX Nutrition records`, `XX% Goal completion`
- Autocar: `XX Core features`, `XX Data records`, `XX% Process improvement`
- repair-report (renamed to Maintenance UP): `XX Reports handled`, `XX% Time reduced`, `XX Active users`

เหตุผลในการนำออกคือช่วยลด visual noise และไม่แสดงตัวเลข placeholder ที่ยังไม่มีข้อมูลยืนยัน

## Removed project impact bullets and screenshot prompt

นำรายการ impact แบบ 3 ข้อออกจาก project cards ทั้ง 7 รายการ เพื่อรอรายละเอียดจริงจากเจ้าของโปรเจกต์ และนำ badge `Replace project screenshots` ออกเนื่องจากมีรูปจริงใน gallery แล้ว

รายการเดิมที่เก็บไว้สำหรับนำกลับมาใช้ภายหลัง:

- Check PD: `Built five assessment modules using audio, motion, and touch interactions.` / `Created responsive registration, assessment, history, and results journeys.` / `Developed reusable components, persistent forms, animations, and frontend tests.`
- Gen-H: `Delivered quest, badge, notification, Hall of Fame, and leaderboard features.` / `Implemented server logic, database schemas, seeding, progress tracking, and image submissions.` / `Integrated LINE LIFF registration and session flows across a responsive system.`
- NashGUI: `Translated Figma designs into responsive React interfaces.` / `Integrated authenticated FastAPI endpoints and structured frontend state flows.` / `Containerized application services with Docker for consistent environments.`
- Aurum: `Add the backtesting logic you developed.` / `Add a data or performance challenge.` / `Add the result or insight produced.`
- Project-nutrition: `Add the nutrition workflow you implemented.` / `Add an important product or data decision.` / `Add the strongest project result.`
- Autocar: `Add the user or business problem.` / `Add the feature you owned.` / `Add the final outcome or learning.`
- repair-report (renamed to Maintenance UP): `Add the main problem you solved.` / `Add your strongest technical decision.` / `Add a result, lesson, or measurable outcome.`

## Detailed project tech stacks reserved for case studies

หน้าแรกแสดงเพียง 4–6 กลุ่มต่อโปรเจกต์เพื่อให้ recruiter อ่านง่าย รายละเอียดต่อไปนี้เก็บไว้สำหรับหน้า case study ในอนาคต:

- Check PD: React 19, Vite 6, TypeScript, React Router DOM 7, Tailwind CSS 4, clsx, tailwind-merge, path alias `@/*` และ Vite proxy `/api` ไปยัง backend ที่วางแผนเป็น Python/FastAPI; ปัจจุบันยังไม่ยืนยันว่า backend อยู่ในโปรเจกต์นี้
- Gen-H: Next.js 16 App Router, Server Actions, API Routes, TypeScript, React 19, Tailwind CSS 4, LINE LIFF, LINE Messaging API, Prisma, MySQL, AWS S3, AWS EC2 with Node.js 20, PM2 Cluster, Nginx และ GitLab CI/CD
- NashGUI: React 19, TypeScript, React Router 7, Vite 7, Ant Design 6, Tailwind CSS 4, Python, FastAPI, SQLModel, SQLAlchemy, MariaDB, JWT, Argon2, Bun/npm, Docker Compose, Nginx, REST API, CodeMirror, dnd-kit, Lucide React, Day.js, React Hot Toast, Pydantic และ Sentry SDK; ใช้ FastAPI ไม่ใช่ Flask
- Aurum: Next.js, React, TypeScript, Tailwind CSS, Lightweight Charts, Cloudflare Workers, Cloudflare D1 with Drizzle ORM, Cloudflare R2, Dukascopy XAU/USD, Vite และ Vinext
- Project-nutrition: Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React, API Routes, PostgreSQL, Prisma, JWT, bcrypt, iron-session, Cloudinary, Redis, Upstash, ExcelJS, CSV Stringify และ Resend
- Autocar: Next.js 15, React, Tailwind CSS, Node.js, Express, MySQL/TiDB และ Vercel
- Maintenance UP: React, Node.js, Express, MongoDB และ Socket.IO

## Removed project link placeholders

นำข้อความ `Add live demo` และ `Add repository` ออกจาก project cards แล้ว เปลี่ยนเป็นลิงก์จริงแบบมีเงื่อนไข โปรเจกต์ภายในที่ไม่มี repository จะไม่แสดงปุ่มแทนที่จะใช้ placeholder

## Removed broad expertise list

รายการ Expertise เดิมถูกลดให้ตรงกับโปรเจกต์จริงและอ่านง่ายขึ้น โดยเก็บรายการเดิมไว้ดังนี้:

- Frontend: React, Next.js, TypeScript, Vue, Tailwind CSS
- Backend: FastAPI, API Routes, RESTful API, Prisma ORM
- Data & DevOps: PostgreSQL, MySQL, MariaDB, Docker, Git
- Languages & AI: JavaScript, Python, PHP, ChatGPT, Claude, Codex

Contact เดิมใช้ `Frontend · Backend · Full-stack · Remote / Hybrid` และเปลี่ยนเป็น `Frontend · Backend · Full-stack · On-site / Hybrid` ตามรูปแบบงานที่ต้องการ

## Removed project-card arrow

นำ `ArrowUpRight` ที่มุมขวาของ project cards ทั้ง 7 ใบออก พร้อม hover animation ของ `.project-arrow` เพราะตัวการ์ดไม่ได้เป็นลิงก์และมีปุ่ม `Open application` / `View repository` เป็นจุดกดที่ชัดเจนอยู่แล้ว

จาก Expertise นำ `Ant Design · Framer Motion`, `AWS · Cloudflare` และ `Socket.IO` ออก และใช้ `Vue.js` แทนในกลุ่ม Frontend

ภายหลังนำ `AWS · Cloudflare` กลับเข้าสู่กลุ่ม Cloud & Delivery เพราะเป็น platform หลักที่ปรากฏในหลายโปรเจกต์ ส่วน `Ant Design · Framer Motion` และ `Socket.IO` ยังคงไม่แสดงใน Expertise
