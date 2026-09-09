export interface Profile {
  name: string;
  headline: string;
  intro: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  githubHandle: string;
  instagramHandle: string;
  linkedin: string;
}

export interface FigureSlot {
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  /** Short discipline label shown beside the title. */
  kind: string;
  stack: string[];
  summary: string;
  detail: string;
  highlights: string[];
  /** Placeholders for figures that do not exist yet. */
  figureSlots?: FigureSlot[];
  figureNote?: string;
  /** Null renders a "coming soon" pill instead of a broken link. */
  repoUrl: string | null;
}

export interface ResearchInterest {
  id: string;
  title: string;
  blurb: string;
}

export interface Role {
  id: string;
  title: string;
  organisation: string;
  location: string;
  period: string;
  summary: string;
  duties: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
  gpaScale: string;
  award: {
    name: string;
    body: string;
    note: string;
  };
}

export interface NavItem {
  href: string;
  label: string;
  shortLabel: string;
}
