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

Projects

- I added three project cards to the Projects page that point to your repositories:
  - blood-donation-with-next.js — https://github.com/Daudicode12/blood-donation-with-next.js.git
  - healthSocial — https://github.com/Daudicode12/healthSocial.git
  - foundationWeb — https://github.com/Daudicode12/foundationWeb.git

- Images are temporary placeholders sourced from Unsplash. Replace them later by editing `src/pages/Projects.jsx` and updating the `img` URLs or by copying screenshots into `react-portfolio/public/images` and pointing the src to `/images/...`.

Data & live repo metadata

- The Projects list is now stored in `src/data/projects.js` to make adding/removing projects easier.
- The Projects page attempts to fetch lightweight metadata (stars and the repo description) from the GitHub API on page load. This fetch is unauthenticated and subject to GitHub's rate limits (typically 60 requests/hour per IP). If the API call fails or is rate-limited, the page will continue to show the placeholder description from the data file.

To change the project images or add more projects, edit `src/data/projects.js`.

README summaries, authenticated requests & demo links

- The Projects page now also attempts to fetch a short README summary for each repo (first paragraph) and the repo's `homepage` field. If the `homepage` field exists it will be used as a "Live demo" link on the card.
- Because unauthenticated GitHub API requests are rate-limited (60/hour/IP), you can provide a token to increase limits. Create a personal access token on GitHub with no scopes (public read only) and set it in an environment variable named `VITE_GITHUB_TOKEN` before running the dev server or build. Example (Linux/macOS):

```bash
export VITE_GITHUB_TOKEN=ghp_xxx...
npm run dev
```

Or create a `.env` file in `react-portfolio/` with:

```
VITE_GITHUB_TOKEN=ghp_xxx...
```

The app will use the token automatically when present to fetch repo metadata and README content. If you don't provide a token the app will still work but may return only the placeholder data when rate-limited.

TypeScript

- I converted the app to a mixed TypeScript setup. New `.tsx` entry and component files were added. To run the type checker:

```bash
cd react-portfolio
npm run typecheck
```

The project keeps `src/data/projects.js` as a JS data file for simplicity; components are typed minimally to keep the conversion focused and safe. If you'd like stricter types I'll tighten the interfaces next.

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