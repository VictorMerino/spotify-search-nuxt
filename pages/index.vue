<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import ResultList from '@/components/ResultList.vue'

const isLoading = ref(false)
const searchText = (text: string) => {
  console.log(text)
}
const resultList = computed(() => [])
</script>
<template>
  <SearchBox @search-text="searchText" />
  <div v-if="isLoading" class="loading"></div>
  <ResultList v-else :result-raw="resultList" />
</template>
