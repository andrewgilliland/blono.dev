src/
components/
ui/ Atomic, reusable components used anywhere
layout/ App-wide layout components
sections/ Composable blocks used on pages, not reusable everywhere
icons/ Local SVG/icon React components
forms/ Self-contained form components
shared/ Helpers or widgets used by multiple features/pages

# blono.dev

A community-driven website for Bloomington-Normal developers, featuring event listings, workshops, and resources for local tech enthusiasts.

## Live Demo

🌐 [https://blono.dev](https://blono.dev)

## Features

- Upcoming developer events and happy hours
- Workshop and lesson content in Markdown
- Event details with add-to-calendar functionality
- Modern UI built with Next.js, Tailwind CSS, and TypeScript

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app/` — Next.js app directory (routing, pages)
- `src/components/` — UI and layout components
- `data/events.json` — Event data
- `markdown/workshops/` — Workshop lesson content
- `public/` — Images and static assets
- `styles/` — Global styles (Tailwind CSS)

## Contributing

Pull requests and issues are welcome! Please follow the code style and add tests where appropriate.

## License

MIT
