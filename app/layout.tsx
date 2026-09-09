import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Newsreader is a variable font — leaving `weight` unset serves the whole axis.
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nathanael Sagala — Computer Science + Physics, UBC",
  description:
    "Nathanael Sagala is a Computer Science and Physics undergraduate at the University of British Columbia, interested in artificial intelligence, machine learning, natural language processing, and data-driven systems.",
  authors: [{ name: "Nathanael Sagala" }],
  keywords: [
    "Nathanael Sagala",
    "UBC",
    "Computer Science",
    "Physics",
    "machine learning",
    "undergraduate research",
  ],
  openGraph: {
    title: "Nathanael Sagala — Computer Science + Physics, UBC",
    description:
      "Undergraduate portfolio: machine learning, data analysis, and software development.",
    type: "profile",
    locale: "en_CA",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#e7e9e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
