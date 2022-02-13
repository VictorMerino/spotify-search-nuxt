import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/styles.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  buildModules: ['@pinia/nuxt'],
  publicRuntimeConfig: {
    SPOTIFY_SEARCH_URL: process.env.SPOTIFY_SEARCH_URL
  },
  privateRuntimeConfig: {
    ACCOUNT_TOKEN_URL: process.env.ACCOUNT_TOKEN_URL,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
  }
  // TO-DO: change dir structure to /src folder: {}
})
