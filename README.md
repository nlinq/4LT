# Nlinq Solutions Website (React + Vite)

This project is a React conversion of the original static website template.
The UI/CSS/JS assets are preserved so the site looks the same.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Global Company Config
Edit:
- `src/config/companyConfig.js`
or set environment variables (Vite):
- `VITE_COMPANY_NAME`
- `VITE_COMPANY_ADDRESS`
- `VITE_COMPANY_PHONE`
- `VITE_COMPANY_EMAIL`

See `.env.example`.

## Theme
Three themes are available. Default matches the current site look.

- `default`
- `dark`
- `ocean`

Switch theme:
- URL: `?theme=dark`
- Console: `localStorage.setItem("siteTheme","ocean"); location.reload();`

Theme variables live in:
- `public/assets/css/theme.css`
- `src/config/themes.js` (JS theme metadata)

## Hosting note (React Router)
For static hosting, configure a rewrite so all routes serve `index.html`.
