<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'

const searchText = (text: string) => {
  console.log(text)
}
</script>
<template>
  <main>
    <SearchBox @search-text="searchText" />
    <p>ResultList</p>
  </main>
</template>
