import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
  focusable: "false" as const,
});

export function GitHubIcon({ size = 19, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" {...rest}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 19, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" {...rest}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 19, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.7} {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon({ size = 17, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.7} {...rest}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function CopyIcon({ size = 14, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

export function ChevronIcon({ size = 13, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={2.2} {...rest}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

/** Research-interest icons, keyed by interest id. */
export const researchIcons: Record<string, (props: IconProps) => JSX.Element> = {
  ai: ({ size = 26, ...rest }: IconProps) => (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.5} {...rest}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="4" r="1.8" />
      <circle cx="19" cy="16" r="1.8" />
      <circle cx="5" cy="16" r="1.8" />
      <path d="M12 6v3M14.5 13.6l3 1.6M9.5 13.6l-3 1.6" />
    </svg>
  ),
  ml: ({ size = 26, ...rest }: IconProps) => (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.5} {...rest}>
      <path d="M3 19V5" />
      <path d="M3 19h18" />
      <path d="M6.5 15.5 11 10l3.5 3L20 6" />
      <circle cx="11" cy="10" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  nlp: ({ size = 26, ...rest }: IconProps) => (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.5} {...rest}>
      <path d="M4 5h16M4 10h11M4 15h7" />
      <path d="M14.5 19.5 18 16l3.5 3.5" />
    </svg>
  ),
  hai: ({ size = 26, ...rest }: IconProps) => (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.5} {...rest}>
      <circle cx="8" cy="8" r="3" />
      <rect x="14" y="5" width="6" height="6" rx="1.6" />
      <path d="M8 11v4a2 2 0 0 0 2 2h6" />
      <path d="m14 17 2 2-2 2" />
    </svg>
  ),
  dds: ({ size = 26, ...rest }: IconProps) => (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.5} {...rest}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    </svg>
  ),
};
