import type { Education, NavItem, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Nathanael Sagala",
  headline:
    "Computer Science + Physics @ UBC \u2014 artificial intelligence, machine learning, and research",
  intro:
    "I\u2019m a Computer Science and Physics undergraduate at the University of British Columbia interested in artificial intelligence, machine learning, natural language processing, and data-driven systems.",
  location: "Vancouver, British Columbia",
  email: "nsagala@student.ubc.ca",
  phone: "+1 604 358 1475",
  phoneHref: "tel:+16043581475",
  github: "https://github.com/Nathanael-Sagala",
  githubHandle: "Nathanael-Sagala",
  instagramHandle: "@nathansagala_",
  linkedin: null,
};

export const about: string[] = [
  "Hi my name is Nathanael Sagala. I am a Computer Science and Physics undergraduate at the University of British Columbia. I am interested in applying computational and mathematical approaches to problems in artificial intelligence and machine learning.",
  "my current interest includes machine learning, data analysis, software development, and object-oriented programming. My particular interest is in exploring AI, human\u2013AI collaboration, and data-driven systems through research and practical projects.",
];

export const education: Education = {
  institution: "University of British Columbia",
  location: "Vancouver, BC",
  degree: "B.Sc. Combined Computer Science + Physics",
  period: "September 2025 \u2013 May 2029",
  gpa: "3.78",
  gpaScale: "4.00",
  award: {
    name: "Beasiswa Indonesia Maju (BIM), Batch 4",
    body: "Indonesian Government Scholarship",
    note: "Full undergraduate award",
  },
};

export const navItems: NavItem[] = [
  { href: "#about", label: "About", shortLabel: "About" },
  { href: "#research", label: "Research interests", shortLabel: "Research" },
  { href: "#projects", label: "Projects", shortLabel: "Projects" },
  { href: "#experience", label: "Experience", shortLabel: "Experience" },
  { href: "#skills", label: "Technical skills", shortLabel: "Skills" },
  { href: "#education", label: "Education", shortLabel: "Education" },
  { href: "#connect", label: "Connect", shortLabel: "Connect" },
  { href: "#contact", label: "Contact", shortLabel: "Contact" },
];
