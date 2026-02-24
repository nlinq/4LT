let lastRun = 0;

function injectScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-react-injected="true"][src="${src}"]`);
    if (existing) existing.remove();

    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.defer = false;
    s.dataset.reactInjected = "true";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

// These scripts contain the DOM-dependent initializers (template IIFE).
const INIT_SCRIPTS = [
  "/assets/js/counter-potnt.js",
  "/assets/js/main.js",
];

export async function reloadTemplateScripts() {
  // Debounce: avoid repeated reloads if multiple effects fire quickly
  const now = Date.now();
  if (now - lastRun < 100) return;
  lastRun = now;

  // Wait a tick so React DOM is committed
  await new Promise(r => setTimeout(r, 0));

  for (const src of INIT_SCRIPTS) {
    try { await injectScript(src); } catch (e) { /* ignore */ }
  }
}
