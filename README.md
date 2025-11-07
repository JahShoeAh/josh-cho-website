# Josh Cho Portfolio

A retro-styled, single-page portfolio built with **Next.js 14**, **React**, and **Tailwind CSS**. The hero showcases a profile photo with terminal vibes, while the project section renders expandable cards sourced from a `resumeData` object. Each card can expose both a live link and a GitHub repo, plus technology tags.

## Getting Started

```bash
npm install
npm run dev
# open http://localhost:3000
```

Need to preview on another device? Run `npm run dev -- --hostname 0.0.0.0 --port 3000` and hit `http://<your-ip>:3000` on the same Wi‑Fi.

## Deploying

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/). The defaults (`npm run build`, output `.next`) work out of the box.
3. Keep `public/profile.jpg` and `public/resume.pdf` up to date—Navbar’s Resume tab points to `/resume.pdf`.

## Customization Cheatsheet

| Area | File | Notes |
| --- | --- | --- |
| Navbar links (Contact/Resume/GitHub/LinkedIn) | `components/Navbar.js` | Update the `links` array + Tailwind spacing. |
| Hero layout + photo | `components/Hero.js` | Adjust the responsive `max-w-*`, image sizes, or hide/show the ASCII overlays. |
| Project data | `pages/index.js` (`resumeData`) | Each entry accepts `title`, `timeline`, `description`, `linkUrl`, `linkLabel`, `repoUrl`, `repoLabel`, `tags`, `icon`. |
| Card layout | `components/Card.js` | Uses optional `linkUrl`/`repoUrl`; icons are hidden automatically when links are missing. |
| Global styling | `styles/globals.css`, `tailwind.config.js` | Fonts, colors, animation tweaks. |

## Troubleshooting Builds

If `npm run build` ever complains about `vendor-chunks/next.js` or SWC patches:

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

The error usually surfaces when the lockfile was generated offline—reinstalling with network access regenerates the missing chunks.

## License

This project is personal and unlicensed—feel free to reference the structure, but please don’t ship it verbatim without attribution.***
