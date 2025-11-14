# React Portfolio (Vite)

This is a minimal React version of your portfolio built with Vite.

Quick start

1. Move into the project folder:

```bash
cd react-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run in dev mode:

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

Notes

- Place your images in `react-portfolio/public/images/`:
 - Place your images in `react-portfolio/public/images/`:
  - `logo.jpeg` (used in the navbar)
  - `developer.png` (used on the home section)

  You can copy them from the existing project `public/images` folder:

```bash
# from project root
cp public/images/logo.jpeg react-portfolio/public/images/
cp public/images/developer.png react-portfolio/public/images/
```

- The project uses the Font Awesome CDN for icons (included in `index.html`).
- If you prefer to keep a single site root instead of a new folder, I can move files into place or set up the React app at the repository root.

CI / Deploy

- I added a GitHub Actions workflow at `.github/workflows/ci.yml` (build + test) and `.github/workflows/pages.yml` (build + deploy to GitHub Pages). The deploy workflow uses the GitHub Pages actions and will publish the `react-portfolio/dist` folder when you push to the `main` branch.

Testing

- Run tests locally with:

```bash
cd react-portfolio
npm ci
npm run test
```

Notes

- I implemented React Router routes for About / Projects / Contact and a responsive hamburger menu for mobile. The app remains inside the `react-portfolio` folder so your original `public/` site is left untouched. If you'd rather I move the React app to the repository root, tell me and I'll move files and update paths.

What I included

- `src/components/Navbar.jsx` — navigation with icons and animated underline on hover
- `src/pages/Home.jsx` — hero/intro section
- `src/components/Footer.jsx` — footer with social icons
- `src/index.css` — global styles, responsive rules, and animations

Next steps I can do for you

- Add routing (React Router) and separate pages for Projects, About, Contact.
- Add a mobile hamburger menu and animations.
- Convert into a deployable build and add a GitHub Actions deploy workflow.

Tell me which of these you'd like next.