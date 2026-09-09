import type { Role, SkillGroup } from "@/lib/types";

export const roles: Role[] = [
  {
    id: "toward-edu",
    title: "Elementary Mathematics Coordinator",
    organisation: "Toward Edu",
    location: "Remote",
    period: "April 2024",
    summary:
      "Coordinated tutor schedules and organized instructional sessions for elementary mathematics courses.",
    duties: [
      "Coordinated tutor schedules across the academic term",
      "Prepared lesson materials and practice problems",
      "Developed structured coursework plans",
      "Organized instructional resources",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { id: "languages", label: "Programming languages", items: ["Python", "R", "Java"] },
  {
    id: "ml",
    label: "Machine learning",
    items: [
      "KNN classification",
      "Linear regression",
      "Clustering",
      "Cross-validation",
      "Model validation",
    ],
  },
  { id: "tools", label: "Developer tools", items: ["Git", "GitHub", "Jupyter", "VS Code"] },
];
