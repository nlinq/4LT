export function applyCompanyToDom(cfg) {
  // Text placeholders
  document.querySelectorAll("[data-company-name]").forEach(el => { el.textContent = cfg.companyName; });
  document.querySelectorAll("[data-company-address]").forEach(el => { el.textContent = cfg.companyAddress; });
  document.querySelectorAll("[data-company-phone]").forEach(el => { el.textContent = cfg.companyPhoneNumber; });
  document.querySelectorAll("[data-company-email]").forEach(el => { el.textContent = cfg.companyEmail; });

  // Href placeholders like mailto:__COMPANY_EMAIL__ / tel:__COMPANY_PHONE__
  document.querySelectorAll("a[href*='__COMPANY_EMAIL__']").forEach(a => {
    a.setAttribute("href", a.getAttribute("href").replace(/__COMPANY_EMAIL__/g, cfg.companyEmail));
  });
  document.querySelectorAll("a[href*='__COMPANY_PHONE__']").forEach(a => {
    const phoneHref = cfg.companyPhoneNumber.replace(/[^\d\+]/g, "");
    a.setAttribute("href", a.getAttribute("href").replace(/__COMPANY_PHONE__/g, phoneHref));
  });
}
