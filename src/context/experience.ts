import { useLocation } from "react-router-dom";

export type Experience = "landing" | "corporate" | "private";

const STORAGE_KEY = "omshala.experience";

export function rememberExperience(exp: Exclude<Experience, "landing">) {
  try {
    sessionStorage.setItem(STORAGE_KEY, exp);
  } catch {
    /* ignore */
  }
}

function recallExperience(): Experience {
  try {
    const v = sessionStorage.getItem(STORAGE_KEY);
    if (v === "corporate" || v === "private") return v;
  } catch {
    /* ignore */
  }
  return "landing";
}

/**
 * Derive the current experience from the URL.
 * `/about` (shared) falls back to the last chosen experience.
 */
export function useExperience(): Experience {
  const { pathname } = useLocation();
  if (pathname.startsWith("/corporate")) return "corporate";
  if (pathname.startsWith("/private")) return "private";
  if (pathname.startsWith("/about")) return recallExperience();
  return "landing";
}