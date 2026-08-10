# Project image folders

Place each screenshot inside its matching folder under `public/images/projects/`. The website already points to the filenames below. Missing files show the branded placeholder and the exact expected path.

```text
projects/
├── check-pd/
│   ├── cover.webp
│   ├── assessment.webp
│   ├── results.webp
│   └── mobile-flow.webp
├── gen-h/
│   ├── cover.webp
│   ├── quests.webp
│   ├── badges.webp
│   └── leaderboard.webp
├── nashgui/
│   ├── cover.webp
│   ├── commands.webp
│   ├── templates.webp
│   └── workflow.webp
├── aurum/
│   ├── cover.webp
│   └── results.webp
├── project-nutrition/
│   ├── cover.webp
│   ├── onboarding.webp
│   ├── dashboard.webp
│   ├── tracking.webp
│   ├── insights.webp
│   └── mobile.webp
├── autocar/
│   ├── cover.webp
│   ├── core-flow.webp
│   └── detail.webp
└── repair-report/
    ├── cover.webp
    ├── report-flow.webp
    ├── dashboard.webp
    ├── detail.webp
    └── responsive.webp
```

You may use a different filename or add more images. Update only the matching list in `app/project-images.ts`; the gallery automatically supports a variable number of files.

Recommended format: WebP, 1600 × 1000 px, ideally under 500 KB per image. Keep a consistent crop within each project and avoid screenshots containing real personal or health data.

The `.gitkeep` files only preserve empty folders in Git and can remain after adding images.
