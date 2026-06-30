# Next Resume Portal

A responsive Next.js recreation of the original `jm-mern-resume-portal`, restyled with a new editorial theme and browser-local persistence.

## Features

- Home, programmer resume, artist gallery, and about routes
- Versioned `localStorage` preferences for theme and favorite artwork
- Responsive layout with mobile-friendly single-column galleries

## Install

```powershell
npm install
```

## Development

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```powershell
npm run build
npm start
```

## Tests And Coverage

All automated tests and shared test utilities live in `tests/`. Vitest is configured to discover tests only from that directory.

```powershell
npm run lint
npm run typecheck
npm test
npm run test:watch
npm run test:coverage
```

## GitHub Actions

The CI pipeline lives in `.github/workflows/ci.yml`. It runs on every push and pull request, installs dependencies with `npm ci`, audits dependencies, lints, typechecks, runs unit tests, verifies coverage, builds the production Next.js app, and uploads the coverage report as an artifact.

The workflow also includes a separate Code Scanning job:

- Quality: ESLint publishes SARIF results to GitHub code scanning.
- Security: CodeQL runs the `security-extended` and `security-and-quality` query suites, and pull requests run GitHub's dependency review action.

Dependabot is configured in `.github/dependabot.yml` to open weekly npm and GitHub Actions update pull requests.
