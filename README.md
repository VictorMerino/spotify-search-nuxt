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
- Or maybe we can better use: https://www.npmjs.com/package/@types/spotify-api (It seems stable)
- Different component depend on item type? (at least a different design... --Layouts--)

### User tests to be written (for Testing Library tests):
  - Si buscas Bowie, te tiene que salir todas las canciones que tengan la palabra Bowie, los artistas que lo contengan, y aunque menos, también los álbumes


### TO-DO list:
  - Reload result detail (this view is still not implemented)
  - Search without a query
  - Check if token is already present
  - If token is not present or call to search fails: get Token again, but only in these cases
  - First, we will try storing the variable in Pinia results store
  - When every query be managed by Nitro backend, this check will be done in the server
  - Add animations: at least when going to result page from results list
  - Add mocks for service
  - Debounce: do not need to click enter to search, but with a delayed from user call to endpoint
  - Try open-props: if used, it would deprecate Tailwind (not sure if sass as well, maybe not, for responsive layout functions)
  - Feature: que la grafía no vaya de la mano. Búsqueda predictiva
*/
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
