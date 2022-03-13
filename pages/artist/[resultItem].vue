<script setup lang="ts">
import { useResultsStore } from '@/stores/results'

import ResultItem from '@/components/ResultItem'

const resultStore = useResultsStore()
const resultItem = computed(() => resultStore.resultItem)
onMounted(() => {
  resultStore.getSingleResult(useRoute().params.resultItem, 'artist')
})
</script>
<template>
  <div class="container my-4">
    <ResultItem v-if="resultItem" :item="resultItem" layout="single-result" />
  </div>
</template>
