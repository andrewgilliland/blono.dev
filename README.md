# blono.dev

A sweet community-driven website for Bloomington-Normal developers, featuring event listings, workshops, and resources for local tech enthusiasts.

## Live Demo

🌐 [https://blono.dev](https://blono.dev)

## Features

- Upcoming developer events and happy hours
- Workshop and lesson content in Markdown
- Event details with add-to-calendar functionality
- A fully static site built with Astro, Tailwind CSS, and TypeScript, deployed to Cloudflare

## Getting Started

Requires Node.js 22.12 or later (see `.nvmrc`).

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:4321](http://localhost:4321) to view the site.

## Scripts

| Command              | What it does                       |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start the dev server               |
| `npm run build`      | Build the static site into `dist/` |
| `npm run preview`    | Serve the built site locally       |
| `npm test`           | Run the unit tests (Vitest)        |
| `npm run type-check` | Type-check with `astro check`      |
| `npm run lint`       | Lint with ESLint                   |
| `npm run format`     | Format with Prettier               |

A pre-commit hook runs type-check, lint, and tests.

## Adding an Event

Add an entry to `data/events.json`. The build checks every entry, so a mistake fails the build instead of shipping:

- `startTime` and `endTime` are ISO 8601 with a UTC offset, e.g. `2025-12-04T17:00:00-06:00` (`-06:00` in winter, `-05:00` in summer). Event times are always shown in Central Time.
- `endTime` must be after `startTime`.
- `image.src` is optional and points into `src/assets/`, relative to the JSON file, e.g. `../src/assets/keg-grove-2.webp`.

Whether an Event is upcoming or past is worked out in the visitor's browser, so a finished Event moves to Past without a rebuild (see `docs/adr/0001-static-site-with-client-side-upcoming-check.md`).

## Project Structure

- `src/pages/` — Routes (one `.astro` file per page)
- `src/components/` — UI and layout components
- `src/layouts/` — The shared page layout
- `src/content.config.ts` — Content collections for Events and Lessons
- `src/lib/` — Event and Lesson logic, with tests
- `src/scripts/` — Client-side scripts (upcoming check, add to calendar), with tests
- `data/events.json` — Event data
- `src/markdown/workshops/` — Workshop lesson content
- `src/assets/` — Images, optimized at build time
- `public/` — Static files served as-is (favicon, logos)
- `GLOSSARY.md` and `docs/adr/` — Domain language and architecture decisions

## Contributing

Pull requests and issues are welcome! Please follow the code style and add tests where appropriate.

## License

MIT
