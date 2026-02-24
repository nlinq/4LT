import { useEffect } from "react";
import { companyConfig } from "../config/companyConfig";
import { getThemeFromQueryOrStorage, applyTheme } from "../theme/themeManager";
import { applyCompanyToDom } from "./companyDom";
import { reloadTemplateScripts } from "./templateScripts";
import { useLocation } from "react-router-dom";

/**
 * Runs after each page render/navigation:
 * - sets document title
 * - applies company config to placeholders (data-company-*)
 * - applies theme (data-theme on <html>)
 * - reloads template JS initializers (so carousels/animations work)
 */
export function usePageInit(pageTitleSuffix = "") {
  const location = useLocation();

  useEffect(() => {
    const suffix = (pageTitleSuffix || "").replace(/\s+/g, " ").trim();
    const fullTitle = suffix
      ? `${companyConfig.companyName} ${suffix.startsWith("-") ? "" : "- "}${suffix}`
      : companyConfig.companyName;

    document.title = fullTitle;

    const theme = getThemeFromQueryOrStorage(location.search);
    applyTheme(theme);

    applyCompanyToDom(companyConfig);

    // Re-run template JS initializers for the current DOM
    reloadTemplateScripts();

  }, [location.pathname, location.search, pageTitleSuffix]);
}
