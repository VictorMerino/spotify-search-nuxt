<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import ResultList from '@/components/ResultList.vue'
import { useResultsStore } from '@/stores/results'

const resultStore = useResultsStore()
const isLoading = ref(false)
const searchText = (text: string) => {
  // @ts-expect-error this fails type checking
  resultStore.resultList = {}
  isLoading.value = true
  resultStore.searchText(text)
}
const resultList = computed(() => resultStore.resultList)
</script>
<template>
  <div class="container">
    <SearchBox @search-text="searchText" />
    <div v-if="isLoading" class="loading"></div>
    <ResultList v-else :result-raw="resultList" />
  </div>
</template>
