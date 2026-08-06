import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /Project archive/);
  assert.match(html, /repair-report/);
  assert.match(html, /autocar/);
  assert.match(html, /Project-nutrition/);
  assert.match(html, /BackTest/);
  assert.match(html, /BEYOND CODE/);
  assert.match(html, /Editable starter content/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("server-renders the dedicated projects route", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /PROJECT INDEX \/ 2026/);
  assert.match(html, /All work\./);
  assert.match(html, /repair-report/);
  assert.match(html, /autocar/);
  assert.match(html, /Project-nutrition/);
  assert.match(html, /BackTest/);
  assert.match(html, /projects-card-thumbnails/);
});

test("keeps project galleries variable-length and responsive", async () => {
  const [page, projectsPage, css, imageGuide] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/images/README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /images\.map\(\(image, index\)/);
  assert.match(projectsPage, /project\.images\.map\(\(image, index\)/);
  assert.match(projectsPage, /repair-report-05\.webp/);
  assert.match(projectsPage, /project-nutrition-06\.webp/);
  assert.match(page, /padStart\(2, "0"\)/);
  assert.match(css, /\.gallery-thumbnails[^}]*overflow-y:auto/);
  assert.match(css, /\.gallery-thumbnails[^}]*flex-direction:row[^}]*overflow-x:auto/);
  assert.match(imageGuide, /supports a variable number of images/i);
});
