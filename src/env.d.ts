/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  /** Defined inline in MainHead.astro. "system" follows the OS setting. */
  setTheme(theme: "light" | "dark" | "system"): void;
}
