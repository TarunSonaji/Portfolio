# Tarun Sonaji — Portfolio

A from-scratch personal portfolio built with plain HTML, CSS and JavaScript (no build step required).

## View my portfolio
[View here](https://tarunsonaji.github.io/Portfolio/)

## Run it

Just open `index.html` in a browser, or serve the folder locally:

```
npx serve .
```

## Files

```
portfolio/
├── index.html      → all page content/sections
├── style.css       → design tokens + all styling
├── script.js       → interactions (theme, nav, projects data, skills data, form, effects)
├── assets/
│   ├── profile.jpg               → your photo (optional — a placeholder shows if missing)
│   └── Tarun_Sonaji_Resume.pdf   → your resume, linked from the Resume buttons
└── README.md
```

## Things you'll likely want to edit

- **Your photo** — drop a square photo at `assets/profile.jpg`. If the file isn't there, a clean placeholder is shown automatically (see `#portraitFallback` in `index.html`).
- **Resume file** — replace `assets/Tarun_Sonaji_Resume.pdf` with your real PDF (keep the same filename, or update the `href` in `index.html`/the download links).
- **Social links** — the GitHub, LinkedIn and email links use placeholder URLs (`https://github.com/`, `https://linkedin.com/`). Search `index.html` for these and swap in your real profile URLs.
- **Projects & skills data** — both live as simple JavaScript objects near the top of `script.js` (`SKILLS` and `PROJECTS` arrays). Edit the arrays to add, remove, or update entries — the page renders them automatically, including the project detail modal content.
- **Achievements & certifications** — plain HTML in the `#achievements` section of `index.html`; edit or duplicate the `.ach-card` / `.cert-chip` blocks.
- **Contact form** — currently client-side validation only (no message is actually sent). To receive messages, connect the form in `script.js` to a service like Formspree, EmailJS, or your own backend endpoint.

## Notes

- Dark mode is the default; the toggle in the nav remembers the visitor's choice via `localStorage`.
- Respects `prefers-reduced-motion` for anyone who has that OS setting enabled.
- No frameworks, no build tools — safe to open directly in VS Code and edit.
