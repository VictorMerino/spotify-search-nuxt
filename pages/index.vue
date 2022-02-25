<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import ResultList from '@/components/ResultList.vue'
import { useResultsStore } from '@/stores/results'
import { ref, computed } from 'vue'

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
    <div
      v-if="isLoading && Object.entries(resultList).length === 0"
      class="loading-wrapper"
      role="loading">
      <div class="loading"></div>
    </div>
    <ResultList v-else :result-raw="resultList" />
    <!-- TO-DO: error when searching: spinner goes forever. Timeout?? -->
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/lib/spinner.scss';
</style>
