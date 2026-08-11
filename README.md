# 61 Kingdom — Website Redesign

A clean, minimalist redesign of the 61 Kingdom website.
Built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools.

---

## Project Structure

```
61kingdom-website/
│
├── index.html                  ← Homepage
│
├── pages/
│   ├── about.html              ← About Us page
│   ├── services.html           ← Services page
│   └── photo-challenge.html    ← Photo Challenge page
│
├── assets/
│   ├── css/
│   │   └── style.css           ← Shared design system (tokens, nav, footer, buttons)
│   └── js/
│       └── main.js             ← Shared JS (scroll reveal, nav behavior)
│
└── .vscode/
    └── settings.json           ← VS Code Live Server config
```

---

## How to Open in VS Code

1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `61kingdom-website` folder
4. You'll see the full file tree in the sidebar

---

## How to Preview in the Browser

Install the **Live Server** extension in VS Code:

1. Click the Extensions icon in VS Code (or press `Ctrl+Shift+X`)
2. Search for **Live Server** by Ritwick Dey
3. Click Install
4. Right-click `index.html` in the file tree → **Open with Live Server**
5. Your browser will open at `http://localhost:5500`

Pages will auto-refresh every time you save a file.

---

## Design System

| Token       | Value       | Usage                          |
|-------------|-------------|-------------------------------|
| `--clay`    | `#C8A97E`   | Accents, buttons, labels       |
| `--ink`     | `#1A1714`   | Dark backgrounds, body text    |
| `--sand`    | `#F4EFE8`   | Section backgrounds            |
| `--stone`   | `#8C8075`   | Secondary / muted text         |
| `--white`   | `#FDFCFA`   | Page background                |

**Fonts:** Cormorant Garamond (headings) + DM Sans (body) — loaded from Google Fonts.

---

## How to Deploy to WordPress

See the WordPress transfer guide. In short:

1. Each HTML page becomes a PHP template in your child theme
2. Add `<?php /* Template Name: ... */ get_header(); ?>` at the top
3. Paste the body content, close with `<?php get_footer(); ?>`
4. Assign the template to the page in **Pages → Edit → Page Attributes**

---

## Pages

| Page            | File                        | Live URL                          |
|-----------------|-----------------------------|-----------------------------------|
| Homepage        | `index.html`                | 61kingdom.com/                    |
| About Us        | `pages/about.html`          | 61kingdom.com/about-us/           |
| Services        | `pages/services.html`       | 61kingdom.com/services/           |
| Photo Challenge | `pages/photo-challenge.html`| 61kingdom.com/photo-challenge/    |
