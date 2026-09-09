import type { Project } from "@/lib/types";

/**
 * Add a project by appending an object to this array.
 * Set `repoUrl` once a repository exists; leave it null until then.
 */
export const projects: Project[] = [
  {
    id: "march-madness",
    title: "NCAA Women\u2019s Basketball: March Madness Prediction",
    kind: "Machine learning \u00b7 R",
    stack: ["R", "Machine Learning", "Data Analysis"],
    summary:
      "Developed a K-nearest neighbors (KNN) classification model to predict NCAA Women\u2019s March Madness team outcomes using seed rank, conference win percentage, and total win percentage as predictor variables.",
    detail:
      "Applied 5-fold cross-validation to determine the optimal number of neighbors and systematically evaluated models across k = 1\u201320. Performed data analysis and model validation to evaluate the predictive effectiveness of team performance and seeding characteristics.",
    highlights: [
      "K-nearest neighbors classification",
      "5-fold cross-validation",
      "Model selection",
      "Model validation",
      "Evaluation across k = 1\u201320",
      "Predictive modelling",
    ],
    figureSlots: [
      { title: "Dataset overview", caption: "Predictor distributions" },
      { title: "Model performance", caption: "Accuracy across folds" },
      { title: "K-value comparison", caption: "k = 1 through 20" },
      { title: "Confusion matrix", caption: "Classification breakdown" },
    ],
    figureNote: "Figures from the analysis will be added here.",
    repoUrl: "https://github.com/n4thanaelbsagala/NCAA_WomenBasketBall_WinnerPrediction",
  },
  {
    id: "photoalbum",
    title: "PhotoAlbum App",
    kind: "Software design \u00b7 Java",
    stack: ["Java", "Git", "GitHub", "Object-Oriented Programming", "JSON"],
    summary:
      "Developed an object-oriented digital photo album application for organizing and managing photo collections.",
    detail:
      "Designed classes and relationships to represent photos, albums, and the overall photo library. Implemented JSON-based data persistence, enabling application data to be saved and restored between sessions. Developed unit tests to verify application functionality and persistence behavior.",
    highlights: [
      "Object-oriented software design",
      "Class relationships",
      "JSON-based data persistence",
      "Unit testing",
      "Git/GitHub version control",
    ],
    repoUrl: "https://github.com/n4thanaelbsagala/PhotoLibraryApp",
  },
];
