# Study Hub — Setup Guide

A clean study resource hub for IT/SE students (Y1S2: DSA, OOP, DM, IS, TW, SE).

## File Structure

```
studyhub/
├── index.html              ← Main page (all sections)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   ├── resources.js    ← YOUR RESOURCE DATA (edit this!)
│   │   └── main.js         ← Filtering, rendering, form logic
│   ├── files/              ← Put your PDFs here
│   │   └── (your .pdf files)
│   └── images/             ← Optional images
└── README.md
```

## How to Add Resources

Open `assets/js/resources.js` and add an entry to the `RESOURCES` array:

```js
{
  id: 9,
  module: "OOP",          // DSA | OOP | DM | IS | TW | SE
  type:   "mock",         // mock | ref | notes
  title:  "OOP Mock #2",
  desc:   "Covers design patterns and interfaces.",
  openUrl: "https://forms.gle/YOUR_FORM",  // or null
  dlUrl:   null                            // or "assets/files/oop-mock2.pdf"
}
```

## How to Host (Free)

**Option 1 — GitHub Pages (recommended)**
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch / root
3. Your site: `https://yourusername.github.io/studyhub`

**Option 2 — Netlify**
1. Drag and drop the folder at netlify.com/drop
2. Instant live URL

## Customise

- **Your name / batch**: Edit `index.html` — search for "12.1 WD 222"
- **Contact links**: Update the email and WhatsApp links in the Contact section
- **WhatsApp channel**: Replace the `href` on "Join Channel" button
- **Accent colour**: Change `--accent` in `style.css` (default: `#6c8fff`)

## Connect a Real Feedback Form

Replace the form submit handler in `main.js` with Formspree:

```js
form.addEventListener('submit', async e => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  });
  form.reset();
  success.style.display = 'block';
});
```

Sign up free at formspree.io.
