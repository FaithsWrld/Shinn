# Faith Kola-Olusa · Portfolio

Personal portfolio website for Faith Kola-Olusa — IT Support Specialist, CompTIA Candidate, Cybersecurity Enthusiast.

## Structure

```
fko_portfolio/
├── index.html          ← Home
├── pages/
│   ├── about.html
│   ├── skills.html
│   ├── experience.html
│   ├── creative.html
│   └── contact.html
├── css/
│   ├── global.css      ← Shared styles (nav, cursor, buttons)
│   ├── home.css        ← Home page styles
│   └── pages.css       ← Inner pages styles
├── js/
│   ├── global.js       ← Cursor, nav, scroll reveal
│   ├── home.js         ← Counter animations
│   └── skills.js       ← Skill bar animations
└── README.md
```

## How to Host on GitHub Pages

1. Create a new GitHub repository named `fko-portfolio` (or `yourusername.github.io` for a root domain)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/fko-portfolio`

## To Do Before Publishing

- [ ] Add your GitHub handle to the contact page link
- [ ] Add your LinkedIn URL once profile is built
- [ ] Add any projects or work samples as you build them
- [ ] Consider adding a profile photo to the About page
- [ ] Wire up the contact form (use Formspree.io — free, no backend needed)

## Contact Form (Formspree)

1. Go to https://formspree.io and create a free account
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/xxxxxxx`
3. In `pages/contact.html`, update the form tag to:
   ```html
   <form action="https://formspree.io/f/xxxxxxx" method="POST">
   ```
4. Remove the JS form handler at the bottom of contact.html
5. Done — emails will arrive in your inbox

---

Built March 2026 · Every step forward counts
