export type ProjectImage = {
  src: string;
  label: string;
};

export const projectImages: Record<string, ProjectImage[]> = {
  "check-pd": [
    { src: "/images/projects/check-pd/cover.webp", label: "Cover" },
    { src: "/images/projects/check-pd/assessment.webp", label: "Assessment" },
    { src: "/images/projects/check-pd/results.webp", label: "Results" },
    { src: "/images/projects/check-pd/mobile-flow.webp", label: "Mobile flow" },
  ],
  "gen-h": [
    { src: "/images/projects/gen-h/cover.webp", label: "Cover" },
    { src: "/images/projects/gen-h/quests.webp", label: "Quests" },
    { src: "/images/projects/gen-h/badges.webp", label: "Badges" },
    { src: "/images/projects/gen-h/leaderboard.webp", label: "Leaderboard" },
  ],
  nashgui: [
    { src: "/images/projects/nashgui/cover.webp", label: "Cover" },
    { src: "/images/projects/nashgui/commands.webp", label: "Commands" },
    { src: "/images/projects/nashgui/templates.webp", label: "Templates" },
    { src: "/images/projects/nashgui/workflow.webp", label: "Workflow" },
  ],
  aurum: [
    { src: "/images/projects/aurum/cover.webp", label: "Cover" },
    { src: "/images/projects/aurum/results.webp", label: "Results" },
  ],
  "project-nutrition": [
    { src: "/images/projects/project-nutrition/cover.webp", label: "Cover" },
    { src: "/images/projects/project-nutrition/onboarding.webp", label: "Onboarding" },
    { src: "/images/projects/project-nutrition/dashboard.webp", label: "Dashboard" },
    { src: "/images/projects/project-nutrition/tracking.webp", label: "Tracking" },
    { src: "/images/projects/project-nutrition/insights.webp", label: "Insights" },
    { src: "/images/projects/project-nutrition/mobile.webp", label: "Mobile" },
  ],
  autocar: [
    { src: "/images/projects/autocar/cover.webp", label: "Cover" },
    { src: "/images/projects/autocar/core-flow.webp", label: "Core flow" },
    { src: "/images/projects/autocar/detail.webp", label: "Detail" },
  ],
  "repair-report": [
    { src: "/images/projects/repair-report/cover.webp", label: "Cover" },
    { src: "/images/projects/repair-report/report-flow.webp", label: "Report flow" },
    { src: "/images/projects/repair-report/dashboard.webp", label: "Dashboard" },
    { src: "/images/projects/repair-report/detail.webp", label: "Detail" },
    { src: "/images/projects/repair-report/responsive.webp", label: "Responsive" },
  ],
};
