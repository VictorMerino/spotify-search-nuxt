<script setup>
const title = ref('VIC Spotify Search App')
</script>

<template>
  <div>
    <Html lang="en">
      <Head>
        <Title>{{ title }}</Title>
        <Meta
          name="description"
          :content="`App trying Nuxt 3 with Spotify Search API`" />
      </Head>
    </Html>

    HEADER
    <div class="container">
      <slot />
    </div>

    FOOTER
  </div>
</template>
