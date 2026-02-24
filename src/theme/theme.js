import { themes, DEFAULT_THEME } from "../config/themes.js";

export function setTheme(themeName) {
  const name = themes[themeName] ? themeName : DEFAULT_THEME;
  document.documentElement.setAttribute("data-theme", name);
  localStorage.setItem("theme", name);
  window.dispatchEvent(new CustomEvent("theme:changed", { detail: { theme: name } }));
  return name;
}

export function initTheme() {
  const urlTheme = new URLSearchParams(window.location.search).get("theme");
  const stored = localStorage.getItem("theme");
  const envDefault = import.meta.env.VITE_THEME_DEFAULT;
  const initial = urlTheme || stored || envDefault || DEFAULT_THEME;
  return setTheme(initial);
}
