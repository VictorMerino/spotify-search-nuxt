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
const goToResult = (id: string, type: string) => {
  console.table({ id, type })
}
const resultList = computed(() => resultStore.resultList)
</script>
<template>
  <div class="container">
    <SearchBox @search-text="searchText" />
    <div
      v-if="isLoading && Object.entries(resultList).length === 0"
      class="loading-wrapper">
      <div class="loading"></div>
    </div>
    <div v-else-if="resultList.error">
      <div class="alert-message">{{ resultList.error.error.message }}</div>
    </div>
    <ResultList v-else :result-raw="resultList" @go-to-result="goToResult" />
    <!-- TO-DO: error when searching: spinner goes forever. Timeout?? -->
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/lib/spinner.scss';
.alert-message {
  @apply mx-4;
  border: 1px solid #ffeeba;
  border-radius: var(--radius-lite);
  margin-top: 2em;
  padding: 1em;
  background-color: #fff3cd;
  color: #856404;
}
</style>
