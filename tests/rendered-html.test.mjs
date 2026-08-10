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
  assert.match(html, /Gen-H: Let’s Move/);
  assert.match(html, /NashGUI/);
  assert.match(html, /Aurum/);
  assert.match(html, /Project-nutrition/);
  assert.match(html, /Autocar/);
  assert.match(html, /repair-report/);
  assert.doesNotMatch(html, /BackTest/);
  assert.doesNotMatch(html, /href="\/projects/);
  assert.doesNotMatch(html, /BEYOND CODE/);
  assert.doesNotMatch(html, /Editable starter content/);
  assert.doesNotMatch(html, /Beyond the screens|Featured case study/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("keeps all seven projects on the single-page portfolio", async () => {
  const [home, imageConfig, entry, vercel] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/project-images.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/main.tsx", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

  assert.equal(home.match(/number: "0[1-7]"/g)?.length, 7);
  const orderedProjects = ["Check PD", "Gen-H: Let’s Move", "NashGUI", "Aurum", "Project-nutrition", "Autocar", "repair-report"];
  let previousProjectIndex = -1;
  for (const title of orderedProjects) {
    const projectIndex = home.indexOf(`title: "${title}"`);
    assert.ok(projectIndex > previousProjectIndex, `${title} should follow the previous project`);
    previousProjectIndex = projectIndex;
  }
  assert.match(home, /projects\.map/);
  assert.match(home, /ProjectGallery projectTitle=\{project\.title\}/);
  assert.doesNotMatch(home, /floating-tag|AI curious|UX minded|07 projects/);
  assert.doesNotMatch(home, /project-metrics|metric-placeholder|metrics:/);
  assert.match(home, /className="work section-shell dark-section" id="work"/);
  assert.doesNotMatch(home, /className="work section-shell dark-section scroll-reveal"/);
  assert.match(imageConfig, /projects\/aurum\/results\.webp/);
  assert.match(imageConfig, /projects\/project-nutrition\/mobile\.webp/);
  assert.match(imageConfig, /projects\/autocar\/detail\.webp/);
  assert.match(imageConfig, /projects\/repair-report\/responsive\.webp/);
  assert.doesNotMatch(`${home}\n${imageConfig}`, /BackTest|backtest-/);
  assert.doesNotMatch(home, /href="\/projects|Explore all projects/);
  assert.doesNotMatch(entry, /ProjectsPage|\/projects/);
  assert.doesNotMatch(vercel, /\/projects/);
  await assert.rejects(access(new URL("../app/projects/page.tsx", import.meta.url)));
  await Promise.all(
    ["check-pd", "gen-h", "nashgui", "aurum", "project-nutrition", "autocar", "repair-report"].map((folder) =>
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
