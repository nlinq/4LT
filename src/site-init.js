import { companyConfig } from "./config/companyConfig.js";
import { getAssetsForTheme } from "./config/brandAssets.js";
import { initTheme, setTheme } from "./theme/theme.js";

function fillText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

function fillAttr(selector, attr, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.setAttribute(attr, value);
  });
}

function replacePlaceholdersInHead() {
  // Replace placeholders in <title> and meta tags
  const companyName = companyConfig.companyName;
  if (document.title.includes("__COMPANY_NAME__")) {
    document.title = document.title.replaceAll("__COMPANY_NAME__", companyName);
  }
  document.querySelectorAll('meta[content*="__COMPANY_NAME__"]').forEach((m) => {
    const c = m.getAttribute("content") || "";
    m.setAttribute("content", c.replaceAll("__COMPANY_NAME__", companyName));
  });
}

function applyCompanyConfig() {
  fillText("[data-company-name]", companyConfig.companyName);
  fillText("[data-company-phone]", companyConfig.companyPhoneNumber);
  fillText("[data-company-email]", companyConfig.companyEmail);
  fillText("[data-company-address]", companyConfig.companyAddress);

  // Update tel/mailto links if placeholders exist
  fillAttr('a[href^="tel:__COMPANY_PHONE__"]', "href", `tel:${companyConfig.companyPhoneNumber}`);
  fillAttr('a[href^="mailto:__COMPANY_EMAIL__"]', "href", `mailto:${companyConfig.companyEmail}`);

  // If link has data attributes, keep href in sync
  fillAttr("a[data-company-phone-link]", "href", `tel:${companyConfig.companyPhoneNumber}`);
  fillAttr("a[data-company-email-link]", "href", `mailto:${companyConfig.companyEmail}`);
}


function applyBrandAssets(themeName) {
  const theme = themeName || document.documentElement.getAttribute("data-theme") || "default";
  const assets = getAssetsForTheme(theme);

  // Logos
  fillAttr("img[data-company-logo]", "src", assets.logo);
  fillAttr("img[data-company-footer-logo]", "src", assets.footerLogo);

  // Background image variable for CSS (optional usage)
  document.documentElement.style.setProperty("--img-site-bg", `url('${assets.siteBackground}')`);
}

function exposeThemeAPI() {
  // Optional: allow manual theme changes from console or custom UI later
  window.setSiteTheme = setTheme;
  window.getSiteTheme = () => document.documentElement.getAttribute("data-theme");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  replacePlaceholdersInHead();
  applyCompanyConfig();
  applyBrandAssets();
  window.addEventListener("theme:changed", (e) => applyBrandAssets(e.detail?.theme));
  exposeThemeAPI();
});
