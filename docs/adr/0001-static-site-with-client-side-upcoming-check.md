# Fully static site; "upcoming" is decided in the browser

The site is built with Astro as fully static output (no adapter, no server code) and served from Cloudflare Workers static assets. Because static HTML freezes "now" at build time, whether an Event is an Upcoming Event or a Past Event is re-evaluated by a small client-side script against the viewer's clock: ended Events move to Past, the Next Event banner advances, and "Add to calendar" is hidden. The build-time HTML is only the fallback for visitors without JavaScript.

## Considered Options

- **Server rendering via `@astrojs/cloudflare`**: always correct, but adds a runtime for a site whose data only changes when someone commits to the repo.
- **Static plus a scheduled daily rebuild**: no client JS, but stale for up to a day (e.g. tonight's Event still "upcoming" tomorrow morning) and needs an external cron trigger.

## Consequences

Don't "simplify" by removing the client-side script; the static HTML alone will be wrong as soon as an Event ends after the last deploy.
