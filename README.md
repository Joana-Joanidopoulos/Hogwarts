# 🧙‍♂️ Hogwarts Party Invites ⚡

A magical Harry Potter–themed invitation system that creates personalized Hogwarts letters for your events!

## ✨ Features

- **Flying Envelope Animation**: Envelope flies in and opens
- **Personalized Content**: Customizes the letter from URL parameters
- **Responsive** and **Accessible**: Works on desktop/mobile, keyboard focus outlines
- **GitHub Pages–friendly**: All assets are relative and self-contained

## 🚀 Quick Start

1. Open `index.html` locally to see the invitation.
2. Open `example.html` to generate personalized links.

## 📝 URL Parameters

- `name` – Recipient's name (default: "Hexe/Zauberer")
- `event` – Event name / Motto (default: "Butterbier & Beats")
- `date` – Event date (default: "31.10.2025")
- `time` – Event time (default: "19:00 Uhr")
- `location` – Event location (default: "Hauptstraße 40")
- `details` – Extra details (optional; appended to the dresscode line)

## 🎯 Mapping
In the letter UI:
- **Motto** displays the `event` parameter.
- **Wann** shows `date` and `time` combined.

## 📦 Project Files

- `index.html` – Main invitation page
- `style.css` – Styling and animations
- `script.js` – Logic for animation & personalization
- `example.html` – Link generator
- `README.md` – This documentation

## 🌐 Deploy on GitHub Pages

**Project Pages** (recommended):
1. Create a public repo (e.g. `hogwarts-invite`), add these files to the root.
2. Commit & push.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **Branch: `main`**, **Folder: `/ (root)`**.
4. Wait for the green check; your site will be available at `https://<username>.github.io/<repo>/`.
5. Share links like: `https://<username>.github.io/<repo>/index.html?name=Harry&event=Butterbier%20%26%20Beats`

**User Pages** (optional):
- If deploying to `https://<username>.github.io/`, keep files in the repo named `<username>.github.io`.

## 🛡️ Notes

- No external fonts required; all assets are inline or local.
- Basic escaping is applied to URL parameters to prevent HTML injection.
- If a guest’s device prefers reduced motion, major animations are minimized.

— “We await your owl by return post.”
