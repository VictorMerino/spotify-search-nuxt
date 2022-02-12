<script setup>
import Header from '@/components/structure/Header.vue'
import Footer from '@/components/structure/Footer.vue'

const title = ref('VIC Spotify Search App')
</script>

<template>
  <Html lang="en">
    <Head>
      <Title>{{ title }}</Title>
      <Meta
        name="description"
        :content="`App trying Nuxt 3 with Spotify Search API`" />
    </Head>
  </Html>

  <div class="app-wrapper bg-slate-800 text-slate-100">
    <Header />
    <main class="container">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
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
