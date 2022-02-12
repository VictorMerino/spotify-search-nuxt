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

  <Header />
  <main class="container">
    <slot />
  </main>

  <Footer />
</template>
