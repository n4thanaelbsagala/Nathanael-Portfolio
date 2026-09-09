"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "@/components/Icons";

type CopyState = "idle" | "copied" | "failed";

const LABELS: Record<CopyState, string> = {
  idle: "Copy address",
  copied: "Copied",
  failed: "Press Ctrl+C to copy",
};

export default function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    let success = true;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        success = document.execCommand("copy");
      } catch {
        success = false;
      }
      field.remove();
    }

    setState(success ? "copied" : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2400);
  };

  return (
    <>
      <button type="button" className="copy" onClick={copy}>
        <CopyIcon />
        <span>{LABELS[state]}</span>
      </button>
      <span role="status" aria-live="polite" className="visually-hidden">
        {state === "copied" ? "Email address copied to clipboard" : ""}
        {state === "failed" ? "Copy failed, select the address manually" : ""}
      </span>
    </>
  );
}
