# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

# Spotify Search

App that searchs in Spotify based on user input.
It can search albums, artists and tracks

Improvements: let user select between them.

---
### Technologies used:
- Vue 3 as the main frontend framework (with Typescript)
- Nuxt 3 Beta as the meta framework
- Vite (with Nuxi) for build and development server
- Pinia for state management
- SCSS
- Tailwind CSS
- Nitro Server Engine (from Nuxt) for API endpoint that retrieve app token. Improvement: check if token still valid and avoid retrieving it again. Maybe make all calls from Nitro instead of directly from front? Does it make any sense?
- Prettier + ESLint custom config

### Next steps:
- Unit Tests with Vitest
- E2E Tests with Cypress
- Result page: don't know if will need to filter in total results, or maybe a posibility to search for an item based on its id (hopefully last option)
- Song Player: WebAudioAPI? SpotifyAPI? Maybe both?
- Separate .env and .local.env
- Check if token is already provided
- All http calls from backend? Not actually sure
- More detailed types and interfaces
- Different

---
---
# Really important:
```
You should provice your own environment variables:
ACCOUNT_TOKEN_URL --> Url for retrieving access token
CLIENT_ID --> Your Spotify App Client ID
CLIENT_SECRET --> Your Spotify App Client Secret
```
---
---
### Node.js version tested:
```
v16.13.2
```

## To run the project, just:
```
npm install && npm run dev
(this will run concurrently run backend server and frontend one. Thanks to Nuxt)
```

### Or if you prefer it production-ready:
```
npm run build (for the frontend)
```
