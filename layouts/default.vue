<script setup>
import Header from '@/components/structure/Header.vue'
import Footer from '@/components/structure/Footer.vue'

const title = ref('VIC Spotify Search App')
</script>

<template>
  <div class="app-wrapper bg-slate-800 text-slate-50">
    <Html lang="en">
      <Head>
        <Title>{{ title }}</Title>
        <Meta
          name="description"
          :content="`App trying Nuxt 3 with Spotify Search API`" />
      </Head>
    </Html>

    <slot name="header"><Header /></slot>
    <main>
      <slot />
    </main>
    <slot name="footer"><Footer /></slot>
  </div>
</template>

<style>
:root {
  --bg-dark: #353535;
  --bg-light: #3e3e3e;
  --color-dark: rgba(255, 255, 255, 0.3);
  --color-light: #fff;
  --color-links: #b3b3b3;
  --radius-lite: 5px;
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
