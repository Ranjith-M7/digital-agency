// src/components/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    // Prevent browser from trying to restore previous scroll position
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch (e) {
        // some browsers/environments may throw — ignore safely
      }
    }

    // Choose the scrollable element (window or fallback)
    const scroller = document.scrollingElement || document.documentElement || document.body;

    // Immediately jump to top before paint (useLayoutEffect)
    scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // If your layout needs a small delay to render content (images/lazy),
    // you can optionally call again a bit later (uncomment if needed):
    // const t = setTimeout(() => scroller.scrollTo({ top: 0, left: 0 }), 50);
    // return () => clearTimeout(t);

  }, [pathname, search, hash]); // run whenever location changes

  return null;
}
