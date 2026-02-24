import { DEFAULT_THEME, themes } from "../config/themes.js";
import { setTheme } from "./theme.js";

export function applyTheme(themeName) {
  setTheme(themeName);
}

export function getThemeFromQueryOrStorage(search = "") {
  try {
    const params = new URLSearchParams(search || window.location.search);
    const q = params.get("theme");
    if (q && themes[q]) {
      localStorage.setItem("siteTheme", q);
      return q;
    }
  } catch (e) {}
  const saved = (() => {
    try { return localStorage.getItem("siteTheme"); } catch (e) { return null; }
  })();
  return (saved && themes[saved]) ? saved : DEFAULT_THEME;
}

export function setThemeAndPersist(themeName) {
  const name = themes[themeName] ? themeName : DEFAULT_THEME;
  try { localStorage.setItem("siteTheme", name); } catch (e) {}
  applyTheme(name);
}
