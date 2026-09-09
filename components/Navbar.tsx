"use client";

import { useCallback, useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth >= 1000) closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMenu]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    document.querySelectorAll("main section[id]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={stuck ? "nav is-stuck" : "nav"}>
      <div className="wrap">
        <div className="nav-in">
          <a className="mark" href="#top">
            <span className="glyph" aria-hidden="true">
              NS
            </span>
            <span className="full">{profile.name}</span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeId === item.href.slice(1) ? "true" : undefined}
              >
                {item.shortLabel}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            Menu
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="drawer" id="mobile-menu">
          <div className="wrap">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
