# Project image replacement guide

Each project supports a variable number of images. Featured homepage images live in `app/page.tsx`; the full `/projects` galleries live in `app/projects/page.tsx`. Add or remove array items, then drop matching WebP files into this folder. The homepage keeps four thumbnails visible on desktop and scrolls when more are present; project-index cards use a horizontal thumbnail rail.

## Check PD

- `check-pd-01.webp` — cover / strongest overview
- `check-pd-02.webp` — assessment interaction
- `check-pd-03.webp` — results or history
- `check-pd-04.webp` — mobile flow or detail
- `check-pd-05.webp` and onward — add as many supporting screens as the story needs

## Gen-H: Let's Move

- `gen-h-01.webp` — cover / strongest overview
- `gen-h-02.webp` — quest experience
- `gen-h-03.webp` — badges or progress
- `gen-h-04.webp` — leaderboard or Hall of Fame
- `gen-h-05.webp` and onward — add as many supporting screens as the story needs

## NashGUI

- `nashgui-01.webp` — cover / strongest overview
- `nashgui-02.webp` — command generation
- `nashgui-03.webp` — template management
- `nashgui-04.webp` — end-to-end workflow
- `nashgui-05.webp` and onward — add as many supporting screens as the story needs

## Additional projects

- `repair-report-01.webp` through `repair-report-05.webp`
- `autocar-01.webp` through `autocar-03.webp`
- `project-nutrition-01.webp` through `project-nutrition-06.webp`
- `backtest-01.webp` through `backtest-02.webp`

These counts are starter configurations, not limits. Update each project's `images` array whenever you add or remove screenshots.

Recommended size: 1600 × 1000 px. Keep a consistent crop within each project and aim for under 500 KB per image. There is no fixed image count, but every image should add useful context rather than repeat the same screen.

The homepage intentionally uses the orbital engineering graphic instead of a profile photo.
