// Brand assets (logos + background images) per theme.
// Defaults keep the current site looking exactly the same.

export const brandAssets = {
  // Theme name -> assets. "default" is required.
  themes: {
    default: {
      logo: import.meta.env.VITE_LOGO_DEFAULT ?? "/assets/images/logo.png",
      footerLogo: import.meta.env.VITE_FOOTER_LOGO_DEFAULT ?? "/assets/images/logo.png",
      // Used by CSS var --img-site-bg (optional)
      siteBackground: import.meta.env.VITE_BG_DEFAULT ?? "/assets/images/breadcrumb-bg.png",
    },
    dark: {
      logo: import.meta.env.VITE_LOGO_DARK ?? "/assets/images/logo.png",
      footerLogo: import.meta.env.VITE_FOOTER_LOGO_DARK ?? "/assets/images/logo.png",
      siteBackground: import.meta.env.VITE_BG_DARK ?? "/assets/images/breadcrumb-bg.png",
    },
    ocean: {
      logo: import.meta.env.VITE_LOGO_OCEAN ?? "/assets/images/logo.png",
      footerLogo: import.meta.env.VITE_FOOTER_LOGO_OCEAN ?? "/assets/images/logo.png",
      siteBackground: import.meta.env.VITE_BG_OCEAN ?? "/assets/images/breadcrumb-bg.png",
    },
  },
};

export function getAssetsForTheme(themeName) {
  const t = brandAssets.themes[themeName] ? themeName : "default";
  return brandAssets.themes[t];
}
