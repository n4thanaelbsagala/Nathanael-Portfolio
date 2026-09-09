import type { ResearchInterest } from "@/lib/types";

export const researchIntro =
  "These are the areas I\u2019m reading about and building projects around. I haven\u2019t held a research position yet \u2014 I\u2019m looking for one.";

export const researchInterests: ResearchInterest[] = [
  {
    id: "ai",
    title: "Artificial intelligence",
    blurb: "How systems represent knowledge and make decisions under uncertainty.",
  },
  {
    id: "ml",
    title: "Machine learning",
    blurb: "Classification, model selection, and validation on real, messy datasets.",
  },
  {
    id: "nlp",
    title: "Natural language processing",
    blurb: "Getting computational structure out of ordinary human language.",
  },
  {
    id: "hai",
    title: "Human\u2013AI collaboration",
    blurb: "How people and models divide work, and where each one is trustworthy.",
  },
  {
    id: "dds",
    title: "Data-driven systems",
    blurb: "Software where the behaviour follows from data rather than fixed rules.",
  },
];
