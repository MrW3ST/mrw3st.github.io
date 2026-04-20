# mrw3st.github.io

Site portfolio personnel — Analyste OSINT.

🌐 [mrw3st.github.io](https://mrw3st.github.io)

---

## Fonctionnalités

- Version **française** et **anglaise** (`/en/`)
- Thème **sombre** (Dracula) / **clair** avec bascule animée, mémorisé en `localStorage`
- Terminal interactif sur la page Méthodologie (stepper animé, tap-to-skip)
- Icône Discord : affiche le pseudo au survol, **copie dans le presse-papier** au clic
- Responsive mobile

---

## Structure

```
mrw3st.github.io/
├── index.html
├── tools.html
├── methodo.html
├── projects.html
├── robots.txt
├── en/
│   ├── index.html
│   ├── tools.html
│   ├── methodo.html
│   └── projects.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── theme.js          # anti-FOUC + toggle thème
    │   └── effects.js        # typewriter, stepper, fade-in, discord copy
    └── images/
        ├── favicon.png
        ├── english.svg
        ├── french.svg
        ├── github-mark-white.svg
        ├── InBug-White.png
        ├── email-envelope-white-icon.svg
        └── Discord-Symbol-White.svg
```
