import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Thithada Islam — Software Engineer<\/title>/i);
  assert.match(html, /Selected work/);
  assert.match(html, /Projects with/);
  assert.match(html, /real-world signal/);
  assert.match(html, /Check PD/);
  assert.match(html, /King Chulalongkorn Memorial Hospital and the Thai Red Cross Society/);
  assert.match(html, /finger movement, tremor, balance, and voice tests/);
  assert.match(html, /React 19 · TypeScript/);
  assert.match(html, /React Router 7/);
  assert.match(html, /Gen-H: Let’s Move/);
  assert.match(html, /Thailand’s 10 National Health Recommendations/);
  assert.match(html, /Next\.js 16 · TypeScript/);
  assert.match(html, /LINE LIFF · Messaging API/);
  assert.match(html, /AWS S3 · EC2/);
  assert.match(html, /GitLab CI\/CD/);
  assert.match(html, /NashGUI/);
  assert.match(html, /CSV target data/);
  assert.match(html, /tracking or cross-scan modes/);
  assert.match(html, /validated Python scripts for operator review and execution/);
  assert.match(html, /SQLModel · MariaDB/);
  assert.match(html, /JWT · Argon2/);
  assert.doesNotMatch(html, /Flask/);
  assert.match(html, /Aurum/);
  assert.match(html, /Gold trading strategy backtesting/);
  assert.match(html, /historical market data to evaluate returns, risk, and signal accuracy/);
  assert.match(html, /Lightweight Charts/);
  assert.match(html, /D1 · Drizzle ORM/);
  assert.match(html, /Dukascopy XAU\/USD/);
  assert.match(html, /Project-nutrition/);
  assert.match(html, /Next\.js 15/);
  assert.match(html, /Cloudinary/);
  assert.match(html, /JWT Authentication/);
  assert.match(html, /Autocar/);
  assert.match(html, /Maintenance UP/);
  assert.match(html, /campus maintenance platform/);
  assert.match(html, /photo-supported requests/);
  assert.match(html, /href="https:\/\/liff\.line\.me\/2010563749-1UXdw2i4"/);
  assert.match(html, /href="https:\/\/liff\.line\.me\/2010190550-YYZhOdSJ"/);
  assert.match(html, /href="https:\/\/gitlab\.com\/TomasTirty\/backtest"/);
  assert.match(html, /href="https:\/\/backtest-nr73q0bpo-tomas-projects18\.vercel\.app\/"/);
  assert.match(html, /href="https:\/\/project-nutrition-blush\.vercel\.app\/"/);
  assert.match(html, /href="https:\/\/autocar2\.vercel\.app\/"/);
  assert.match(html, /href="https:\/\/github\.com\/thithada\/autocar"/);
  assert.match(html, /href="https:\/\/repair-up\.netlify\.app\/"/);
  assert.match(html, /href="https:\/\/github\.com\/thithada\/repair-report"/);
  assert.match(html, /Open LINE application/);
  assert.match(html, /Open application/);
  assert.match(html, /View repository/);
  assert.doesNotMatch(html, /Add live demo|Add repository/);
  assert.match(html, /Full-stack Developer · Solo project/);
  assert.match(html, /Independent project/);
  assert.doesNotMatch(html, /Add your role · Portfolio draft|Add period|Add visibility/);
  assert.match(html, /Backend &amp; Data/);
  assert.match(html, /Cloud &amp; Delivery/);
  assert.match(html, /AWS · Cloudflare/);
  assert.match(html, /LINE LIFF · Messaging API/);
  assert.match(html, /Vue\.js/);
  assert.match(html, /REST APIs · Server Actions/);
  assert.match(html, /JWT · Session Auth/);
  assert.match(html, /On-site \/ Hybrid/);
  assert.doesNotMatch(html, /Remote \/ Hybrid|Languages &amp; AI|ChatGPT|Claude|Codex/);
  assert.doesNotMatch(html, /BackTest/);
  assert.doesNotMatch(html, /href="\/projects/);
  assert.doesNotMatch(html, /BEYOND CODE/);
  assert.doesNotMatch(html, /Editable starter content/);
  assert.doesNotMatch(html, /Beyond the screens|Featured case study/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("keeps all seven projects on the single-page portfolio", async () => {
  const [home, imageConfig, css, entry, vercel] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/project-images.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../src/main.tsx", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

  assert.equal(home.match(/number: "0[1-7]"/g)?.length, 7);
  const orderedProjects = ["Check PD", "Gen-H: Let’s Move", "NashGUI", "Aurum", "Project-nutrition", "Autocar", "Maintenance UP"];
  let previousProjectIndex = -1;
  for (const title of orderedProjects) {
    const projectIndex = home.indexOf(`title: "${title}"`);
    assert.ok(projectIndex > previousProjectIndex, `${title} should follow the previous project`);
    previousProjectIndex = projectIndex;
  }
  const techLists = [...home.matchAll(/tech: \[([^\]]*)\]/g)];
  assert.equal(techLists.length, 7);
  assert.ok(techLists.every(([, items]) => (items.match(/"[^"]+"/g) ?? []).length <= 6), "each project should show no more than six tech groups");
  assert.match(home, /title: "Check PD"[\s\S]*?tech: \["React 19 · TypeScript", "React Router 7", "LINE LIFF", "Web APIs"\]/);
  const expertiseLists = [...home.matchAll(/label: "[^"]+", items: \[([^\]]*)\]/g)];
  assert.equal(expertiseLists.length, 4);
  assert.ok(expertiseLists.every(([, items]) => {
    const count = (items.match(/"[^"]+"/g) ?? []).length;
    return count >= 3 && count <= 4;
  }), "each expertise group should show three or four focused items");
  const expertiseSource = home.slice(home.indexOf("const skillGroups"), home.indexOf("function SectionLabel"));
  assert.doesNotMatch(expertiseSource, /Ant Design|Framer Motion|Socket\.IO/);
  assert.doesNotMatch(home, /project-arrow/);
  assert.doesNotMatch(home, /Remote \/ Hybrid|Languages & AI/);
  assert.match(home, /title: "NashGUI"[\s\S]*?links: \[\]/);
  assert.match(home, /projects\.map/);
  assert.match(home, /ProjectGallery projectTitle=\{project\.title\}/);
  assert.match(home, /naturalHeight > event\.currentTarget\.naturalWidth \* 1\.1/);
  assert.match(css, /\.replaceable-image\.portrait-frame[^}]*radial-gradient/);
  assert.match(css, /\.replaceable-image\.portrait-frame img\.loaded[^}]*object-fit:contain/);
  assert.doesNotMatch(home, /floating-tag|AI curious|UX minded|07 projects/);
  assert.doesNotMatch(home, /project-metrics|metric-placeholder|metrics:/);
  assert.doesNotMatch(home, /impact:|project\.impact|Replace project screenshots/);
  assert.match(home, /title: "Project-nutrition"[\s\S]*?role: "Full-stack Developer · Team project"[\s\S]*?period: "2025"/);
  assert.match(home, /FFQ responses; the system estimates nutrients, BMR, and TDEE/);
  assert.match(home, /title: "Autocar"[\s\S]*?role: "Full-stack Developer · Team project"[\s\S]*?period: "2024 — 2025"/);
  assert.match(home, /parts inventory, communication, staff assignments, financial reporting, and operational analytics/);
  assert.match(home, /title: "Maintenance UP"[\s\S]*?role: "Full-stack Developer · Team project"[\s\S]*?period: "2024"/);
  assert.match(home, /className="work section-shell dark-section" id="work"/);
  assert.doesNotMatch(home, /className="work section-shell dark-section scroll-reveal"/);
  assert.match(imageConfig, /projects\/aurum\/aurum6\.png/);
  assert.match(imageConfig, /projects\/project-nutrition\/project-nutrition6\.png/);
  assert.match(imageConfig, /projects\/autocar\/autocar5\.png/);
  assert.match(imageConfig, /projects\/maintenance-up\/maintenance-up3\.png/);
  const configuredImagePaths = [...imageConfig.matchAll(/src: "(\/images\/projects\/[^"]+)"/g)].map((match) => match[1]);
  assert.equal(configuredImagePaths.length, 38);
  assert.ok(
    configuredImagePaths.every((imagePath) => {
      const match = imagePath.match(/\/projects\/([^/]+)\/([^/]+)\.png$/);
      return match && match[2] === `${match[1]}${Number.parseInt(match[2].slice(match[1].length), 10)}`;
    }),
    "project image filenames should use the folder name followed by a number",
  );
  await Promise.all(configuredImagePaths.map((imagePath) => access(new URL(`../public${imagePath}`, import.meta.url))));
  assert.doesNotMatch(`${home}\n${imageConfig}`, /title: "BackTest"|projects\/backtest|projects\/repair-report|title: "repair-report"/);
  assert.doesNotMatch(home, /href="\/projects|Explore all projects/);
  assert.doesNotMatch(entry, /ProjectsPage|\/projects/);
  assert.doesNotMatch(vercel, /\/projects/);
  await assert.rejects(access(new URL("../app/projects/page.tsx", import.meta.url)));
  await Promise.all(
    ["check-pd", "gen-h", "nashgui", "aurum", "project-nutrition", "autocar", "maintenance-up"].map((folder) =>
      access(new URL(`../public/images/projects/${folder}/.gitkeep`, import.meta.url)),
    ),
  );
});

test("ships an English-only interface", async () => {
  const [home, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(home, /LanguageToggle|useLanguage|data-language/);
  assert.doesNotMatch(css, /\.language-toggle|\[lang="th"\]/);
  assert.match(layout, /<html lang="en">/);
  assert.match(home, /<h1>[\s\S]*t\("Building digital"\)/);
});

test("protects content and decorative type from viewport clipping", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /body\s*\{[^}]*overflow-x:\s*clip/s);
  assert.match(css, /\.hero\s*\{[^}]*overflow:\s*visible/s);
  assert.match(css, /\.hero-copy\s*\{[^}]*min-width:\s*0/s);
  assert.match(css, /--frame-max:\s*1280px/);
  assert.match(css, /\.hero-copy\s*\{[^}]*padding:[^;}]*var\(--hero-inner\)/s);
  assert.match(css, /\.section-shell\s*\{[^}]*var\(--frame-max\)/s);
  assert.match(css, /\.hero\s*\{\s*grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css, /\.nav-resume\s*\{[^}]*font-size:\s*0/s);
});

test("keeps removed profile sections archived instead of rendered", async () => {
  const [page, archive] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../delete.md", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /className="principles"/);
  assert.doesNotMatch(page, /className="career-brief"/);
  assert.doesNotMatch(page, /className="working-style"/);
  assert.doesNotMatch(page, /className="beyond-code/);
  assert.doesNotMatch(page, /Choosing the right tools to make ideas useful/);
  assert.doesNotMatch(page, /From digital health assessments to radio telescope operations/);
  assert.doesNotMatch(page, /A compact story recruiters can scan quickly/);
  assert.doesNotMatch(page, /id="case-study"|studySteps/);
  assert.match(page, /className="project-card/);
  assert.match(archive, /01 \/ Think in systems/);
  assert.match(archive, /Target roles/);
  assert.match(archive, /How I contribute beyond code/);
});
